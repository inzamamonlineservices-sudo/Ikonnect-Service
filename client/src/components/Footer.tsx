import { Link } from "wouter";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-900 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-gradient mb-4">Ikonnect Service</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through innovative digital solutions, AI automation, and data-driven strategies that deliver measurable results.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
                data-testid="link-twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-accent-400 transition-colors duration-300"
                data-testid="link-instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/services/data-automation"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-service-data-automation"
                >
                  Data Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-web-development"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-service-ai-web"
                >
                  AI Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-service-digital-marketing"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media-management"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-service-social-media"
                >
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-integration"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-service-ai-integration"
                >
                  AI Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/chatbot-development"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-service-chatbot"
                >
                  Chatbot Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-scraping"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-service-web-scraping"
                >
                  Web Scraping
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-process"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent-400 transition-colors duration-300"
                  data-testid="link-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ikonnect Service. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-400">Built with cutting-edge technology</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400 font-medium">AI Powered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
