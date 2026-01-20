'use client'
import { motion } from "framer-motion";

const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.5, 
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  }
};

export const RevealOnScroll = ({ 
  children, 
  variant = "fadeInUp",
  delay = 0,
  className = "",
  once = false
}: {
    children: React.ReactNode;
    variant?: keyof typeof variants;
    delay?: number;
    className?: string;
    once?: boolean;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once,
        margin: "0px 0px -100px 0px"
      }}
      variants={variants[variant]}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
};
