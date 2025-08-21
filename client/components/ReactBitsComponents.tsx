import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";

// Gradient Text Component - inspired by ReactBits
export const GradientText: React.FC<{
  children: React.ReactNode;
  colors?: string[];
  speed?: number;
  className?: string;
  animate?: boolean;
}> = ({ 
  children, 
  colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7"], 
  speed = 3,
  className = "",
  animate = true 
}) => {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    if (!animate) return;
    
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 360);
    }, 100 / speed);

    return () => clearInterval(interval);
  }, [speed, animate]);

  const gradientStyle = animate ? {
    background: `linear-gradient(${gradientPosition}deg, ${colors.join(", ")})`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundSize: "400% 400%",
    animation: `gradient-shift ${speed}s ease infinite`,
  } : {
    background: `linear-gradient(45deg, ${colors.join(", ")})`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };

  return (
    <span className={className} style={gradientStyle}>
      {children}
    </span>
  );
};

// Floating Dots Background - inspired by ReactBits
export const FloatingDots: React.FC<{
  density?: number;
  color?: string;
  maxSize?: number;
  speed?: number;
}> = ({ density = 50, color = "#00ff41", maxSize = 4, speed = 0.5 }) => {
  const dotsRef = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number; size: number; speed: number }>>([]);

  useEffect(() => {
    const newDots = Array.from({ length: density }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * maxSize + 1,
      speed: Math.random() * speed + 0.1,
    }));
    setDots(newDots);
  }, [density, maxSize, speed]);

  return (
    <div ref={dotsRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full opacity-30"
          style={{
            backgroundColor: color,
            width: dot.size,
            height: dot.size,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 / dot.speed,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Interactive Card - inspired by ReactBits
export const InteractiveCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tiltAmount?: number;
}> = ({ children, className = "", glowColor = "#00ff41", tiltAmount = 15 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) / (rect.height / 2) * tiltAmount;
    const rotateY = (e.clientX - centerX) / (rect.width / 2) * tiltAmount;
    
    setMousePosition({ x: rotateY, y: -rotateX });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative transform-gpu perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: mousePosition.y,
        rotateY: mousePosition.x,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute -inset-1 rounded-xl opacity-0"
        style={{ 
          background: `radial-gradient(circle at ${mousePosition.x > 0 ? 'right' : 'left'}, ${glowColor}40, transparent 70%)`,
          filter: "blur(20px)"
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Card content */}
      <div className="relative z-10 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden">
        {children}
      </div>
      
      {/* Reflection effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-xl opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transform: "translateZ(1px)" }}
      />
    </motion.div>
  );
};

// Text Reveal Animation - inspired by ReactBits
export const TextReveal: React.FC<{
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}> = ({ text, delay = 0, speed = 0.05, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div ref={ref} className={className}>
      <AnimatePresence>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ 
              delay: delay + index * speed,
              duration: 0.6,
              ease: "easeOut"
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

// Magnetic Button - inspired by ReactBits
export const MagneticButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  magneticStrength?: number;
}> = ({ children, onClick, className = "", magneticStrength = 0.3 }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </motion.button>
  );
};

// Ripple Effect - inspired by ReactBits
export const RippleEffect: React.FC<{
  children: React.ReactNode;
  color?: string;
  duration?: number;
  className?: string;
}> = ({ children, color = "#00ff41", duration = 0.6, className = "" }) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, duration * 1000);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} onClick={handleClick}>
      {children}
      
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            backgroundColor: color,
          }}
          initial={{ width: 0, height: 0, opacity: 0.8 }}
          animate={{ 
            width: 200, 
            height: 200, 
            opacity: 0,
            x: -100,
            y: -100
          }}
          transition={{ duration }}
        />
      ))}
    </div>
  );
};

// Particle System - inspired by ReactBits
export const ParticleSystem: React.FC<{
  particleCount?: number;
  colors?: string[];
  size?: { min: number; max: number };
  speed?: { min: number; max: number };
}> = ({ 
  particleCount = 30, 
  colors = ["#00ff41", "#0066ff", "#ff6b6b"],
  size = { min: 2, max: 6 },
  speed = { min: 1, max: 3 }
}) => {
  const particles = useMemo(() => 
    Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (size.max - size.min) + size.min,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * (speed.max - speed.min) + speed.min,
      direction: Math.random() * 360,
    })), [particleCount, colors, size, speed]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.cos(particle.direction * Math.PI / 180) * 100],
            y: [0, Math.sin(particle.direction * Math.PI / 180) * 100],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 5 / particle.speed,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Spotlight Effect - inspired by ReactBits
export const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}> = ({ children, className = "", spotlightColor = "#00ff41" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}15, transparent 80%)`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// Loading Skeleton - inspired by ReactBits
export const SkeletonLoader: React.FC<{
  lines?: number;
  className?: string;
}> = ({ lines = 3, className = "" }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-gray-700 rounded animate-pulse"
          style={{ width: `${Math.random() * 40 + 60}%` }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};
