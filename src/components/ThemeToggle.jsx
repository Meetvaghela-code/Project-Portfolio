import React from 'react';
import { Button } from 'react-bootstrap';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="outline-primary"
        size="sm"
        onClick={toggleTheme}
        className={`theme-toggle d-flex align-items-center justify-content-center ${className}`}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid var(--primary)',
          background: 'var(--bg-primary)',
          color: 'var(--primary)',
          transition: 'all 0.3s ease'
        }}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? <BsSun size={18} /> : <BsMoon size={18} />}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;