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

      {/* Service Overview */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Fast Implementation</h3>
              <p className="text-gray-300">Quick deployment with minimal disruption to your current operations</p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Proven Results</h3>
              <p className="text-gray-300">Measurable improvements backed by data and client success stories</p>
            </div>
            
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Continuous Support</h3>
              <p className="text-gray-300">Ongoing optimization and support to maximize your return on investment</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="text-gradient">Key Benefits</span>
              </h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Success Metrics</h3>
                <div className="grid grid-cols-2 gap-6">
                  {service.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-gradient mb-2">{result}</div>
                      <div className="text-sm text-gray-400">
                        {index === 0 ? "Efficiency Gain" : 
                         index === 1 ? "Accuracy Improvement" : 
                         index === 2 ? "Time Savings" : "Cost Reduction"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-gradient">What's Included</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-gray-300">Comprehensive system analysis and planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-gray-300">Custom solution development and testing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-gray-300">Seamless integration with existing systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-gray-300">Team training and knowledge transfer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-gray-300">24/7 monitoring and support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                    <span className="text-gray-300">Regular optimization and updates</span>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-gradient">Timeline</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Discovery & Planning</span>
                    <span className="text-accent-400 font-medium">Week 1-2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Development & Testing</span>
                    <span className="text-accent-400 font-medium">Week 3-8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Deployment & Training</span>
                    <span className="text-accent-400 font-medium">Week 9-10</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Optimization & Support</span>
                    <span className="text-accent-400 font-medium">Ongoing</span>
                  </div>
                </div>
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

      {/* Case Study */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Success Story</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we transformed a client's business with our {service.title.toLowerCase()} solutions
            </p>
          </div>

          <div className="glass-effect p-12 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                    alt="Client company logo"
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">TechFlow Industries</h3>
                    <p className="text-gray-400">Manufacturing & Logistics</p>
                  </div>
                </div>

                <h4 className="text-2xl font-bold mb-4 text-gradient">The Challenge</h4>
                <p className="text-gray-300 mb-6">
                  TechFlow Industries was struggling with manual processes that were slowing down their operations
                  and causing significant inefficiencies. They needed a comprehensive solution to automate their
                  workflow and improve accuracy.
                </p>

                <h4 className="text-2xl font-bold mb-4 text-gradient">Our Solution</h4>
                <p className="text-gray-300 mb-6">
                  We implemented a custom {service.title.toLowerCase()} solution that integrated seamlessly with
                  their existing systems, providing real-time monitoring and automated decision-making capabilities.
                </p>

                <div className="grid grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">85%</div>
                    <div className="text-sm text-gray-400">Efficiency Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">$2.3M</div>
                    <div className="text-sm text-gray-400">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">6 weeks</div>
                    <div className="text-sm text-gray-400">Implementation</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Success story visualization"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 glass-effect p-4 rounded-xl">
                  <div className="text-lg font-bold text-gradient">ROI: 340%</div>
                  <div className="text-sm text-gray-300">in 12 months</div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-primary-500/10 to-accent-400/10 rounded-2xl border border-accent-400/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">"</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 text-lg italic mb-4">
                    "Ikonnect Service transformed our entire operation. The {service.title.toLowerCase()} solution 
                    they delivered exceeded our expectations and delivered results faster than we imagined possible."
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&h=50"
                      alt="Client testimonial"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-white">Michael Chen</div>
                      <div className="text-sm text-gray-400">CTO, TechFlow Industries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our {service.title.toLowerCase()} services
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-white">How long does implementation take?</h3>
              <p className="text-gray-300">
                Typical implementation ranges from 6-12 weeks depending on complexity and scope. We work in
                agile sprints to deliver value incrementally, so you'll see results within the first few weeks.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-white">What level of support do you provide?</h3>
              <p className="text-gray-300">
                We provide 24/7 monitoring and support with guaranteed response times. Our support includes
                system maintenance, performance optimization, troubleshooting, and feature enhancements.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-white">Can this integrate with our existing systems?</h3>
              <p className="text-gray-300">
                Absolutely. We specialize in seamless integration with existing infrastructure. Our solutions
                are designed to work with popular enterprise systems and can connect via APIs, databases, or custom integrations.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-white">What is the expected ROI?</h3>
              <p className="text-gray-300">
                Most clients see ROI within 6-12 months, with many achieving 200-400% returns through improved
                efficiency, reduced costs, and new revenue opportunities. We provide detailed ROI projections during planning.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4 text-white">Do you provide training for our team?</h3>
              <p className="text-gray-300">
                Yes, comprehensive training is included. We provide hands-on workshops, documentation, video tutorials,
                and ongoing coaching to ensure your team can effectively use and maintain the solution.
              </p>
            </div>
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
