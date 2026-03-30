import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Use dark background when scrolled so the white text in the logo remains visible
  const navBg = isScrolled || !isHome ? 'bg-spa-dark shadow-lg' : 'bg-transparent';
  const textColor = 'text-white';

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center h-full py-2">
            <img 
              src="/logo.png" 
              alt="Lake Country Skin Care & Medi-Spa" 
              className="h-full max-h-20 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest font-medium hover:text-spa-accent transition-colors duration-200 ${textColor}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+1234567890"
              className={`flex items-center space-x-2 text-sm font-medium border px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled || !isHome 
                  ? 'border-spa-accent text-spa-accent hover:bg-spa-accent hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-spa-dark'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-spa-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-4 text-base font-medium text-white hover:text-spa-accent hover:bg-white/5 rounded-md"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center space-x-2 w-full bg-spa-accent text-white px-4 py-3 rounded-md font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call to Book</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
