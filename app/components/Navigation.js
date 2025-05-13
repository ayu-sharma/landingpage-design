"use client"
import { useState, useRef, useEffect } from 'react';
import Button from './ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Our Approach' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#team', label: 'Our Team' },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const newActiveLink = navLinks[index].href;
            setActiveLink(newActiveLink);
            // Update URL without page reload
            window.history.replaceState(null, '', newActiveLink);
          }
        }
      });
    };

    // Handle initial URL hash
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash && navLinks.some(link => link.href === hash)) {
        setActiveLink(hash);
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    handleInitialHash();
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
    window.history.pushState(null, '', href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="text-2xl font-semibold text-indigo-900">
              Modern<span className="text-indigo-600 font-bold">CPA</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-gray-700 hover:text-indigo-600 transition duration-300 text-sm font-medium relative focus:outline-none focus:ring-0 ${
                  activeLink === link.href ? 'text-indigo-600' : ''
                }`}
              >
                {link.label}
                {activeLink === link.href && (
                  <motion.div
                    layoutId="activeLink"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <Button 
              variant="primary" 
              size="sm" 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="focus:outline-none focus:ring-0"
            >
              Contact Us
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              ref={buttonRef}
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-500 hover:text-indigo-600 focus:outline-none focus:ring-0"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              ref={menuRef}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-20 left-0 w-64 h-full bg-white shadow-lg md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block py-2 px-3 text-base font-medium focus:outline-none focus:ring-0 ${
                      activeLink === link.href
                        ? 'text-indigo-600 border-l-4 border-indigo-600'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <Button 
                  variant="primary" 
                  size="md" 
                  className="w-full mt-4 focus:outline-none focus:ring-0" 
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
} 