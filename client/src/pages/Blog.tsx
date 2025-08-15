import { blogPosts } from "@/lib/data";
import { Link } from "wouter";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export default function Blog() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-24 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Blog</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Insights, trends, and expert advice on digital transformation, AI, automation, and the latest in technology innovation.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Featured Article</span>
            </h2>
          </div>

          <div className="gradient-border mb-16">
            <div className="gradient-border-content overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                    data-testid="img-featured-post"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent-400 text-white rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span data-testid="text-featured-date">{featuredPost.publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span data-testid="text-featured-read-time">{featuredPost.readTime} min read</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span data-testid="text-featured-author">{featuredPost.author}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white" data-testid="text-featured-title">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6" data-testid="text-featured-excerpt">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-dark-900 text-accent-400 rounded-full text-sm"
                        data-testid={`tag-featured-${index}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <button
                      className="flex items-center text-accent-400 font-medium hover:text-accent-300 transition-colors"
                      data-testid="button-read-featured"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Posts */}
      <section className="py-8 pb-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Latest Articles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer" data-testid={`blog-post-${post.id}`}>
                <div className="gradient-border overflow-hidden">
                  <div className="gradient-border-content">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      data-testid={`img-blog-${post.id}`}
                    />
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span data-testid={`date-blog-${post.id}`}>{post.publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span data-testid={`read-time-blog-${post.id}`}>{post.readTime} min</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent-400 transition-colors" data-testid={`title-blog-${post.id}`}>
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4" data-testid={`excerpt-blog-${post.id}`}>
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-dark-900 text-gray-400 rounded text-xs"
                            data-testid={`tag-blog-${post.id}-${index}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <div className="flex items-center text-accent-400 font-medium text-sm">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Stay Updated</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights on digital transformation, AI, and technology trends delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/20 text-white placeholder-gray-400"
              data-testid="input-newsletter-email"
            />
            <button
              className="bg-gradient-to-r from-primary-500 to-accent-400 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 font-medium"
              data-testid="button-subscribe"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
