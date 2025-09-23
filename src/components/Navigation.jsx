import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const { isDark } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'resume', 'contact'];
      const sectionElements = sections.map(section => 
        document.getElementById(section)
      ).filter(Boolean);

      const currentSection = sectionElements.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setExpanded(false); // Close mobile menu
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={setExpanded}
        className={`custom-navbar ${isScrolled ? 'scrolled' : ''}`}
        style={{
          background: isScrolled 
            ? isDark 
              ? 'rgba(15, 23, 42, 0.95)' 
              : 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled 
            ? `1px solid var(--border-light)` 
            : 'none',
          transition: 'all 0.3s ease',
          padding: '1rem 0'
        }}
      >
        <Container>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Navbar.Brand 
              href="#home" 
              className="fw-bold fs-3 gradient-text"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              style={{ 
                fontFamily: 'var(--font-primary)',
                textDecoration: 'none'
              }}
            >
              Portfolio
            </Navbar.Brand>
          </motion.div>

          <div className="d-flex align-items-center">
            <ThemeToggle className="me-3" />
            
            <Navbar.Toggle 
              aria-controls="basic-navbar-nav"
              className="border-0"
              style={{
                background: 'transparent',
                boxShadow: 'none'
              }}
            >
              <motion.div
                animate={{ rotate: expanded ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <span 
                  style={{
                    display: 'block',
                    width: '25px',
                    height: '3px',
                    background: 'var(--primary)',
                    margin: '5px 0',
                    borderRadius: '3px',
                    transition: 'all 0.3s ease'
                  }}
                />
                <span 
                  style={{
                    display: 'block',
                    width: '25px',
                    height: '3px',
                    background: 'var(--primary)',
                    margin: '5px 0',
                    borderRadius: '3px',
                    transition: 'all 0.3s ease'
                  }}
                />
                <span 
                  style={{
                    display: 'block',
                    width: '25px',
                    height: '3px',
                    background: 'var(--primary)',
                    margin: '5px 0',
                    borderRadius: '3px',
                    transition: 'all 0.3s ease'
                  }}
                />
              </motion.div>
            </Navbar.Toggle>
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Nav.Link
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`nav-link-custom fw-500 mx-2 ${
                      activeSection === item.id ? 'active' : ''
                    }`}
                    style={{
                      color: activeSection === item.id 
                        ? 'var(--primary)' 
                        : 'var(--text-primary)',
                      fontWeight: activeSection === item.id ? '600' : '500',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="nav-indicator"
                        style={{
                          position: 'absolute',
                          bottom: '-5px',
                          left: '0',
                          right: '0',
                          height: '2px',
                          background: 'var(--primary)',
                          borderRadius: '1px'
                        }}
                      />
                    )}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx>{`
        .nav-link-custom:hover {
          color: var(--primary) !important;
          transform: translateY(-2px);
        }
        
        .custom-navbar .navbar-toggler:focus {
          box-shadow: none !important;
        }
        
        @media (max-width: 991px) {
          .custom-navbar .navbar-collapse {
            background: var(--bg-primary);
            margin-top: 1rem;
            padding: 1rem;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            border: 1px solid var(--border-light);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Navigation;