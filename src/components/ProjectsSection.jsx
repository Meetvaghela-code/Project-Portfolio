import React, { useRef, useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { 
  BsGithub, 
  BsBoxArrowUpRight, 
  BsEye,
  BsStar,
  BsCode
} from 'react-icons/bs';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Document Assistant (RAG chatbot)',
      description: 'Built an intelligent chatbot using LangChain that performs Retrieval-Augmented Generation (RAG). The system allows users to query documents in natural language and get accurate, context-aware answers by combining LLMs with document embeddings and vector databases.',
      image: '/image.png',
      technologies: ['React', 'Bootstrap', 'Framer Motion', 'LangChain', 'gemini', 'Pinecone'],
      githubUrl: 'https://github.com/Meetvaghela-code/Document_Chatbot',
      // liveUrl: 'https://ecommerce-demo.com',
      category: 'AI',
      featured: true,
      details: {
        overview: 'Users can upload documents (PDFs, text files, or other formats) and ask queries in natural language. The chatbot processes the query, retrieves the most relevant document chunks, and generates a context-aware response using an LLM.',
        features: [
          'Natural language question answering over documents',
          'Retrieval-Augmented Generation (RAG) pipeline with LangChain',
          'Document embedding and storage in a vector database (e.g., FAISS, Pinecone, Chroma)',
          'Context-aware, accurate responses',
          'Scalable for multiple document formats'
        ],
        challenges: 'Handling large document sets, ensuring accurate retrieval, and reducing LLM hallucinations.',
        learnings: 'Gained hands-on experience with LangChain, vector databases, RAG pipelines, and building context-aware AI systems.'
      }
    },
    {
      id: 2,
      title: 'Healthcare AI',
      description: 'Developed a healthcare AI portal with three disease prediction models (Heart, Diabetes, Lung) and an integrated medical chatbot, enabling users to assess health risks and get interactive guidance.',
      image: '/healthcare.webp',
      technologies: ['React', 'LangChain', 'ML', 'DL', 'Bootstrap','FastAPI'],
      githubUrl: 'https://github.com/Meetvaghela-code/HealthcareAi',
      // liveUrl: 'https://taskmanager-demo.com',
      category: 'AI/ML',
      featured: true,
      details: {
        overview: 'Built a Healthcare AI Portal with Heart, Diabetes, and Lung Disease prediction models and an interactive medical chatbot, allowing users to assess health risks, get explanations, and access disease information in a single platform.',
        features: [
          'Predict Heart, Diabetes, and Lung Diseases using AI models.',
          'Medical chatbot for interactive health guidance.',
          'Disease info pages with symptoms, prevention tips, and images',
          'Explainable predictions with confidence scores and visual insights',
          'Medical Chatbot supporting symptom checking and health advice'
        ],
        challenges: 'Managing diverse data types, integrating multiple ML models with real-time predictions, ensuring explainability, and designing a responsive, user-friendly interface.',
        learnings: 'Gained experience in multi-disease AI/ML development, model deployment with chatbot integration, data preprocessing, explainability, and full-stack healthcare application design.'
      }
    },
    {
      id: 3,
      title: '💬 Sentiment Analysis on Tweets',
      description: 'Developed an NLP-based sentiment analysis system to classify tweets and user feedback as positive, negative, or neutral using Python, Scikit-learn, and Flask.',
      image: '/sentiment.jpg',
      technologies: ['Flask', 'Scikit-learn', 'NLTK', 'Pandas'],
      githubUrl: 'https://github.com/Meetvaghela-code/Sentiment-Analysis',
      // liveUrl: 'https://weather-dashboard-demo.com',
      category: 'ML',
      featured: false,
      details: {
        overview: 'The project leverages text preprocessing, feature extraction (TF-IDF), and machine learning models to classify sentiments. It provides an intuitive web interface where users can input text and receive sentiment predictions instantly.',
        features: [
          'Sentiment Classification – Detects positive, negative, and neutral sentiments.',
          'Real-time Analysis – Users can input text via a web interface for instant results.',
          'Visual Feedback – Displays sentiment results with charts and summaries.',
          'Easy Deployment – Flask web app for interactive use.'
        ],
        challenges: 'Handling noisy text data, selecting and tuning ML models, and designing a responsive web interface for real-time sentiment analysis.',
        learnings: 'Gained experience in NLP preprocessing, ML modeling, Flask deployment, and building user-friendly text analysis interfaces.'
      }
    },
    {
      id: 4,
      title: '🖐️ Hand Gesture Recognizer',
      description: 'Developed a hand gesture recognition system using computer vision and machine learning to classify static hand poses.',
      image: '/hand.jpg',
      technologies: ['Flask', 'OpenCV', 'MediaPipe', 'Scikit-learn'],
      githubUrl: 'https://github.com/Meetvaghela-code/Hand-Gesture-Recognizer',
      // liveUrl: 'https://johndoe-portfolio.com',
      category: 'Computer Vision',
      featured: false,
      details: {
        overview: 'Built a Hand Gesture Recognition System using MediaPipe and machine learning to detect and classify static hand poses in real-time for interactive applications.',
        features: [
          'Real-time Hand Detection – Uses MediaPipe for accurate hand landmark tracking.',
          'Gesture Classification – Classifies multiple static hand poses using ML models.',
          'Interactive Feedback – Displays detected gestures on screen in real-time.',
          'Lightweight & Efficient – Optimized for fast processing with minimal lag.'
        ],
        challenges: 'Handling variations in hand orientation, size, and lighting, ensuring accurate landmark detection, and integrating real-time ML predictions with a responsive interface.',
        learnings: 'Gained experience with MediaPipe, preprocessing hand landmarks for ML, and integrating real-time gesture recognition with optimized, interactive UI.'
      }
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
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
      id="projects" 
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
            <h2 className="section-title">My Projects</h2>
            <p className="text-center text-muted mb-5" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
              Showcasing my skills in AI/ML and full-stack application development through projects that solve real-world problems with interactive ML solutions.
            </p>
          </motion.div>

          <Row>
            {projects.map((project, index) => (
              <Col lg={6} md={6} key={project.id} className="mb-4">
                <motion.div variants={itemVariants}>
                  <Card 
                    className="project-card h-100 border-0"
                    style={{
                      background: 'var(--bg-card)',
                      borderRadius: 'var(--radius-xl)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-md)',
                      transition: 'all var(--transition-normal)',
                      cursor: 'pointer'
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <div className="position-relative">
                        <Card.Img
                          variant="top"
                          src={project.image}
                          alt={project.title}
                          style={{ 
                            height: '200px', 
                            objectFit: 'cover',
                            transition: 'transform var(--transition-normal)'
                          }}
                        />
                        
                        {project.featured && (
                          <Badge
                            bg="primary"
                            className="position-absolute top-0 start-0 m-3"
                            style={{
                              fontSize: '0.8rem',
                              padding: '0.5rem 0.75rem'
                            }}
                          >
                            <BsStar className="me-1" />
                            Featured
                          </Badge>
                        )}
                        
                        <div
                          className="position-absolute top-0 end-0 m-3"
                          style={{
                            background: 'rgba(0,0,0,0.7)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '0.25rem 0.5rem'
                          }}
                        >
                          <small className="text-white">{project.category}</small>
                        </div>

                        <motion.div
                          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                          style={{
                            background: 'rgba(99, 102, 241, 0.9)',
                            opacity: 0
                          }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <BsEye size={30} color="white" />
                        </motion.div>
                      </div>

                      <Card.Body className="p-4">
                        <Card.Title className="h5 mb-3">{project.title}</Card.Title>
                        <Card.Text 
                          className="text-muted mb-3"
                          style={{ 
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            height: '4.8rem',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical'
                          }}
                        >
                          {project.description}
                        </Card.Text>

                        <div className="mb-3">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              bg="light"
                              text="dark"
                              className="me-2 mb-2"
                              style={{
                                fontSize: '0.75rem',
                                padding: '0.4rem 0.6rem',
                                border: '1px solid var(--border-light)'
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge
                              bg="secondary"
                              className="mb-2"
                              style={{
                                fontSize: '0.75rem',
                                padding: '0.4rem 0.6rem'
                              }}
                            >
                              +{project.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </Card.Body>
                    </motion.div>

                    <Card.Footer 
                      className="bg-transparent border-0 p-4 pt-0"
                    >
                      <div className="d-flex gap-2">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-fill"
                        >
                          <Button
                            variant="outline-primary"
                            size="sm"
                            href={project.githubUrl}
                            target="_blank"
                            className="w-100"
                            style={{ borderRadius: 'var(--radius-md)' }}
                          >
                            <BsGithub className="me-2" />
                            Code
                          </Button>
                        </motion.div>
                        
                        {/* <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-fill"
                        >
                          <Button
                            variant="primary"
                            size="sm"
                            href={project.liveUrl}
                            target="_blank"
                            className="w-100"
                            style={{ borderRadius: 'var(--radius-md)' }}
                          >
                            <BsBoxArrowUpRight className="me-2" />
                            Live Demo
                          </Button>
                        </motion.div> */}
                      </div>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-5"
          >
            <p className="text-muted mb-4">
              Want to see more of my work? Check out my GitHub for additional projects and contributions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline-primary"
                size="lg"
                href="https://github.com/Meetvaghela-code"
                target="_blank"
                className="px-4 py-3"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  fontWeight: '600'
                }}
              >
                <BsGithub className="me-2" />
                View All Projects on GitHub
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Project Details Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        size="lg"
        centered
      >
        <Modal.Header 
          closeButton
          style={{ 
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-light)'
          }}
        >
          <Modal.Title className="gradient-text">
            {selectedProject?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: 'var(--bg-card)' }}>
          {selectedProject && (
            <>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-100 mb-4"
                style={{ 
                  borderRadius: 'var(--radius-lg)',
                  maxHeight: '250px',
                  objectFit: 'cover'
                }}
              />
              
              <h5 className="mb-3">Overview</h5>
              <p className="text-muted mb-4">{selectedProject.details.overview}</p>
              
              <h5 className="mb-3">Key Features</h5>
              <ul className="mb-4">
                {selectedProject.details.features.map((feature, index) => (
                  <li key={index} className="text-muted mb-1">{feature}</li>
                ))}
              </ul>
              
              <h5 className="mb-3">Technologies Used</h5>
              <div className="mb-4">
                {selectedProject.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    bg="primary"
                    className="me-2 mb-2"
                    style={{
                      fontSize: '0.8rem',
                      padding: '0.5rem 0.75rem'
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <Row>
                <Col md={6}>
                  <h6 className="mb-2">Challenges</h6>
                  <p className="text-muted small">{selectedProject.details.challenges}</p>
                </Col>
                <Col md={6}>
                  <h6 className="mb-2">Key Learnings</h6>
                  <p className="text-muted small">{selectedProject.details.learnings}</p>
                </Col>
              </Row>
            </>
          )}
        </Modal.Body>
        <Modal.Footer style={{ background: 'var(--bg-secondary)', border: 'none' }}>
          <div className="d-flex gap-2 w-100">
            <Button
              variant="outline-primary"
              href={selectedProject?.githubUrl}
              target="_blank"
              className="flex-fill"
            >
              <BsGithub className="me-2" />
              View Code
            </Button>
            {/* <Button
              variant="primary"
              href={selectedProject?.liveUrl}
              target="_blank"
              className="flex-fill"
            >
              <BsBoxArrowUpRight className="me-2" />
              Live Demo
            </Button> */}
          </div>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-xl) !important;
        }
        
        .project-card:hover .card-img-top {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
