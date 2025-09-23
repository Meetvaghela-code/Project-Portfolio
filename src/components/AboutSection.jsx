import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import { 
  BsCpu, 
  BsGraphUp, 
  BsEye, 
  BsLightning,
  BsDownload,
  BsRobot
} from 'react-icons/bs';
import { SiPython, SiTensorflow, SiPytorch, SiJupyter } from 'react-icons/si';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [skillsAnimated, setSkillsAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !skillsAnimated) {
      setSkillsAnimated(true);
    }
  }, [isInView, skillsAnimated]);

  const skills = [
    { name: 'Python', level: 85, color: '#3776ab' },
    { name: 'TensorFlow', level: 70, color: '#ff6f00' },
    // { name: 'PyTorch', level: 88, color: '#ee4c2c' },
    { name: 'Scikit-learn', level: 70, color: '#f7931e' },
    { name: 'OpenCV', level: 80, color: '#5c3ee8' },
    { name: 'Keras', level: 68, color: '#d00000' },
    { name: 'Pandas/NumPy', level: 93, color: '#150458' },
    { name: 'Docker', level: 75, color: '#2496ed' }
  ];

  const interests = [
    { icon: BsCpu, title: 'Machine Learning', desc: 'Building intelligent algorithms and predictive models' },
    { icon: BsEye, title: 'Computer Vision', desc: 'Image recognition and visual data processing' },
    { icon: BsGraphUp, title: 'Data Science', desc: 'Extracting insights from complex datasets' },
    { icon: BsLightning, title: 'Deep Learning', desc: 'Neural networks and advanced AI architectures' }
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

  return (
    <section 
      id="about" 
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
            <h2 className="section-title">About Me</h2>
          </motion.div>

          <Row className="align-items-center">
            <Col lg={5} md={6} className="mb-5 mb-lg-0">
              <motion.div variants={itemVariants}>
                <Card 
                  className="border-0 shadow-lg"
                  style={{
                    background: 'var(--bg-card)',
                    borderRadius: 'var(--radius-2xl)',
                    overflow: 'hidden'
                  }}
                >
                  <motion.div
                    className="position-relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      style={{
                        height: '300px',
                        background: `linear-gradient(135deg, 
                          var(--primary) 0%, 
                          var(--secondary) 50%, 
                          var(--accent) 100%
                        )`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                      }}
                    >
                      {/* Modern Cartoon Boy Avatar with Brain Background */}
                      <motion.div
                        style={{
                          width: '200px',
                          height: '200px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '4px solid rgba(255, 255, 255, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                          position: 'relative'
                        }}
                        animate={{
                          scale: [1, 1.03, 1],
                          rotate: [0, 1, -1, 0]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <svg
                          width="190"
                          height="190"
                          viewBox="0 0 200 200"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            {/* Modern gradients */}
                            <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FDBCB4" />
                              <stop offset="100%" stopColor="#F8A598" />
                            </linearGradient>
                            
                            <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#4A4A4A" />
                              <stop offset="100%" stopColor="#2C2C2C" />
                            </linearGradient>
                            
                            <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#667eea" />
                              <stop offset="100%" stopColor="#764ba2" />
                            </linearGradient>
                            
                            <radialGradient id="cheekGlow">
                              <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0.6" />
                              <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0" />
                            </radialGradient>
                            
                            {/* Brain background gradients */}
                            <radialGradient id="brainGrad" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="rgba(102, 126, 234, 0.3)" />
                              <stop offset="50%" stopColor="rgba(118, 75, 162, 0.2)" />
                              <stop offset="100%" stopColor="rgba(78, 205, 196, 0.1)" />
                            </radialGradient>
                            
                            <linearGradient id="neuronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.6)" />
                              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.2)" />
                            </linearGradient>
                          </defs>
                          
                          {/* Animated Brain Background */}
                          <motion.g
                            animate={{
                              scale: [1, 1.05, 1],
                              opacity: [0.4, 0.6, 0.4]
                            }}
                            transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {/* Main brain shape */}
                            <motion.path
                              d="M 70 60 Q 50 40 60 20 Q 80 10 100 20 Q 120 10 140 20 Q 150 40 130 60 Q 140 80 130 100 Q 120 120 100 110 Q 80 120 70 100 Q 60 80 70 60"
                              fill="url(#brainGrad)"
                              animate={{
                                d: [
                                  "M 70 60 Q 50 40 60 20 Q 80 10 100 20 Q 120 10 140 20 Q 150 40 130 60 Q 140 80 130 100 Q 120 120 100 110 Q 80 120 70 100 Q 60 80 70 60",
                                  "M 72 58 Q 52 42 62 22 Q 82 12 100 22 Q 118 12 138 22 Q 148 42 128 58 Q 138 78 128 98 Q 118 118 100 108 Q 82 118 72 98 Q 62 78 72 58",
                                  "M 70 60 Q 50 40 60 20 Q 80 10 100 20 Q 120 10 140 20 Q 150 40 130 60 Q 140 80 130 100 Q 120 120 100 110 Q 80 120 70 100 Q 60 80 70 60"
                                ]
                              }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            
                            {/* Brain folds/wrinkles */}
                            <motion.path
                              d="M 75 45 Q 85 35 95 45 Q 105 35 115 45"
                              stroke="rgba(255,255,255,0.3)"
                              strokeWidth="2"
                              fill="transparent"
                              animate={{
                                opacity: [0.3, 0.6, 0.3],
                                strokeWidth: [2, 3, 2]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            
                            <motion.path
                              d="M 70 70 Q 80 60 90 70 Q 100 60 110 70 Q 120 60 130 70"
                              stroke="rgba(255,255,255,0.25)"
                              strokeWidth="2"
                              fill="transparent"
                              animate={{
                                opacity: [0.25, 0.5, 0.25],
                                strokeWidth: [2, 3, 2]
                              }}
                              transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            />
                            
                            <motion.path
                              d="M 80 85 Q 90 75 100 85 Q 110 75 120 85"
                              stroke="rgba(255,255,255,0.2)"
                              strokeWidth="2"
                              fill="transparent"
                              animate={{
                                opacity: [0.2, 0.4, 0.2],
                                strokeWidth: [2, 3, 2]
                              }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                              }}
                            />
                            
                            {/* Neural network connections */}
                            <motion.circle
                              cx="80"
                              cy="50"
                              r="3"
                              fill="url(#neuronGrad)"
                              animate={{
                                r: [3, 5, 3],
                                opacity: [0.6, 1, 0.6]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            
                            <motion.circle
                              cx="120"
                              cy="65"
                              r="2.5"
                              fill="url(#neuronGrad)"
                              animate={{
                                r: [2.5, 4, 2.5],
                                opacity: [0.5, 0.9, 0.5]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            />
                            
                            <motion.circle
                              cx="95"
                              cy="80"
                              r="2"
                              fill="url(#neuronGrad)"
                              animate={{
                                r: [2, 3.5, 2],
                                opacity: [0.4, 0.8, 0.4]
                              }}
                              transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            />
                            
                            {/* Synaptic connections */}
                            <motion.line
                              x1="80"
                              y1="50"
                              x2="120"
                              y2="65"
                              stroke="rgba(255,255,255,0.4)"
                              strokeWidth="1"
                              animate={{
                                opacity: [0.4, 0.8, 0.4],
                                strokeWidth: [1, 2, 1]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            
                            <motion.line
                              x1="120"
                              y1="65"
                              x2="95"
                              y2="80"
                              stroke="rgba(255,255,255,0.3)"
                              strokeWidth="1"
                              animate={{
                                opacity: [0.3, 0.7, 0.3],
                                strokeWidth: [1, 2, 1]
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                              }}
                            />
                            
                            <motion.line
                              x1="95"
                              y1="80"
                              x2="80"
                              y2="50"
                              stroke="rgba(255,255,255,0.25)"
                              strokeWidth="1"
                              animate={{
                                opacity: [0.25, 0.6, 0.25],
                                strokeWidth: [1, 2, 1]
                              }}
                              transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                              }}
                            />
                          </motion.g>
                          
                          {/* Background glow */}
                          <circle cx="100" cy="100" r="90" fill="rgba(255,255,255,0.05)" />
                          
                          {/* Head - more round and modern */}
                          <motion.ellipse
                            cx="100"
                            cy="85"
                            rx="45"
                            ry="48"
                            fill="url(#skinGrad)"
                            animate={{
                              y: [0, -3, 0],
                              rx: [45, 46, 45]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Modern trendy hair */}
                          <motion.path
                            d="M 55 70 Q 75 40 100 45 Q 125 40 145 70 Q 145 65 140 55 Q 125 35 100 35 Q 75 35 60 55 Q 55 65 55 70"
                            fill="url(#hairGrad)"
                            animate={{
                              y: [0, -3, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Hair details - modern style */}
                          <motion.path
                            d="M 85 45 Q 95 38 105 45"
                            stroke="url(#hairGrad)"
                            strokeWidth="3"
                            fill="transparent"
                            animate={{
                              y: [0, -3, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Large modern eyes */}
                          <motion.ellipse
                            cx="85"
                            cy="78"
                            rx="8"
                            ry="10"
                            fill="white"
                            animate={{
                              y: [0, -3, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.ellipse
                            cx="115"
                            cy="78"
                            rx="8"
                            ry="10"
                            fill="white"
                            animate={{
                              y: [0, -3, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Eye pupils */}
                          <motion.circle
                            cx="85"
                            cy="80"
                            r="5"
                            fill="#2C3E50"
                            animate={{
                              y: [0, -3, 0],
                              scaleY: [1, 0.1, 1]
                            }}
                            transition={{
                              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                              scaleY: { duration: 0.2, repeat: Infinity, repeatDelay: 4 }
                            }}
                          />
                          <motion.circle
                            cx="115"
                            cy="80"
                            r="5"
                            fill="#2C3E50"
                            animate={{
                              y: [0, -3, 0],
                              scaleY: [1, 0.1, 1]
                            }}
                            transition={{
                              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                              scaleY: { duration: 0.2, repeat: Infinity, repeatDelay: 4 }
                            }}
                          />
                          
                          {/* Eye shine - modern highlight */}
                          <circle cx="87" cy="77" r="2.5" fill="white" />
                          <circle cx="117" cy="77" r="2.5" fill="white" />
                          <circle cx="83" cy="82" r="1" fill="rgba(255,255,255,0.8)" />
                          <circle cx="113" cy="82" r="1" fill="rgba(255,255,255,0.8)" />
                          
                          {/* Modern eyebrows */}
                          <motion.path
                            d="M 78 68 Q 85 65 92 68"
                            stroke="#3A3A3A"
                            strokeWidth="3"
                            fill="transparent"
                            strokeLinecap="round"
                            animate={{
                              y: [0, -3, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.path
                            d="M 108 68 Q 115 65 122 68"
                            stroke="#3A3A3A"
                            strokeWidth="3"
                            fill="transparent"
                            strokeLinecap="round"
                            animate={{
                              y: [0, -3, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Cute nose */}
                          <motion.ellipse
                            cx="100"
                            cy="88"
                            rx="2"
                            ry="3"
                            fill="#F4A086"
                            animate={{
                              y: [0, -3, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Happy smile */}
                          <motion.path
                            d="M 88 98 Q 100 105 112 98"
                            stroke="#E74C3C"
                            strokeWidth="3"
                            fill="transparent"
                            strokeLinecap="round"
                            animate={{
                              y: [0, -3, 0],
                              d: ["M 88 98 Q 100 105 112 98", "M 88 98 Q 100 107 112 98", "M 88 98 Q 100 105 112 98"]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Cheek blush */}
                          <circle cx="70" cy="88" r="8" fill="url(#cheekGlow)" />
                          <circle cx="130" cy="88" r="8" fill="url(#cheekGlow)" />
                          
                          {/* Modern hoodie/shirt */}
                          <motion.path
                            d="M 60 125 Q 60 120 65 120 L 135 120 Q 140 120 140 125 L 140 170 Q 140 175 135 175 L 65 175 Q 60 175 60 170 Z"
                            fill="url(#shirtGrad)"
                            animate={{
                              y: [0, -2, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* Hoodie strings */}
                          <motion.circle
                            cx="95"
                            cy="130"
                            r="2"
                            fill="rgba(255,255,255,0.8)"
                            animate={{
                              y: [0, -2, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          <motion.circle
                            cx="105"
                            cy="130"
                            r="2"
                            fill="rgba(255,255,255,0.8)"
                            animate={{
                              y: [0, -2, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                          
                          {/* AI/Tech symbol on hoodie */}
                          <motion.g
                            animate={{
                              y: [0, -2, 0],
                              rotate: [0, 360]
                            }}
                            transition={{
                              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                              rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                            }}
                            style={{ transformOrigin: "100px 150px" }}
                          >
                            <circle cx="100" cy="150" r="12" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2" />
                            <circle cx="100" cy="150" r="6" fill="rgba(255,255,255,0.9)" />
                            <circle cx="88" cy="150" r="2" fill="rgba(255,255,255,0.7)" />
                            <circle cx="112" cy="150" r="2" fill="rgba(255,255,255,0.7)" />
                            <circle cx="100" cy="138" r="2" fill="rgba(255,255,255,0.7)" />
                            <circle cx="100" cy="162" r="2" fill="rgba(255,255,255,0.7)" />
                          </motion.g>
                          
                          {/* Modern floating elements */}
                          <motion.text
                            x="30"
                            y="50"
                            fill="rgba(255,255,255,0.8)"
                            fontSize="16"
                            fontFamily="'Segoe UI', system-ui, sans-serif"
                            fontWeight="600"
                            animate={{
                              y: [0, -10, 0],
                              opacity: [0.8, 1, 0.8],
                              rotate: [0, 5, 0]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            🤖
                          </motion.text>
                          
                          <motion.text
                            x="155"
                            y="70"
                            fill="rgba(255,255,255,0.7)"
                            fontSize="14"
                            fontFamily="'Segoe UI', system-ui, sans-serif"
                            fontWeight="600"
                            animate={{
                              y: [0, 8, 0],
                              opacity: [0.7, 1, 0.7],
                              rotate: [0, -5, 0]
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 1
                            }}
                          >
                            ⚡
                          </motion.text>
                          
                          <motion.text
                            x="25"
                            y="130"
                            fill="rgba(255,255,255,0.6)"
                            fontSize="12"
                            fontFamily="'Segoe UI', system-ui, sans-serif"
                            fontWeight="600"
                            animate={{
                              y: [0, -6, 0],
                              opacity: [0.6, 0.9, 0.6],
                              rotate: [0, 3, 0]
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 2
                            }}
                          >
                            🧠
                          </motion.text>
                          
                          <motion.text
                            x="160"
                            y="150"
                            fill="rgba(255,255,255,0.5)"
                            fontSize="13"
                            fontFamily="'Segoe UI', system-ui, sans-serif"
                            fontWeight="600"
                            animate={{
                              y: [0, 5, 0],
                              opacity: [0.5, 0.8, 0.5],
                              rotate: [0, -3, 0]
                            }}
                            transition={{
                              duration: 6,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5
                            }}
                          >
                            💻
                          </motion.text>
                        </svg>
                      </motion.div>
                      
                      {/* Floating AI/ML elements */}
                      <motion.div
                        className="position-absolute"
                        style={{
                          top: '20px',
                          right: '20px',
                          fontSize: '1.5rem',
                          color: 'rgba(255, 255, 255, 0.6)'
                        }}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 360, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <SiPython />
                      </motion.div>
                      
                      <motion.div
                        className="position-absolute"
                        style={{
                          bottom: '30px',
                          left: '30px',
                          fontSize: '1.2rem',
                          color: 'rgba(255, 255, 255, 0.5)'
                        }}
                        animate={{
                          y: [0, 15, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      >
                        <SiTensorflow />
                      </motion.div>
                      
                      <motion.div
                        className="position-absolute"
                        style={{
                          top: '40px',
                          left: '40px',
                          fontSize: '1rem',
                          color: 'rgba(255, 255, 255, 0.4)'
                        }}
                        animate={{
                          y: [0, -8, 0],
                          x: [0, 5, 0]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                      >
                        <SiPytorch />
                      </motion.div>
                      
                      <motion.div
                        className="position-absolute"
                        style={{
                          bottom: '60px',
                          right: '50px',
                          fontSize: '0.9rem',
                          color: 'rgba(255, 255, 255, 0.3)'
                        }}
                        animate={{
                          y: [0, 12, 0],
                          rotate: [0, -360, 0]
                        }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      >
                        <SiJupyter />
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <Card.Body className="p-4 text-center">
                    <Card.Title className="h4 mb-2">AI/ML Developer</Card.Title>
                    <Card.Text className="text-muted mb-3">
                      Machine Learning Engineer & AI Specialist
                    </Card.Text>
                    <div className="d-flex justify-content-center align-items-center text-muted">
                      <BsRobot className="me-2" style={{ color: '#00D4AA' }} />
                      <small>Passionate about building intelligent systems</small>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>

            <Col lg={7} md={6}>
              <motion.div variants={itemVariants}>
                <div className="ps-lg-4">
                  <h3 className="h2 mb-4">
                    <span className="gradient-text">AI/ML Engineer</span> with Deep Technical Expertise
                  </h3>
                  
                  <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
                    I’m a final-year B.Tech (Information Technology) student specializing in Artificial Intelligence, Machine Learning, and Python development. With certifications in AI and Python, I’ve applied my skills through projects such as a recommendation system, demonstrating both technical ability and problem-solving. While I haven’t had formal internship experience, I bring strong self-learning, adaptability, and a passion for building intelligent systems. I’m eager to contribute to AI/ML or software development roles and grow alongside experienced teams.
                  </p>
                  
                  <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
                    I specialize in deep learning frameworks like TensorFlow, computer vision, 
                    natural language processing. My passion lies in transforming data into 
                    actionable insights and building AI models that make a meaningful impact across industries.
                  </p>

                  <Row className="mb-4">
                    <Col sm={6}>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <strong>🤖 Specialization:</strong> AI/ML
                        </li>
                        <li className="mb-2">
                          <strong>📍 Location:</strong> Vadodara
                        </li>
                        <li className="mb-2">
                          <strong>🎓 Education:</strong> B.Tech - Current
                        </li>
                      </ul>
                    </Col>
                    <Col sm={6}>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <strong>💼 Experience:</strong> Fresher
                        </li>
                        <li className="mb-2">
                          <strong>🧠 Focus:</strong> AI (LangChain)
                        </li>
                        <li className="mb-2">
                          <strong>⚡ Expertise:</strong> ML Models
                        </li>
                      </ul>
                    </Col>
                  </Row>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* <Button
                      variant="primary"
                      size="lg"
                      className="px-4 py-3"
                      style={{
                        borderRadius: 'var(--radius-lg)',
                        fontWeight: '600'
                      }}
                    >
                      <BsDownload className="me-2" />
                      Download AI Resume
                    </Button> */}
                  </motion.div>
                </div>
              </motion.div>
            </Col>
          </Row>

          {/* Skills Section */}
          <Row className="mt-5 pt-5">
            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <h3 className="h2 mb-4">AI/ML Tech Stack</h3>
                <div className="skills-container">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-600">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div 
                        style={{
                          height: '8px',
                          background: 'var(--border-light)',
                          borderRadius: 'var(--radius-sm)',
                          overflow: 'hidden'
                        }}
                      >
                        <motion.div
                          style={{
                            height: '100%',
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                            borderRadius: 'var(--radius-sm)'
                          }}
                          initial={{ width: 0 }}
                          animate={skillsAnimated ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ delay: index * 0.2, duration: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Col>

            <Col lg={6}>
              <motion.div variants={itemVariants}>
                <h3 className="h2 mb-4">AI Specializations</h3>
                <Row>
                  {interests.map((interest, index) => (
                    <Col md={6} key={interest.title} className="mb-4">
                      <motion.div
                        whileHover={{ y: -5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card 
                          className="h-100 border-0"
                          style={{
                            background: 'var(--bg-card)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-sm)',
                            transition: 'all var(--transition-normal)'
                          }}
                        >
                          <Card.Body className="p-4 text-center">
                            <div
                              className="d-inline-flex align-items-center justify-content-center mb-3"
                              style={{
                                width: '60px',
                                height: '60px',
                                background: `linear-gradient(135deg, var(--primary), var(--secondary))`,
                                borderRadius: '50%',
                                color: 'white',
                                fontSize: '1.5rem'
                              }}
                            >
                              <interest.icon />
                            </div>
                            <Card.Title className="h6 mb-2">{interest.title}</Card.Title>
                            <Card.Text 
                              className="small text-muted"
                              style={{ fontSize: '0.9rem' }}
                            >
                              {interest.desc}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;