import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedAvatar = ({ className = '', size = 300 }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [showAIMessage, setShowAIMessage] = useState(false);
  const [neuralActivity, setNeuralActivity] = useState(false);

  useEffect(() => {
    // AI Analysis cycle - simulating ML model training/inference
    const analysisInterval = setInterval(() => {
      setIsAnalyzing(true);
      setNeuralActivity(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setNeuralActivity(false);
      }, 5000);
    }, 10000);

    // Natural blinking
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 2000);

    // AI Message bubble
    const messageTimer = setTimeout(() => {
      setShowAIMessage(true);
      setTimeout(() => setShowAIMessage(false), 4500);
    }, 2500);

    // Initial neural activity
    setTimeout(() => {
      setNeuralActivity(true);
      setTimeout(() => setNeuralActivity(false), 3000);
    }, 1000);

    return () => {
      clearInterval(analysisInterval);
      clearInterval(blinkInterval);
      clearTimeout(messageTimer);
    };
  }, []);

  return (
    <div className={`animated-avatar ${className}`}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          type: "spring", 
          stiffness: 100,
          damping: 15 
        }}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        style={{ 
          width: size, 
          height: size,
          position: 'relative'
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
            overflow: 'visible'
          }}
        >
          {/* Background with Neural Network Pattern */}
          <circle
            cx="200"
            cy="200"
            r="185"
            fill="url(#neuralBackground)"
            stroke="url(#aiGradient)"
            strokeWidth="3"
            opacity="0.15"
          />
          
          {/* Floating Neural Network Nodes */}
          <g opacity={neuralActivity ? "0.8" : "0.4"}>
            {/* Neural nodes */}
            <circle cx="120" cy="120" r="4" fill="#00D4AA" opacity="0.7" />
            <circle cx="180" cy="100" r="3" fill="#FF6B9D" opacity="0.6" />
            <circle cx="250" cy="130" r="4" fill="#4ECDC4" opacity="0.8" />
            <circle cx="300" cy="180" r="3" fill="#45B7D1" opacity="0.7" />
            <circle cx="280" cy="250" r="4" fill="#96CEB4" opacity="0.6" />
            <circle cx="220" cy="300" r="3" fill="#FFEAA7" opacity="0.8" />
            <circle cx="150" cy="320" r="4" fill="#DDA0DD" opacity="0.7" />
            <circle cx="100" cy="280" r="3" fill="#98D8C8" opacity="0.6" />
            <circle cx="80" cy="220" r="4" fill="#F7DC6F" opacity="0.8" />
            <circle cx="110" cy="180" r="3" fill="#BB8FCE" opacity="0.7" />
            
            {/* Neural connections */}
            <motion.line 
              x1="120" y1="120" x2="180" y2="100" 
              stroke="#00D4AA" strokeWidth="1.5" opacity="0.4"
              animate={neuralActivity ? { 
                strokeDasharray: ["0 10", "5 5", "10 0"],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.line 
              x1="180" y1="100" x2="250" y2="130" 
              stroke="#FF6B9D" strokeWidth="1.5" opacity="0.4"
              animate={neuralActivity ? { 
                strokeDasharray: ["0 10", "5 5", "10 0"],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.line 
              x1="250" y1="130" x2="300" y2="180" 
              stroke="#4ECDC4" strokeWidth="1.5" opacity="0.4"
              animate={neuralActivity ? { 
                strokeDasharray: ["0 10", "5 5", "10 0"],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
            />
            <motion.line 
              x1="300" y1="180" x2="280" y2="250" 
              stroke="#45B7D1" strokeWidth="1.5" opacity="0.4"
              animate={neuralActivity ? { 
                strokeDasharray: ["0 10", "5 5", "10 0"],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{ duration: 2.1, repeat: Infinity, delay: 0.9 }}
            />
            <motion.line 
              x1="280" y1="250" x2="220" y2="300" 
              stroke="#96CEB4" strokeWidth="1.5" opacity="0.4"
              animate={neuralActivity ? { 
                strokeDasharray: ["0 10", "5 5", "10 0"],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{ duration: 1.9, repeat: Infinity, delay: 1.2 }}
            />
            <motion.line 
              x1="220" y1="300" x2="150" y2="320" 
              stroke="#FFEAA7" strokeWidth="1.5" opacity="0.4"
              animate={neuralActivity ? { 
                strokeDasharray: ["0 10", "5 5", "10 0"],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{ duration: 2.3, repeat: Infinity, delay: 1.5 }}
            />
            <motion.line 
              x1="150" y1="320" x2="100" y2="280" 
              stroke="#DDA0DD" strokeWidth="1.5" opacity="0.4"
              animate={neuralActivity ? { 
                strokeDasharray: ["0 10", "5 5", "10 0"],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{ duration: 2.0, repeat: Infinity, delay: 1.8 }}
            />
            <motion.line 
              x1="100" y1="280" x2="80" y2="220" 
              stroke="#98D8C8" strokeWidth="1.5" opacity="0.4"
              animate={neuralActivity ? { 
                strokeDasharray: ["0 10", "5 5", "10 0"],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{ duration: 1.7, repeat: Infinity, delay: 2.1 }}
            />
            <motion.line 
              x1="80" y1="220" x2="110" y2="180" 
              stroke="#F7DC6F" strokeWidth="1.5" opacity="0.4"
              animate={neuralActivity ? { 
                strokeDasharray: ["0 10", "5 5", "10 0"],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{ duration: 2.4, repeat: Infinity, delay: 2.4 }}
            />
            <motion.line 
              x1="110" y1="180" x2="120" y2="120" 
              stroke="#BB8FCE" strokeWidth="1.5" opacity="0.4"
              animate={neuralActivity ? { 
                strokeDasharray: ["0 10", "5 5", "10 0"],
                opacity: [0.4, 0.8, 0.4]
              } : {}}
              transition={{ duration: 2.2, repeat: Infinity, delay: 2.7 }}
            />
          </g>
          
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="neuralBackground" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#667eea" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#764ba2" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#f093fb" stopOpacity="0.1" />
            </linearGradient>
            
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D4AA" />
              <stop offset="50%" stopColor="#4ECDC4" />
              <stop offset="100%" stopColor="#45B7D1" />
            </linearGradient>
            
            <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.1" />
            </linearGradient>
            
            <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE0D1" />
              <stop offset="100%" stopColor="#FFCAB0" />
            </linearGradient>
            
            <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="100%" stopColor="#654321" />
            </linearGradient>
            
            <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2C3E50" />
              <stop offset="100%" stopColor="#34495E" />
            </linearGradient>
            
            <linearGradient id="laptopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2C3E50" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </linearGradient>
            
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
            
            <radialGradient id="aiScreenGlow">
              <stop offset="0%" stopColor="rgba(0, 212, 170, 0.6)" />
              <stop offset="50%" stopColor="rgba(78, 205, 196, 0.3)" />
              <stop offset="100%" stopColor="rgba(69, 183, 209, 0)" />
            </radialGradient>
            
            <radialGradient id="neuralGlow">
              <stop offset="0%" stopColor="rgba(255, 107, 157, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 107, 157, 0)" />
            </radialGradient>
          </defs>

          {/* Modern AI Workstation Desk */}
          <rect
            x="60"
            y="290"
            width="280"
            height="40"
            fill="url(#aiGradient)"
            rx="20"
            opacity="0.8"
          />
          <rect
            x="65"
            y="285"
            width="270"
            height="8"
            fill="#667eea"
            rx="4"
            opacity="0.6"
          />

          {/* Futuristic Chair */}
          <ellipse
            cx="200"
            cy="350"
            rx="45"
            ry="18"
            fill="#2C3E50"
            opacity="0.8"
          />
          
          <rect
            x="195"
            y="320"
            width="10"
            height="30"
            fill="url(#aiGradient)"
            rx="5"
          />

          <ellipse
            cx="200"
            cy="270"
            rx="50"
            ry="25"
            fill="#34495E"
          />
          <ellipse
            cx="200"
            cy="267"
            rx="45"
            ry="20"
            fill="url(#aiGradient)"
            opacity="0.7"
          />

          <rect
            x="165"
            y="225"
            width="70"
            height="50"
            fill="#34495E"
            rx="35"
          />
          <rect
            x="170"
            y="230"
            width="60"
            height="40"
            fill="url(#aiGradient)"
            rx="30"
            opacity="0.8"
          />

          {/* AI/ML Laptop */}
          <rect
            x="130"
            y="280"
            width="140"
            height="18"
            fill="url(#laptopGradient)"
            rx="8"
          />
          
          {/* AI-themed Interface */}
          <rect
            x="138"
            y="283"
            width="124"
            height="12"
            fill="#000"
            rx="6"
          />
          
          {/* Neural Network Visualization on Screen */}
          <motion.rect
            x="140"
            y="200"
            width="120"
            height="80"
            fill="url(#screenGradient)"
            rx="6"
            animate={isAnalyzing ? {
              filter: ["brightness(1)", "brightness(2)", "brightness(1.5)", "brightness(2.5)", "brightness(1)"]
            } : {}}
            transition={{ duration: 4, repeat: isAnalyzing ? Infinity : 0 }}
          />
          
          <rect
            x="136"
            y="196"
            width="128"
            height="88"
            fill="none"
            stroke="url(#aiGradient)"
            strokeWidth="3"
            rx="8"
          />

          {/* AI Screen Glow */}
          {isAnalyzing && (
            <motion.circle
              cx="200"
              cy="240"
              r="100"
              fill="url(#aiScreenGlow)"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}

          {/* AI Neural Network Visualization on Laptop Screen */}
          <g opacity={isAnalyzing ? "1" : "0.6"}>
            {/* Neural nodes on screen */}
            <motion.circle 
              cx="155" cy="215" r="2.5" fill="#00D4AA"
              animate={isAnalyzing ? { scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.circle 
              cx="175" cy="210" r="2" fill="#FF6B9D"
              animate={isAnalyzing ? { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] } : {}}
              transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
            />
            <motion.circle 
              cx="195" cy="220" r="2.5" fill="#4ECDC4"
              animate={isAnalyzing ? { scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] } : {}}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
            />
            <motion.circle 
              cx="215" cy="215" r="2" fill="#45B7D1"
              animate={isAnalyzing ? { scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] } : {}}
              transition={{ duration: 2.1, repeat: Infinity, delay: 0.9 }}
            />
            <motion.circle 
              cx="235" cy="225" r="2.5" fill="#96CEB4"
              animate={isAnalyzing ? { scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] } : {}}
              transition={{ duration: 1.9, repeat: Infinity, delay: 1.2 }}
            />
            
            {/* ML Data Streams */}
            <motion.rect 
              x="148" y="235" width="20" height="1.5" fill="#00D4AA" rx="0.5"
              animate={isAnalyzing ? { width: [20, 60, 30, 70, 25] } : {}}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.rect 
              x="148" y="240" width="35" height="1.5" fill="#FF6B9D" rx="0.5"
              animate={isAnalyzing ? { width: [35, 80, 45, 75, 40] } : {}}
              transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
            />
            <motion.rect 
              x="148" y="245" width="25" height="1.5" fill="#4ECDC4" rx="0.5"
              animate={isAnalyzing ? { width: [25, 65, 35, 80, 30] } : {}}
              transition={{ duration: 3.2, repeat: Infinity, delay: 1 }}
            />
            <motion.rect 
              x="148" y="250" width="40" height="1.5" fill="#45B7D1" rx="0.5"
              animate={isAnalyzing ? { width: [40, 75, 50, 85, 45] } : {}}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
            />
            <motion.rect 
              x="148" y="255" width="30" height="1.5" fill="#96CEB4" rx="0.5"
              animate={isAnalyzing ? { width: [30, 70, 40, 60, 35] } : {}}
              transition={{ duration: 2.9, repeat: Infinity, delay: 2 }}
            />
            
            {/* Training Progress Bars */}
            <rect x="148" y="265" width="80" height="2" fill="#333" rx="1" />
            <motion.rect 
              x="148" y="265" width="20" height="2" fill="#00D4AA" rx="1"
              animate={isAnalyzing ? { width: [20, 80, 20] } : {}}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <rect x="148" y="270" width="80" height="2" fill="#333" rx="1" />
            <motion.rect 
              x="148" y="270" width="35" height="2" fill="#FF6B9D" rx="1"
              animate={isAnalyzing ? { width: [35, 80, 35] } : {}}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            />
            
            {/* Blinking Analysis Cursor */}
            <motion.rect
              x="228"
              y="235"
              width="1"
              height="1.5"
              fill="#FFFFFF"
              animate={isAnalyzing ? { 
                opacity: [1, 0, 1, 0, 1] 
              } : { 
                opacity: [1, 0, 1] 
              }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity 
              }}
            />
          </g>

          {/* Body/Torso with AI-themed clothing */}
          <motion.rect
            x="178"
            y="250"
            width="44"
            height="40"
            fill="url(#shirtGradient)"
            rx="6"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* AI Logo on Shirt */}
          <motion.circle
            cx="200"
            cy="265"
            r="8"
            fill="none"
            stroke="#00D4AA"
            strokeWidth="2"
            animate={{
              y: [0, -2, 0],
              rotate: neuralActivity ? [0, 360] : [0, 0]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" }
            }}
          />
          <motion.circle
            cx="200"
            cy="265"
            r="4"
            fill="#00D4AA"
            animate={{
              y: [0, -2, 0],
              scale: neuralActivity ? [1, 1.2, 1] : [1]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 2, repeat: Infinity }
            }}
          />

          {/* Head with enhanced focus expression */}
          <motion.circle
            cx="200"
            cy="230"
            r="28"
            fill="url(#skinGradient)"
            animate={{
              y: [0, -3, 0],
              rotate: isAnalyzing ? [0, 2, -1.5, 1, 0] : [0, 1, -0.5, 0]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Hair with modern styling */}
          <motion.path
            d="M 172 215 Q 200 195 228 215 Q 228 208 222 204 Q 212 198 200 198 Q 188 198 178 204 Q 172 208 172 215"
            fill="url(#hairGradient)"
            animate={{
              y: [0, -3, 0],
              rotate: isAnalyzing ? [0, 2, -1.5, 1, 0] : [0, 1, -0.5, 0]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Eyes with AI focus intensity */}
          <motion.ellipse
            cx="188"
            cy="227"
            rx={isBlinking ? "1.5" : "4"}
            ry={isBlinking ? "0.5" : "4"}
            fill="#2C3E50"
            animate={{
              y: [0, -3, 0],
              rotate: isAnalyzing ? [0, 2, -1.5, 1, 0] : [0, 1, -0.5, 0]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.ellipse
            cx="212"
            cy="227"
            rx={isBlinking ? "1.5" : "4"}
            ry={isBlinking ? "0.5" : "4"}
            fill="#2C3E50"
            animate={{
              y: [0, -3, 0],
              rotate: isAnalyzing ? [0, 2, -1.5, 1, 0] : [0, 1, -0.5, 0]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Eye Highlights with AI glow */}
          {!isBlinking && (
            <>
              <motion.circle
                cx="190"
                cy="225"
                r="1.5"
                fill={isAnalyzing ? "#00D4AA" : "white"}
                animate={{
                  y: [0, -3, 0],
                  rotate: isAnalyzing ? [0, 2, -1.5, 1, 0] : [0, 1, -0.5, 0]
                }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.circle
                cx="214"
                cy="225"
                r="1.5"
                fill={isAnalyzing ? "#00D4AA" : "white"}
                animate={{
                  y: [0, -3, 0],
                  rotate: isAnalyzing ? [0, 2, -1.5, 1, 0] : [0, 1, -0.5, 0]
                }}
                transition={{
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </>
          )}

          {/* Eyebrows */}
          <motion.path
            d="M 184 220 Q 188 218 192 220"
            stroke="#654321"
            strokeWidth="2.5"
            fill="transparent"
            strokeLinecap="round"
            animate={{
              y: [0, -3, 0],
              rotate: isAnalyzing ? [0, 2, -1.5, 1, 0] : [0, 1, -0.5, 0]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.path
            d="M 208 220 Q 212 218 216 220"
            stroke="#654321"
            strokeWidth="2.5"
            fill="transparent"
            strokeLinecap="round"
            animate={{
              y: [0, -3, 0],
              rotate: isAnalyzing ? [0, 2, -1.5, 1, 0] : [0, 1, -0.5, 0]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Nose */}
          <motion.circle
            cx="200"
            cy="233"
            r="2"
            fill="#FFB094"
            animate={{
              y: [0, -3, 0],
              rotate: isAnalyzing ? [0, 2, -1.5, 1, 0] : [0, 1, -0.5, 0]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Mouth */}
          <motion.path
            d={isAnalyzing ? "M 194 239 Q 200 237 206 239" : "M 194 239 Q 200 241.5 206 239"}
            stroke="#E74C3C"
            strokeWidth="2"
            fill="transparent"
            strokeLinecap="round"
            animate={{
              y: [0, -3, 0],
              rotate: isAnalyzing ? [0, 2, -1.5, 1, 0] : [0, 1, -0.5, 0]
            }}
            transition={{
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Arms with AI interaction gestures */}
          <motion.rect
            x="158"
            y="260"
            width="24"
            height="12"
            fill="url(#shirtGradient)"
            rx="6"
            style={{ transformOrigin: "170px 266px" }}
            animate={isAnalyzing ? {
              rotate: [0, -15, 8, -12, 5, 0],
              y: [0, -2, 1, -1, 0]
            } : {
              rotate: [-10, -8, -10],
              y: [0, -1, 0]
            }}
            transition={{
              duration: isAnalyzing ? 3 : 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.rect
            x="218"
            y="260"
            width="24"
            height="12"
            fill="url(#shirtGradient)"
            rx="6"
            style={{ transformOrigin: "230px 266px" }}
            animate={isAnalyzing ? {
              rotate: [0, 15, -8, 12, -5, 0],
              y: [0, -2, 1, -1, 0]
            } : {
              rotate: [10, 8, 10],
              y: [0, -1, 0]
            }}
            transition={{
              duration: isAnalyzing ? 3 : 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Hands with AI interaction */}
          <motion.circle
            cx="170"
            cy="272"
            r="8"
            fill="url(#skinGradient)"
            animate={isAnalyzing ? {
              y: [0, -5, 2, -3, 0],
              x: [0, -2, 1, -1, 0]
            } : {
              y: [0, -1.5, 0]
            }}
            transition={{
              duration: isAnalyzing ? 3 : 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.circle
            cx="230"
            cy="272"
            r="8"
            fill="url(#skinGradient)"
            animate={isAnalyzing ? {
              y: [0, -4, 3, -2, 0],
              x: [0, 2, -1, 1, 0]
            } : {
              y: [0, -1.5, 0]
            }}
            transition={{
              duration: isAnalyzing ? 3 : 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
          />

          {/* Legs */}
          <rect
            x="188"
            y="290"
            width="8"
            height="25"
            fill="#2C3E50"
            rx="4"
          />
          <rect
            x="204"
            y="290"
            width="8"
            height="25"
            fill="#2C3E50"
            rx="4"
          />

          {/* Shoes */}
          <ellipse
            cx="192"
            cy="317"
            rx="7"
            ry="4"
            fill="#1a1a1a"
          />
          <ellipse
            cx="208"
            cy="317"
            rx="7"
            ry="4"
            fill="#1a1a1a"
          />

          {/* AI/ML Floating Elements */}
          <motion.text
            x="80"
            y="120"
            fill="#00D4AA"
            fontSize="24"
            opacity="0.9"
            fontFamily="'Fira Code', 'Courier New', monospace"
            fontWeight="bold"
            animate={{
              y: [-15, 15, -15],
              opacity: [0.9, 0.5, 0.9],
              rotate: [-8, 8, -8]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            AI
          </motion.text>
          
          <motion.text
            x="300"
            y="150"
            fill="#FF6B9D"
            fontSize="22"
            opacity="0.8"
            fontFamily="'Fira Code', 'Courier New', monospace"
            fontWeight="bold"
            animate={{
              y: [12, -18, 12],
              opacity: [0.8, 0.4, 0.8],
              rotate: [6, -10, 6]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            ML
          </motion.text>
          
          <motion.text
            x="70"
            y="220"
            fill="#4ECDC4"
            fontSize="18"
            opacity="0.8"
            fontFamily="'Fira Code', 'Courier New', monospace"
            fontWeight="bold"
            animate={{
              y: [-12, 12, -12],
              opacity: [0.8, 0.4, 0.8],
              rotate: [-5, 5, -5]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            NN
          </motion.text>
          
          <motion.text
            x="310"
            y="250"
            fill="#45B7D1"
            fontSize="20"
            opacity="0.7"
            fontFamily="'Fira Code', 'Courier New', monospace"
            fontWeight="bold"
            animate={{
              y: [10, -15, 10],
              opacity: [0.7, 0.3, 0.7],
              rotate: [7, -7, 7]
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            DL
          </motion.text>
          
          <motion.text
            x="65"
            y="180"
            fill="#96CEB4"
            fontSize="16"
            opacity="0.7"
            fontFamily="'Fira Code', 'Courier New', monospace"
            fontWeight="bold"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.7, 0.3, 0.7],
              rotate: [-4, 4, -4]
            }}
            transition={{
              duration: 5.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            GPU
          </motion.text>
          
          <motion.text
            x="285"
            y="320"
            fill="#FFEAA7"
            fontSize="17"
            opacity="0.6"
            fontFamily="'Fira Code', 'Courier New', monospace"
            fontWeight="bold"
            animate={{
              y: [8, -12, 8],
              opacity: [0.6, 0.2, 0.6],
              rotate: [3, -6, 3]
            }}
            transition={{
              duration: 6.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          >
            API
          </motion.text>
        </svg>

        {/* AI Message Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ 
            opacity: showAIMessage ? 1 : 0, 
            scale: showAIMessage ? 1 : 0,
            y: showAIMessage ? 0 : 20
          }}
          transition={{ 
            duration: 0.7, 
            type: "spring", 
            bounce: 0.5 
          }}
          className="position-absolute"
          style={{
            top: '15px',
            right: '-160px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: '3px solid #00D4AA',
            borderRadius: '28px',
            padding: '18px 28px',
            fontSize: '18px',
            fontWeight: '700',
            color: 'white',
            boxShadow: '0 20px 40px rgba(0,212,170,0.3), 0 0 20px rgba(102,126,234,0.2)',
            zIndex: 10,
            minWidth: '180px',
            textAlign: 'center',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}
        >
          <motion.span
            animate={isAnalyzing ? {
              scale: [1, 1.08, 1],
              color: ["#ffffff", "#00D4AA", "#ffffff"]
            } : {}}
            transition={{
              duration: 2,
              repeat: isAnalyzing ? Infinity : 0
            }}
          >
            {isAnalyzing ? "Training models! 🧠⚡" : "AI Ready! 🤖✨"}
          </motion.span>
          <div
            style={{
              position: 'absolute',
              bottom: '-15px',
              left: '60px',
              width: '0',
              height: '0',
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderTop: '15px solid #00D4AA'
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedAvatar;