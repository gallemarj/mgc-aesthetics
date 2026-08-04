"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function CountUp({ end, suffix = "", duration = 2, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="countup">
      <motion.span
        className="countup__num"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {count}
        {suffix}
      </motion.span>
      <span className="countup__label">{label}</span>

      <style jsx>{`
        .countup {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: center;
          padding: 40px 24px;
          border: 1px solid var(--gray-200);
          background: var(--white);
        }

        .countup__num {
          font-size: 40px;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--black);
        }

        .countup__label {
          font-size: 14px;
          color: var(--gray-500);
        }
      `}</style>
    </div>
  );
}
