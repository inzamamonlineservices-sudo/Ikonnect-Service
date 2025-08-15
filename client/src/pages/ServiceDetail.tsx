import { useRoute } from "wouter";
import { services } from "@/lib/data";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const service = services.find((s) => s.slug === params?.slug);

  if (!service) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6 text-white">Service Not Found</h1>
          <p className="text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services">
            <button className="bg-gradient-to-r from-primary-500 to-accent-400 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
              Back to Services
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/services" className="text-accent-400 hover:text-accent-300 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Services
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-300">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-16 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-accent-400 mb-6 flex justify-center">
            <service.icon className="w-16 h-16" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{service.title}</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="text-gradient">Key Benefits</span>
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Expected Results</h3>
              <div className="space-y-4">
                {service.results.map((result, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="glass-effect p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Technologies We Use</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks that power our solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-dark-900 border border-accent-400/30 rounded-full text-accent-400 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ready to Get Started?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how {service.title.toLowerCase()} can transform your business and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button
                className="bg-gradient-to-r from-primary-500 to-accent-400 text-white px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 font-semibold text-lg animate-glow"
                data-testid="button-start-project"
              >
                Start Your Project
              </button>
            </Link>
            <Link href="/contact">
              <button
                className="border-2 border-accent-400 text-accent-400 px-8 py-4 rounded-lg hover:bg-accent-400 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2"
                data-testid="button-free-consultation"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
