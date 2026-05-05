"use client";

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--bg-color)',
      zIndex: 9999
    }}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: '3px solid transparent',
          borderTopColor: 'var(--primary-red)',
          borderBottomColor: 'var(--primary-green)',
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '3px solid transparent',
            borderLeftColor: 'var(--primary-green)',
            borderRightColor: 'var(--primary-red)',
          }}
        />
      </motion.div>
    </div>
  );
}
