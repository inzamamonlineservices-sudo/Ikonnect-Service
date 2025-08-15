import { useRoute, Link } from "wouter";
import { blogPosts } from "@/lib/data";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find((p) => p.slug === params?.slug);
  
  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6 text-white">Post Not Found</h1>
          <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <button className="bg-gradient-to-r from-primary-500 to-accent-400 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === params?.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/blog" className="text-accent-400 hover:text-accent-300 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Blog
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-300">{post.title}</span>
        </nav>
      </div>

      {/* Article Header */}
      <section className="py-16 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="px-3 py-1 bg-accent-400/20 text-accent-400 rounded-full text-sm font-medium mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white" data-testid="text-post-title">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span data-testid="text-post-author">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span data-testid="text-post-date">{post.publishDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span data-testid="text-post-read-time">{post.readTime} min read</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-dark-900 text-accent-400 rounded-full text-sm"
                  data-testid={`tag-post-${index}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mb-12">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
              data-testid="img-post-hero"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6" data-testid="text-post-content">
              <p className="text-xl text-gray-300 mb-8">{post.excerpt}</p>
              
              {/* Sample content structure - in real implementation, this would come from post.content */}
              <h2 className="text-2xl font-bold text-gradient mb-4">Introduction</h2>
              <p>
                The landscape of business automation is rapidly evolving, driven by advances in artificial intelligence and machine learning technologies. Organizations across industries are discovering new ways to streamline operations, reduce costs, and improve efficiency through intelligent automation solutions.
              </p>
              
              <h2 className="text-2xl font-bold text-gradient mb-4">Key Trends Shaping the Future</h2>
              <p>
                As we look ahead, several key trends are emerging that will define the future of AI in business automation. These developments promise to transform how organizations operate and compete in the digital economy.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-3">1. Intelligent Process Automation</h3>
              <p>
                Modern automation goes beyond simple rule-based tasks. Today's AI-powered systems can understand context, make decisions, and adapt to changing conditions, enabling more sophisticated automation scenarios.
              </p>
              
              <h3 className="text-xl font-bold text-white mb-3">2. Predictive Analytics Integration</h3>
              <p>
                The integration of predictive analytics with automation systems allows businesses to anticipate needs, prevent issues before they occur, and optimize processes proactively.
              </p>
              
              <h2 className="text-2xl font-bold text-gradient mb-4">Implementation Strategies</h2>
              <p>
                Successful AI automation implementation requires a strategic approach that considers organizational culture, existing systems, and long-term objectives. Here are key strategies for success:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Start with pilot projects to demonstrate value and build confidence</li>
                <li>Invest in training and change management to ensure adoption</li>
                <li>Choose the right technology partners and platforms</li>
                <li>Establish clear metrics and KPIs to measure success</li>
                <li>Plan for scalability and future expansion</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gradient mb-4">Conclusion</h2>
              <p>
                The future of AI in business automation is bright, with tremendous potential for organizations willing to embrace these technologies. By understanding the trends, developing the right strategies, and partnering with experienced providers, businesses can unlock new levels of efficiency and competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="flex-1">
                <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <ArrowLeft className="w-6 h-6 text-accent-400" />
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Previous Post</div>
                      <div className="font-semibold text-white">{prevPost.title}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}

            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="flex-1">
                <div className="glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center space-x-4 justify-end text-right">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Next Post</div>
                      <div className="font-semibold text-white">{nextPost.title}</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-accent-400" />
                  </div>
                </div>
              </Link>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-gradient">Related Articles</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <article key={relatedPost.id} className="group cursor-pointer">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="gradient-border overflow-hidden">
                      <div className="gradient-border-content">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="p-6">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-accent-400 transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-4">
                            {relatedPost.excerpt.substring(0, 100)}...
                          </p>
                          <div className="flex items-center text-accent-400 font-medium text-sm">
                            Read More
                            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
