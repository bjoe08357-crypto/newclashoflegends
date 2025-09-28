const ArticlesSection = () => {
  const articles = [
    {
      id: 1,
      title: "Real Madrid Legends: Where Are They Now?",
      excerpt: "Catch up with your favorite Real Madrid legends as they prepare for the ultimate showdown. From Zidane's tactical insights to Ronaldinho's magic touches...",
      date: "December 15, 2024",
      views: "2.1K views",
      category: "EXCLUSIVE",
      categoryColor: "bg-green-500"
    },
    {
      id: 2,
      title: "Barcelona's Golden Generation Returns", 
      excerpt: "The legendary Barcelona squad reunites for one final El Clasico. Witness the return of tiki-taka masters and goal-scoring machines...",
      date: "December 14, 2024",
      views: "3.5K views",
      category: "HOT",
      categoryColor: "bg-red-500"
    },
    {
      id: 3,
      title: "Inside the Stadium Preparation",
      excerpt: "Go behind the scenes as the iconic stadium transforms for the biggest legends match of the century. From pitch preparation to VIP experiences...",
      date: "December 13, 2024", 
      views: "1.8K views",
      category: "BEHIND SCENES",
      categoryColor: "bg-purple-500"
    },
    {
      id: 4,
      title: "Tactical Analysis: What to Expect",
      excerpt: "Expert analysis of the tactical approaches both legend teams might employ. Will it be the classic 4-3-3 vs 4-4-2 battle we remember?",
      date: "December 12, 2024",
      views: "2.7K views", 
      category: "ANALYSIS",
      categoryColor: "bg-blue-500"
    },
    {
      id: 5,
      title: "Fan Experience Guide",
      excerpt: "Everything you need to know about attending the match. From parking and food options to merchandise and photo opportunities with legends...",
      date: "December 11, 2024",
      views: "4.2K views",
      category: "FAN ZONE", 
      categoryColor: "bg-cyan-500"
    },
    {
      id: 6,
      title: "El Clasico Through the Ages",
      excerpt: "A journey through the most memorable El Clasico moments in history. From Di Stefano's dominance to Messi's magic - relive the greatest clashes...",
      date: "December 10, 2024",
      views: "5.1K views",
      category: "HISTORY",
      categoryColor: "bg-amber-500"
    }
  ];

  return (
    <section id="articles" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            LATEST ARTICLES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest news and insights
          </p>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105"
              >
                {/* Article Image */}
                <div className="relative h-48 bg-gradient-to-br from-slate-600 to-slate-700 overflow-hidden">
                  <div className="w-full h-full bg-slate-700 flex items-center justify-center">
                    <span className="text-white/50 text-4xl">📰</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`${article.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {article.category}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center text-yellow-400 text-sm mb-3">
                    <span className="mr-2">📅</span>
                    {article.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-bold text-xl mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/70 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Read More & Views */}
                  <div className="flex items-center justify-between">
                    <button className="text-yellow-400 hover:text-yellow-300 font-semibold text-sm flex items-center space-x-1 transition-colors">
                      <span>Read More</span>
                      <span>→</span>
                    </button>
                    <div className="flex items-center text-white/50 text-sm">
                      <span className="mr-1">👁️</span>
                      {article.views}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
