'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const VIDEOS = [
  '/videos/1.mp4',
  '/videos/2.mp4',
  '/videos/3.mp4'
];

export default function GlobalBackground() {
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % VIDEOS.length);
    }, 12000); // 12 second rotations for a cinematic pace
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[-50] overflow-hidden bg-[#020202]">
      <motion.div className="absolute -inset-[10%] h-[120%] w-[120%] left-[-10%] top-[-10%]">
        <AnimatePresence mode="popLayout">
          <motion.video 
            key={activeVideo} 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none mix-blend-screen"
            src={VIDEOS[activeVideo]}
          />
        </AnimatePresence>
      </motion.div>
      
      {/* Epic Cinematic Global Dark Mask Framework */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020202]/30 via-transparent to-[#020202]/90" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(2,2,2,0.9)_100%)]" />
    </div>
  );
}
