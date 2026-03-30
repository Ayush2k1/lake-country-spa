import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-spa-dark text-spa-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <img 
              src="/logo.png" 
              alt="Lake Country Skin Care & Medi-Spa" 
              className="h-24 w-auto mb-6 object-contain"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Reveal your natural beauty with our exceptional care and advanced treatments in Saskatchewan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-spa-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-400 hover:text-spa-accent transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-spa-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-spa-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-spa-accent shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  123 Spa Boulevard<br />
                  Saskatchewan, Canada
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-spa-accent shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-gray-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-spa-accent shrink-0" />
                <a href="mailto:info@lakecountryspa.ca" className="text-sm text-gray-400 hover:text-white transition-colors">
                  info@lakecountryspa.ca
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="font-serif text-lg mb-6 text-white">Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-8">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 7:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 5:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-spa-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-spa-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Lake Country Skin Care & Medi-Spa. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-xs text-gray-500 hover:text-white">Privacy Policy</Link>
            <Link to="#" className="text-xs text-gray-500 hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
