import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsHeart, BsGithub, BsLinkedin, BsEnvelope } from 'react-icons/bs';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: BsGithub, href: 'https://github.com/Meetvaghela-code', label: 'GitHub' },
    { icon: BsLinkedin, href: 'https://linkedin.com/in/vaghelameet', label: 'LinkedIn' },
    { icon: BsEnvelope, href: 'mailto:meetv8540@gmail.com', label: 'Email' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-light)',
        padding: '3rem 0 2rem'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h5 className="gradient-text mb-3">Meet Vaghela</h5>
              <p className="text-muted mb-3">
                AI/ML enthusiast and solver of real-world problems through innovative solutions.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'var(--bg-card)',
                      border: '2px solid var(--border-light)',
                      borderRadius: '50%',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      textDecoration: 'none',
                      transition: 'all var(--transition-normal)'
                    }}
                    whileHover={{ 
                      y: -3,
                      scale: 1.1,
                      borderColor: 'var(--primary)',
                      color: 'var(--primary)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col md={6} className="text-center text-md-end mt-4 mt-md-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={scrollToTop}
                className="btn btn-outline-primary mb-3"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.75rem 2rem',
                  fontWeight: '500',
                  border: '2px solid var(--primary)',
                  background: 'transparent',
                  color: 'var(--primary)'
                }}
                whileHover={{ 
                  y: -2,
                  backgroundColor: 'var(--primary)',
                  color: 'white'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Top ↑
              </motion.button>
              
              <div className="small text-muted">
                <p className="mb-1">
                  © {2025} Meet Vaghela. All rights reserved.
                </p>
                <p className="mb-0 d-flex align-items-center justify-content-center justify-content-md-end">
                 <BsHeart className="text-danger mx-1" size={12} />
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Decorative line */}
        <motion.div
          className="mt-4 pt-3"
          style={{
            borderTop: '1px solid var(--border-light)'
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Row>
            <Col className="text-center">
              <small className="text-muted">
                "The best way to predict the future is to create it." - Peter Drucker
              </small>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;