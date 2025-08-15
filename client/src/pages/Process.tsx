import { processSteps } from "@/lib/data";
import ProcessStep from "@/components/ProcessStep";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Process() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-24 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Process</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A proven methodology that delivers exceptional results through strategic planning, seamless execution, and continuous optimization.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-gradient">How We Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our systematic approach ensures every project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-400 hidden lg:block"></div>

            {/* Steps */}
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <ProcessStep key={step.id} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Why Our Process Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Benefits of our structured approach to digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Predictable Outcomes</h3>
              <p className="text-gray-300">
                Our proven methodology ensures consistent, high-quality results across all projects.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Faster Delivery</h3>
              <p className="text-gray-300">
                Streamlined processes and agile methodologies reduce time-to-market by 40%.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Continuous Improvement</h3>
              <p className="text-gray-300">
                Regular optimization and feedback loops ensure your solution evolves with your needs.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Cost Efficiency</h3>
              <p className="text-gray-300">
                Structured planning and risk management minimize budget overruns and maximize ROI.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Transparent Communication</h3>
              <p className="text-gray-300">
                Regular updates and clear milestones keep you informed throughout the entire process.
              </p>
            </div>

            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Risk Mitigation</h3>
              <p className="text-gray-300">
                Comprehensive testing and quality assurance ensure robust, reliable solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Ready to Start Your Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your goals and create a customized roadmap for your digital transformation.
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
            <Link href="/portfolio">
              <button
                className="border-2 border-accent-400 text-accent-400 px-8 py-4 rounded-lg hover:bg-accent-400 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2"
                data-testid="button-view-examples"
              >
                View Examples
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
