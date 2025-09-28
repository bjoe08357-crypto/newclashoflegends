# Clash of Legends - Landing Page

A modern, responsive landing page for the Clash of Legends football match between Real Madrid Legends vs Barcelona Legends, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradients and smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Next.js 15 and latest React 19
- **Accessible**: Semantic HTML and proper accessibility features

## 📱 Sections

1. **Header/Navigation**: Fixed header with responsive mobile menu
2. **Hero Section**: Main showcase with team matchup and event details
3. **Tickets Section**: Interactive seating map and pricing tiers
4. **Match Information**: Countdown timer, venue details, and event highlights
5. **Legendary Players**: Showcase of confirmed players with team selector
6. **Latest Articles**: News and insights grid layout
7. **Footer**: Contact information and social links

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom React components
- **Icons**: Unicode emojis for cross-platform compatibility
- **Animations**: CSS animations and Tailwind transitions

## 🎨 Design Features

- **Color Scheme**: Dark theme with yellow/orange accents
- **Typography**: Modern font stack with proper hierarchy
- **Gradients**: Beautiful gradient backgrounds and overlays
- **Interactive Elements**: Hover states and smooth transitions
- **Visual Effects**: Floating particles and subtle animations

## 📦 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom utilities
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
└── components/
    ├── Header.tsx           # Navigation header
    ├── HeroSection.tsx      # Main hero section
    ├── TicketsSection.tsx   # Seating map and tickets
    ├── MatchInfoSection.tsx # Match details and countdown
    ├── LegendaryPlayersSection.tsx # Players showcase
    ├── ArticlesSection.tsx  # News articles grid
    └── Footer.tsx           # Footer component
```

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Adding Real Images
Replace placeholder content in components with actual images:
- Add images to `public/images/` directory
- Update image references in components
- Consider using Next.js Image component for optimization

### Updating Content
- **Team Information**: Modify team data in `HeroSection.tsx`
- **Player Details**: Update player arrays in `LegendaryPlayersSection.tsx`
- **Articles**: Edit articles array in `ArticlesSection.tsx`
- **Contact Info**: Update contact details in `Footer.tsx`

### Styling Customization
- **Colors**: Modify color scheme in `globals.css` and component classes
- **Typography**: Update font sizes and weights throughout components
- **Animations**: Add or modify animations in `globals.css`

## 🔧 Build and Deploy

1. **Build for Production**:
   ```bash
   npm run build
   ```

2. **Start Production Server**:
   ```bash
   npm start
   ```

3. **Deploy**: 
   - Vercel (recommended for Next.js)
   - Netlify
   - Any static hosting service

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎯 Performance Optimizations

- Server-side rendering with Next.js
- Optimized images (when real images are added)
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind for optimal performance
- Lazy loading for components

## 🔮 Future Enhancements

- Add real player images and team logos
- Implement ticket booking functionality
- Add multi-language support
- Include video backgrounds
- Add social media integration
- Implement analytics tracking

## 📄 License

This project is created for demonstration purposes. All team logos and player names are trademarks of their respective owners.
