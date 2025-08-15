import { useState } from "react";
import { portfolioItems } from "@/lib/data";
import PortfolioFilter from "@/components/PortfolioFilter";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "AI Development", "Automation", "Analytics", "AI Marketing", "AI Chatbot", "Data Extraction"];

  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-24 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Discover how we've transformed businesses across industries with innovative digital solutions that drive real results and sustainable growth.
          </p>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-16 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8 pb-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer" data-testid={`portfolio-item-${item.id}`}>
                <div className="gradient-border overflow-hidden">
                  <div className="gradient-border-content">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      data-testid={`img-portfolio-${item.id}`}
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent-400 transition-colors" data-testid={`title-portfolio-${item.id}`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4" data-testid={`description-portfolio-${item.id}`}>
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-accent-400/20 text-accent-400 rounded-full text-xs font-medium" data-testid={`category-portfolio-${item.id}`}>
                          {item.category}
                        </span>
                        <span className="text-green-400 font-medium" data-testid={`result-portfolio-${item.id}`}>
                          {item.result}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-dark-900 text-gray-400 rounded text-xs"
                            data-testid={`tag-portfolio-${item.id}-${index}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Project Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable results that demonstrate the power of our digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-4" data-testid="stat-clients-served">
                150+
              </div>
              <p className="text-gray-300">Clients Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-4" data-testid="stat-success-rate">
                95%
              </div>
              <p className="text-gray-300">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-4" data-testid="stat-average-improvement">
                250%
              </div>
              <p className="text-gray-300">Average Improvement</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-4" data-testid="stat-industries">
                25+
              </div>
              <p className="text-gray-300">Industries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
