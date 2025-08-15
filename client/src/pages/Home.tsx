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

      {/* Technology Stack */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Cutting-Edge Technology Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build scalable, robust solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2 text-white">AI & Machine Learning</h3>
              <p className="text-gray-300 text-sm">OpenAI GPT, TensorFlow, PyTorch, Custom ML Models</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-white">Cloud Platforms</h3>
              <p className="text-gray-300 text-sm">AWS, Azure, Google Cloud, Serverless Architecture</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2 text-white">Web Development</h3>
              <p className="text-gray-300 text-sm">React, Next.js, Node.js, TypeScript, Modern Frameworks</p>
            </div>
            
            <div className="glass-effect p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2 text-white">Security & Analytics</h3>
              <p className="text-gray-300 text-sm">Enterprise Security, Real-time Analytics, Data Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Why Industry Leaders Choose Us</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical excellence with business expertise to deliver transformative results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Proven Methodology</h3>
                    <p className="text-gray-300">Our systematic approach ensures consistent, high-quality results with 98% client satisfaction rate.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Rapid Implementation</h3>
                    <p className="text-gray-300">Fast deployment with 40% faster time-to-market using agile methodologies and modern DevOps practices.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Ongoing Support</h3>
                    <p className="text-gray-300">24/7 monitoring and continuous optimization to ensure your solutions evolve with your business needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Team collaboration on digital solutions"
                className="rounded-2xl shadow-2xl w-full"
                data-testid="img-why-choose-us"
              />
              <div className="absolute -bottom-6 -right-6 glass-effect p-4 rounded-xl">
                <div className="text-2xl font-bold text-gradient">500+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Industries We Transform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expertise spans across diverse industries, delivering tailored solutions for unique challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="gradient-border group hover:scale-105 transition-all duration-300">
              <div className="gradient-border-content p-8 text-center">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="text-xl font-bold mb-3 text-white">Financial Services</h3>
                <p className="text-gray-300 text-sm">AI-powered fraud detection, automated trading systems, compliance automation</p>
              </div>
            </div>

            <div className="gradient-border group hover:scale-105 transition-all duration-300">
              <div className="gradient-border-content p-8 text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-3 text-white">Healthcare</h3>
                <p className="text-gray-300 text-sm">Patient data management, diagnostic AI, telemedicine platforms</p>
              </div>
            </div>

            <div className="gradient-border group hover:scale-105 transition-all duration-300">
              <div className="gradient-border-content p-8 text-center">
                <div className="text-4xl mb-4">🛒</div>
                <h3 className="text-xl font-bold mb-3 text-white">E-commerce</h3>
                <p className="text-gray-300 text-sm">Personalization engines, inventory optimization, customer analytics</p>
              </div>
            </div>

            <div className="gradient-border group hover:scale-105 transition-all duration-300">
              <div className="gradient-border-content p-8 text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3 text-white">Manufacturing</h3>
                <p className="text-gray-300 text-sm">IoT monitoring, predictive maintenance, supply chain optimization</p>
              </div>
            </div>

            <div className="gradient-border group hover:scale-105 transition-all duration-300">
              <div className="gradient-border-content p-8 text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-white">Education</h3>
                <p className="text-gray-300 text-sm">Learning management systems, personalized education, virtual classrooms</p>
              </div>
            </div>

            <div className="gradient-border group hover:scale-105 transition-all duration-300">
              <div className="gradient-border-content p-8 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-3 text-white">Enterprise</h3>
                <p className="text-gray-300 text-sm">Workflow automation, data analytics, digital transformation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ready to Transform Your Business?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 500+ companies that have accelerated their growth with our cutting-edge digital solutions. Let's discuss your project and create a roadmap to success.
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
