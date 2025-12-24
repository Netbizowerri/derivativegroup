import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-serif font-bold">Derivative</span>
              <span className="text-accent text-2xl font-serif font-bold">Group</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering businesses and individuals with strategic financial services, 
              property solutions, and expert consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Financial Services', path: '/financial-services' },
                { name: 'Property', path: '/property' },
                { name: 'Consulting', path: '/consulting' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Business Funding</li>
              <li>Financial Advisory</li>
              <li>Property Investment</li>
              <li>Real Estate Development</li>
              <li>Strategic Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+2348000000000"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +234 800 000 0000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@derivativegroup.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@derivativegroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Derivative Group. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-primary-foreground/60 hover:text-accent text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
