import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "wouter";
import { services, testimonials, portfolioItems } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions powered by cutting-edge technology and data-driven strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <button
                className="border-2 border-accent-400 text-accent-400 px-8 py-4 rounded-lg hover:bg-accent-400 hover:text-white transition-all duration-300 font-semibold"
                data-testid="button-view-all-services"
              >
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Featured Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we've transformed businesses across industries with innovative digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.slice(0, 3).map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="gradient-border overflow-hidden">
                  <div className="gradient-border-content">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-accent-400/20 text-accent-400 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                        <span className="text-green-400 font-medium">{item.result}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <button
                className="border-2 border-accent-400 text-accent-400 px-8 py-4 rounded-lg hover:bg-accent-400 hover:text-white transition-all duration-300 font-semibold"
                data-testid="button-view-portfolio"
              >
                View Full Portfolio
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Client Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses achieve remarkable growth and digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ready to Transform Your Business?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a roadmap to digital success with our cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button
                className="bg-gradient-to-r from-primary-500 to-accent-400 text-white px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 font-semibold text-lg animate-glow"
                data-testid="button-get-started-cta"
              >
                Get Started Today
              </button>
            </Link>
            <Link href="/contact">
              <button
                className="border-2 border-accent-400 text-accent-400 px-8 py-4 rounded-lg hover:bg-accent-400 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2"
                data-testid="button-consultation"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
