import React, { useRef } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { 
  BsDownload, 
  BsEye, 
  BsCalendar,
  BsBriefcase,
  BsMortarboard,
  BsAward,
  BsBuilding
} from 'react-icons/bs';

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const experience = [
    {
      title: 'Machine Learning Intern',
      company: 'CodeSoft',
      location: 'Remote',
      period: 'july - Aug 2025',
      description: 'Worked as an ML Developer Intern at CodeSoft, gaining hands-on experience in building, deploying, and optimizing machine learning and NLP applications.',
      achievements: [
        'Developed and deployed ML models using Flask for real-world applications.',
        'Gained practical exposure to NLP and machine learning workflows.',
        'Enhanced problem-solving skills by breaking down complex ML tasks into actionable solutions.'
      ]
    },
    {
      title: 'ML Engineer Intern',
      company: 'CODECRAFT INFOTECH',
      location: 'Remote',
      period: 'july 2025',
      description: 'Served as an ML Intern at CODECRAFT INFOTECH, working on machine learning projects encompassing classification, regression, and pattern recognition, with end-to-end model deployment.',
      achievements: [
        'Implemented ML workflows including data preprocessing, model training, and evaluation',
        'Deployed ML models using Flask and Streamlit for testing and demonstrations.',
        'Worked with Scikit-Learn and TensorFlow to build and optimize predictive models.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'ITM SLS Baroda University',
      location: 'Vadodara, India',
      period: '2022 - 2026',
      gpa: '9.05/10',
      description: 'Focused on software engineering, algorithms, and web technologies.'
    }
  ];

  const certifications = [
    {
      name: 'Python for Data Science',
      issuer: 'IBM',
      date: '2025',
      credentialId: 'AWS-CSA-2023-001'
    },
    {
      name: 'Introduction to Data Analytics',
      issuer: 'IBM',
      date: '2024',
      credentialId: 'META-REACT-2022-456'
    },
    {
      name: 'AI Engineer',
      issuer: 'United Latino Students Association',
      date: '2025',
      credentialId: 'GA-CERT-2021-789'
    },
    {
      name: 'Data Visualisation: Empowering Business with Effective Insights',
      issuer: 'Forage',
      date: '2024',
      credentialId: 'GA-CERT-2021-789'
    }
  ];

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

  const handleDownloadResume = () => {
    // In a real application, this would trigger a download of the actual PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would place your actual resume PDF in the public folder
    link.download = 'Meet_Vaghela_Resume.pdf';
    link.click();
  };

  const handleViewResume = () => {
    // Open resume in new tab with custom title
    const newWindow = window.open('/resume.pdf', '_blank');
    if (newWindow) {
      newWindow.document.title = "Meet Vaghela's Resume";
      // Try to set title after the document loads
      newWindow.addEventListener('load', () => {
        try {
          newWindow.document.title = "Meet Vaghela's Resume";
        } catch (e) {
          console.log('Could not set window title');
        }
      });
    }
  };

  return (
    <section 
      id="resume" 
      className="section"
      style={{ background: 'var(--bg-secondary)' }}
      ref={ref}
    >
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <h2 className="section-title">Resume</h2>
            <p className="text-center text-muted mb-5" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
              Download my resume to learn more about my professional experience, education, and skills.
            </p>
          </motion.div>

          {/* Resume Action Buttons */}
          <motion.div variants={itemVariants}>
            <Row className="justify-content-center mb-5">
              <Col md={8} lg={6}>
                <Card 
                  className="border-0 text-center"
                  style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-2xl)',
                    boxShadow: 'var(--shadow-lg)',
                    padding: '2rem'
                  }}
                >
                  <Card.Body>
                    <div
                      className="d-inline-flex align-items-center justify-content-center mb-4"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        borderRadius: '50%',
                        color: 'white',
                        fontSize: '2rem'
                      }}
                    >
                      <BsBriefcase />
                    </div>
                    
                    <h4 className="mb-3">Professional Resume</h4>
                    <p className="text-muted mb-4">
                      Get a comprehensive overview of my professional journey, skills, and achievements.
                    </p>
                    
                    <div className="d-flex gap-3 justify-content-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="primary"
                          size="lg"
                          onClick={handleDownloadResume}
                          className="px-4 py-3"
                          style={{
                            borderRadius: 'var(--radius-lg)',
                            fontWeight: '600'
                          }}
                        >
                          <BsDownload className="me-2" />
                          Download PDF
                        </Button>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline-primary"
                          size="lg"
                          onClick={handleViewResume}
                          className="px-4 py-3"
                          style={{
                            borderRadius: 'var(--radius-lg)',
                            fontWeight: '600'
                          }}
                        >
                          <BsEye className="me-2" />
                          View Online
                        </Button>
                      </motion.div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </motion.div>

          {/* Experience & Education Timeline */}
          <Row>
            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <div className="d-flex align-items-center mb-4">
                  <BsBriefcase className="me-3 text-primary" size={24} />
                  <h3 className="h4 mb-0">Work Experience</h3>
                </div>
                
                <div className="timeline">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      className="timeline-item"
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card 
                        className="border-0 mb-4"
                        style={{
                          background: 'var(--bg-card)',
                          borderRadius: 'var(--radius-lg)',
                          boxShadow: 'var(--shadow-sm)',
                          borderLeft: '4px solid var(--primary)'
                        }}
                      >
                        <Card.Body className="p-4">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h5 className="mb-1">{exp.title}</h5>
                            <Badge 
                              bg="primary" 
                              className="px-3 py-2"
                              style={{ fontSize: '0.8rem' }}
                            >
                              <BsCalendar className="me-1" />
                              {exp.period}
                            </Badge>
                          </div>
                          
                          <div className="d-flex align-items-center text-muted mb-3">
                            <BsBuilding className="me-2" size={16} />
                            <span className="fw-600">{exp.company}</span>
                            <span className="mx-2">•</span>
                            <span>{exp.location}</span>
                          </div>
                          
                          <p className="text-muted mb-3">{exp.description}</p>
                          
                          <ul className="list-unstyled">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-muted small mb-1">
                                <span className="text-primary me-2">▸</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <div className="d-flex align-items-center mb-4">
                  <BsMortarboard className="me-3 text-primary" size={24} />
                  <h3 className="h4 mb-0">Education</h3>
                </div>
                
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card 
                      className="border-0 mb-4"
                      style={{
                        background: 'var(--bg-card)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-sm)',
                        borderLeft: '4px solid var(--secondary)'
                      }}
                    >
                      <Card.Body className="p-4">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="mb-1">{edu.degree}</h5>
                          <Badge 
                            bg="secondary" 
                            className="px-3 py-2"
                            style={{ fontSize: '0.8rem' }}
                          >
                            {edu.period}
                          </Badge>
                        </div>
                        
                        <div className="d-flex align-items-center text-muted mb-2">
                          <BsBuilding className="me-2" size={16} />
                          <span className="fw-600">{edu.school}</span>
                          <span className="mx-2">•</span>
                          <span>{edu.location}</span>
                        </div>
                        
                        <div className="mb-3">
                          <span className="badge bg-light text-dark border">
                            GPA: {edu.gpa}
                          </span>
                        </div>
                        
                        <p className="text-muted small mb-0">{edu.description}</p>
                      </Card.Body>
                    </Card>
                  </motion.div>
                ))}

                {/* Certifications */}
                <div className="d-flex align-items-center mb-4 mt-5">
                  <BsAward className="me-3 text-primary" size={24} />
                  <h3 className="h4 mb-0">Certifications</h3>
                </div>
                
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card 
                      className="border-0 mb-3"
                      style={{
                        background: 'var(--bg-card)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-sm)',
                        borderLeft: '4px solid var(--accent)'
                      }}
                    >
                      <Card.Body className="p-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h6 className="mb-1">{cert.name}</h6>
                            <small className="text-muted">
                              {cert.issuer} • {cert.date}
                            </small>
                          </div>
                          <Badge bg="success" pill>
                            Certified
                          </Badge>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default ResumeSection;