import React, { useState, useRef } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { 
  BsEnvelope, 
  BsPhone, 
  BsGeoAlt, 
  BsGithub, 
  BsLinkedin,
  BsTwitter,
  BsInstagram,
  BsSend,
  BsCheckCircle
} from 'react-icons/bs';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: BsEnvelope,
      title: 'Email',
      value: 'meetv8540@gmail.com',
      href: 'mailto:meetv8540@gmail.com',
      color: 'var(--primary)'
    },
    {
      icon: BsPhone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'var(--secondary)'
    },
    {
      icon: BsGeoAlt,
      title: 'Location',
      value: 'Vadodara, India',
      href: 'https://maps.google.com/?q=Vadodara,India',
      color: 'var(--accent)'
    }
  ];

  const socialLinks = [
    {
      icon: BsGithub,
      name: 'GitHub',
      url: 'https://github.com/Meetvaghela-code',
      color: '#333'
    },
    {
      icon: BsLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vaghelameet',
      color: '#0077b5'
    },
    {
      icon: BsTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/',
      color: '#1da1f2'
    },
    {
      icon: BsInstagram,
      name: 'Instagram',
      url: 'https://instagram.com/meett.vaghela',
      color: '#e4405f'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
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
      id="contact" 
      className="section"
      style={{ background: 'var(--bg-primary)' }}
      ref={ref}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-center text-muted mb-5" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
              Feel free to reach out!
            </p>
          </motion.div>

          <Row>
            {/* Contact Information */}
            <Col lg={4} md={6} className="mb-5 mb-lg-0">
              <motion.div variants={itemVariants}>
                <h3 className="h4 mb-4">Let's Connect</h3>
                <p className="text-muted mb-4">
                  Ready to start a conversation? I'm just a message away. 
                  Whether you have a question or just want to say hi, I'll do my best to get back to you!
                </p>

                {/* Contact Info Cards */}
                <div className="mb-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="text-decoration-none"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card 
                        className="border-0 mb-3"
                        style={{
                          background: 'var(--bg-card)',
                          borderRadius: 'var(--radius-lg)',
                          boxShadow: 'var(--shadow-sm)',
                          transition: 'all var(--transition-normal)'
                        }}
                      >
                        <Card.Body className="p-4">
                          <div className="d-flex align-items-center">
                            <div
                              className="d-flex align-items-center justify-content-center me-3"
                              style={{
                                width: '50px',
                                height: '50px',
                                background: `${info.color}20`,
                                borderRadius: '50%',
                                color: info.color
                              }}
                            >
                              <info.icon size={20} />
                            </div>
                            <div>
                              <h6 className="mb-1">{info.title}</h6>
                              <p className="text-muted mb-0 small">{info.value}</p>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h5 className="mb-3">Follow Me</h5>
                  <div className="d-flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
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
                          transition: 'all var(--transition-normal)'
                        }}
                        whileHover={{ 
                          y: -3,
                          scale: 1.1,
                          borderColor: social.color,
                          color: social.color
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <social.icon />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Col>

            {/* Contact Form */}
            <Col lg={8} md={6}>
              <motion.div variants={itemVariants}>
                <Card 
                  className="border-0"
                  style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-2xl)',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                >
                  <Card.Body className="p-5">
                    <h3 className="h4 mb-4">Send a Message</h3>
                    
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4"
                      >
                        <Alert 
                          variant={submitStatus === 'success' ? 'success' : 'danger'}
                          className="d-flex align-items-center"
                        >
                          {submitStatus === 'success' ? (
                            <>
                              <BsCheckCircle className="me-2" />
                              Message sent successfully! I'll get back to you soon.
                            </>
                          ) : (
                            <>
                              Something went wrong. Please try again later.
                            </>
                          )}
                        </Alert>
                      </motion.div>
                    )}

                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>Name *</Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Your full name"
                              isInvalid={!!errors.name}
                              style={{
                                borderRadius: 'var(--radius-md)',
                                border: '2px solid var(--border-light)',
                                padding: '0.75rem 1rem',
                                background: 'var(--bg-secondary)'
                              }}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.name}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label>Email *</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your.email@example.com"
                              isInvalid={!!errors.email}
                              style={{
                                borderRadius: 'var(--radius-md)',
                                border: '2px solid var(--border-light)',
                                padding: '0.75rem 1rem',
                                background: 'var(--bg-secondary)'
                              }}
                            />
                            <Form.Control.Feedback type="invalid">
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label>Subject *</Form.Label>
                        <Form.Control
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          isInvalid={!!errors.subject}
                          style={{
                            borderRadius: 'var(--radius-md)',
                            border: '2px solid var(--border-light)',
                            padding: '0.75rem 1rem',
                            background: 'var(--bg-secondary)'
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.subject}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label>Message *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project, question, or just say hi!"
                          isInvalid={!!errors.message}
                          style={{
                            borderRadius: 'var(--radius-md)',
                            border: '2px solid var(--border-light)',
                            padding: '0.75rem 1rem',
                            background: 'var(--bg-secondary)',
                            resize: 'vertical'
                          }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          disabled={isSubmitting}
                          className="w-100 py-3"
                          style={{
                            borderRadius: 'var(--radius-lg)',
                            fontWeight: '600',
                            fontSize: '1.1rem'
                          }}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <BsSend className="me-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </Form>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSection;