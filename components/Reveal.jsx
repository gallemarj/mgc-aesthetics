"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className,
  style,
}) {
  const variants = {
    fadeUp: {
      hidden: { opacity: 1, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 1, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 1, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 1, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
      hidden: { opacity: 1, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.7 }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
