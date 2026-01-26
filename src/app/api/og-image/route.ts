import { readFile } from "fs/promises";
import path from "path";

type CachedImage = { contentType: string; buffer: Buffer };
const cache = new Map<string, CachedImage>();

async function getFallbackImage() {
  const fallbackPath = path.join(process.cwd(), "public", "images", "GBK.png");
  const buffer = await readFile(fallbackPath);
  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600"
    }
  });
}

function extractImageUrl(html: string) {
  const metaTags = [
    /<meta[^>]+property=["']og:image:secure_url["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["'][^>]*>/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["'][^>]*>/i
  ];

  for (const regex of metaTags) {
    const match = html.match(regex);
    if (match?.[1]) return match[1];
  }

  const imgMatch = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  if (imgMatch?.[1]) return imgMatch[1];

  return null;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return new Response("Missing url", { status: 400 });
  }

  if (cache.has(targetUrl)) {
    const cached = cache.get(targetUrl) as CachedImage;
    return new Response(cached.buffer, {
      headers: {
        "Content-Type": cached.contentType,
        "Cache-Control": "public, max-age=3600"
      }
    });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept-Language": "en-US,en;q=0.9,id;q=0.8"
      }
    });
    const html = await response.text();
    const imageUrl = extractImageUrl(html);

    if (!imageUrl || imageUrl.startsWith("data:")) {
      return await getFallbackImage();
    }

    const resolved = new URL(imageUrl, targetUrl).toString();
    const imageResponse = await fetch(resolved, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "image/avif,image/webp,image/*,*/*;q=0.8",
        Referer: targetUrl
      }
    });

    if (!imageResponse.ok) {
      return await getFallbackImage();
    }

    const contentType = imageResponse.headers.get("content-type") ?? "image/jpeg";
    const buffer = Buffer.from(await imageResponse.arrayBuffer());
    cache.set(targetUrl, { contentType, buffer });

    return new Response(new Uint8Array(buffer), {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch {
    return await getFallbackImage();
  }
}
