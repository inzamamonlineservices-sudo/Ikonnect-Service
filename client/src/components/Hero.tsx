import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slideUp">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="text-gradient">Digital Innovation</span><br />
              <span className="text-white dark:text-white text-gray-900">That Delivers</span>
            </h1>
            <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-700 mb-8 max-w-2xl">
              Transform your business with cutting-edge AI solutions, automation, and digital strategies that drive measurable results. We turn complex challenges into competitive advantages.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <button
                  className="bg-gradient-to-r from-primary-500 to-accent-400 text-white px-8 py-4 rounded-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 font-semibold text-lg animate-glow"
                  data-testid="button-hero-get-started"
                >
                  Get Started Today
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="border-2 border-accent-400 text-accent-400 px-8 py-4 rounded-lg hover:bg-accent-400 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2"
                  data-testid="button-hero-consultation"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient" data-testid="stat-projects">500+</div>
                <div className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient" data-testid="stat-satisfaction">98%</div>
                <div className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient" data-testid="stat-roi">300%</div>
                <div className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm">Average ROI</div>
              </div>
            </div>
          </div>

          {/* Tech Visualization */}
          <div className="relative animate-fadeIn" style={{ animationDelay: "0.5s" }}>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="AI technology dashboard with data visualizations"
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-hero-dashboard"
            />

            {/* Floating UI Elements */}
            <div className="absolute -top-4 -right-4 glass-effect p-4 rounded-xl animate-float">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI Active</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 glass-effect p-4 rounded-xl animate-float" style={{ animationDelay: "-2s" }}>
              <div className="text-2xl font-bold text-gradient">ROI</div>
              <div className="text-sm text-gray-300">+284%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
