import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsArrowDown, BsGithub, BsLinkedin, BsEnvelope, BsCpu, BsLightning } from 'react-icons/bs';
import { SiPython, SiTensorflow, SiPytorch, SiKeras } from 'react-icons/si';
import AnimatedAvatar from './AnimatedAvatar';

const HomeSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['AI/ML Engineer', 'Deep Learning Specialist', 'Neural Network Architect', 'Data Scientist', 'Computer Vision Expert'];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

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
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section 
      id="home" 
      className="section d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        background: `
          linear-gradient(135deg, 
            var(--bg-primary) 0%, 
            var(--bg-secondary) 50%, 
            var(--bg-tertiary) 100%
          )`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 1 }}>
        {/* AI/ML Themed Floating Elements */}
        <motion.div
          className="position-absolute"
          style={{
            top: '15%',
            left: '8%',
            width: '120px',
            height: '120px',
            background: 'linear-gradient(45deg, #00D4AA, #4ECDC4)',
            borderRadius: '50%',
            opacity: 0.1,
            filter: 'blur(40px)'
          }}
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="position-absolute"
          style={{
            bottom: '25%',
            right: '12%',
            width: '160px',
            height: '160px',
            background: 'linear-gradient(45deg, #FF6B9D, #45B7D1)',
            borderRadius: '50%',
            opacity: 0.1,
            filter: 'blur(50px)'
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating AI Icons */}
        <motion.div
          className="position-absolute d-none d-lg-block"
          style={{
            top: '25%',
            right: '20%',
            color: '#00D4AA',
            opacity: 0.3,
            fontSize: '2.5rem'
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <BsCpu />
        </motion.div>

        <motion.div
          className="position-absolute d-none d-lg-block"
          style={{
            bottom: '30%',
            left: '15%',
            color: '#FF6B9D',
            opacity: 0.3,
            fontSize: '2rem'
          }}
          animate={{
            y: [0, 15, 0],
            rotate: [0, -8, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <SiPython />
        </motion.div>

        <motion.div
          className="position-absolute d-none d-lg-block"
          style={{
            top: '40%',
            left: '25%',
            color: '#4ECDC4',
            opacity: 0.25,
            fontSize: '1.8rem'
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 12, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <SiTensorflow />
        </motion.div>

        <motion.div
          className="position-absolute d-none d-lg-block"
          style={{
            bottom: '40%',
            right: '25%',
            color: '#45B7D1',
            opacity: 0.3,
            fontSize: '2.2rem'
          }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <SiPytorch />
        </motion.div>

        <motion.div
          className="position-absolute d-none d-lg-block"
          style={{
            top: '50%',
            right: '10%',
            color: '#96CEB4',
            opacity: 0.25,
            fontSize: '2rem'
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 8, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <BsLightning />
        </motion.div>

        {/* Neural Network Lines */}
        <motion.div
          className="position-absolute d-none d-xl-block"
          style={{
            top: '20%',
            left: '30%',
            width: '200px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #00D4AA, transparent)',
            opacity: 0.2
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="position-absolute d-none d-xl-block"
          style={{
            bottom: '35%',
            right: '30%',
            width: '150px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #FF6B9D, transparent)',
            opacity: 0.2,
            transform: 'rotate(45deg)'
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Floating AI/ML Keywords */}
        <motion.div
          className="position-absolute d-none d-lg-block"
          style={{
            top: '60%',
            left: '5%',
            color: '#4ECDC4',
            opacity: 0.2,
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: 'monospace'
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Neural Networks
        </motion.div>

        <motion.div
          className="position-absolute d-none d-lg-block"
          style={{
            top: '18%',
            right: '8%',
            color: '#96CEB4',
            opacity: 0.25,
            fontSize: '0.8rem',
            fontWeight: '600',
            fontFamily: 'monospace'
          }}
          animate={{
            y: [0, 12, 0],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          Deep Learning
        </motion.div>

        <motion.div
          className="position-absolute d-none d-lg-block"
          style={{
            bottom: '15%',
            left: '8%',
            color: '#FFEAA7',
            opacity: 0.3,
            fontSize: '0.85rem',
            fontWeight: '600',
            fontFamily: 'monospace'
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          Computer Vision
        </motion.div>
      </div>

      <Container style={{ zIndex: 2, position: 'relative' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Row className="align-items-center justify-content-center">
            <Col lg={6} md={8} className="text-center text-lg-start">
              <motion.div variants={itemVariants}>
                <motion.p 
                  className="text-muted mb-2"
                  style={{ fontSize: '1.1rem', fontWeight: '500' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Hello, I'm
                </motion.p>
                
                <motion.h1 
                  className="display-4 fw-bold mb-3"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    lineHeight: '1.1'
                  }}
                >
                  <span className="gradient-text">Meet Vaghela</span>
                </motion.h1>
                
                <motion.div 
                  className="mb-4"
                  style={{ height: '60px' }}
                >
                  <h2 
                    className="h3 fw-600"
                    style={{ 
                      color: 'var(--text-secondary)',
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)'
                    }}
                  >
                    I'm a <span className="gradient-text">{text}</span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      style={{ color: 'var(--primary)' }}
                    >
                      |
                    </motion.span>
                  </h2>
                </motion.div>
                
                <motion.p 
                  className="lead mb-4"
                  style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    lineHeight: '1.6',
                    maxWidth: '500px'
                  }}
                  variants={itemVariants}
                >
                  Passionate about advancing artificial intelligence and machine learning technologies. 
                  I specialize in building intelligent systems, neural networks, and AI-powered applications 
                  that solve real-world problems with cutting-edge algorithms.
                </motion.p>
              </motion.div>

              <motion.div 
                className="d-flex flex-column flex-sm-row gap-3 mb-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => scrollToSection('projects')}
                    className="px-4 py-3"
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}
                  >
                    View AI Projects
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                    className="px-4 py-3"
                    style={{
                      borderRadius: 'var(--radius-lg)',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}
                  >
                    Collaborate
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                className="d-flex gap-3 justify-content-center justify-content-lg-start"
                variants={itemVariants}
              >
                {[
                  { icon: BsGithub, href: 'https://github.com/MeetVaghela-code', label: 'GitHub' },
                  { icon: BsLinkedin, href: 'https://linkedin.com/in/vaghelameet', label: 'LinkedIn' },
                  { icon: BsEnvelope, href: 'mailto:meetv8540@gmail.com', label: 'Email' }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: '50px',
                      height: '50px',
                      background: 'var(--bg-card)',
                      border: '2px solid var(--border-light)',
                      borderRadius: '50%',
                      color: 'var(--text-primary)',
                      fontSize: '1.2rem',
                      textDecoration: 'none',
                      transition: 'all var(--transition-normal)',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                    whileHover={{ 
                      y: -3,
                      scale: 1.1,
                      boxShadow: 'var(--shadow-lg)',
                      borderColor: 'var(--primary)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </motion.div>
            </Col>

            <Col lg={6} md={8} className="text-center mt-5 mt-lg-0">
              <motion.div
                variants={itemVariants}
                className="d-flex justify-content-center"
              >
                <AnimatedAvatar size={350} />
              </motion.div>
            </Col>
          </Row>

          {/* Scroll indicator */}
          <motion.div
            className="position-absolute bottom-0 start-50 translate-middle-x"
            style={{ 
              bottom: '2rem',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('about')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="d-flex flex-column align-items-center text-muted"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <small className="mb-2" style={{ fontSize: '0.9rem' }}>Scroll Down</small>
              <BsArrowDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeSection;