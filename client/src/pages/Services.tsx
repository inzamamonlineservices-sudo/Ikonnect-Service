import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-24 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Services</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Comprehensive digital solutions powered by cutting-edge technology and data-driven strategies. We transform businesses through innovation, automation, and intelligent systems.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Why Choose Ikonnect Service?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that truly make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">AI</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">AI-First Approach</h3>
              <p className="text-gray-300">
                We leverage the latest AI technologies to create intelligent solutions that adapt and improve over time.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">98%</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Proven Results</h3>
              <p className="text-gray-300">
                98% client satisfaction rate with measurable improvements in efficiency and growth.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Ongoing Support</h3>
              <p className="text-gray-300">
                Continuous monitoring, optimization, and support to ensure your solutions perform at their best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ready to Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your specific needs and create a custom solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button
                className="bg-gradient-to-r from-primary-500 to-accent-400 text-white px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 font-semibold text-lg animate-glow"
                data-testid="button-contact-us"
              >
                Contact Us Today
              </button>
            </Link>
            <Link href="/portfolio">
              <button
                className="border-2 border-accent-400 text-accent-400 px-8 py-4 rounded-lg hover:bg-accent-400 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2"
                data-testid="button-view-work"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
