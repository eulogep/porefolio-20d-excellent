import React, { useState, useEffect, useRef } from "react";

// Simple Gradient Text Component
export const GradientTextSimple: React.FC<{
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}> = ({ children, className = "", animated = true }) => {
  return (
    <span
      className={`${animated ? "gradient-text-animated" : "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"} ${className}`}
    >
      {children}
    </span>
  );
};

// Magnetic Button Component
export const MagneticButtonSimple: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`magnetic-button btn-reactbits ${className}`}
    >
      {children}
    </button>
  );
};

// Ripple Effect Component
export const RippleEffectSimple: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  return (
    <div
      ref={containerRef}
      className={`ripple-container ${className}`}
      onClick={handleClick}
    >
      {children}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="ripple-effect"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </div>
  );
};

// Spotlight Card Component
export const SpotlightCardSimple: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });

    // Update CSS custom properties
    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

// Interactive Card Component
export const InteractiveCardSimple: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return <div className={`interactive-card ${className}`}>{children}</div>;
};

// Text Reveal Component
export const TextRevealSimple: React.FC<{
  text: string;
  delay?: number;
  className?: string;
}> = ({ text, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`text-reveal-animation ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="text-reveal-char"
          style={{
            animationDelay: isVisible ? `${index * 0.05}s` : "none",
            animationFillMode: "forwards",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

// Floating Particles Background
export const FloatingParticlesSimple: React.FC<{
  count?: number;
  className?: string;
}> = ({ count = 20, className = "" }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 8,
    animationDuration: 8 + Math.random() * 4,
  }));

  return (
    <div className={`floating-particles ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Glass Container
export const GlassContainerReactBits: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return <div className={`glass-reactbits ${className}`}>{children}</div>;
};

// Enhanced Button with ReactBits styling
export const ButtonReactBits: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "danger";
  className?: string;
}> = ({ children, onClick, variant = "primary", className = "" }) => {
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500",
    secondary:
      "bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500",
    success:
      "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500",
    danger:
      "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500",
  };

  return (
    <button
      onClick={onClick}
      className={`
        btn-reactbits px-6 py-3 rounded-lg text-white font-medium
        ${variantClasses[variant]}
        transition-all duration-300 flex items-center gap-2
        ${className}
      `}
    >
      {children}
    </button>
  );
};

// Cyber Grid Background
export const CyberGridBackground: React.FC<{
  className?: string;
}> = ({ className = "" }) => {
  return (
    <div
      className={`
      fixed inset-0 pointer-events-none opacity-20 z-0
      bg-gradient-to-br from-green-900/10 via-blue-900/5 to-purple-900/10
      ${className}
    `}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      />
    </div>
  );
};

// Loading Dots Animation
export const LoadingDotsSimple: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = "", color = "#00ff41" }) => {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-3 h-3 rounded-full animate-pulse"
          style={{
            backgroundColor: color,
            animationDelay: `${i * 0.2}s`,
            animationDuration: "1.5s",
          }}
        />
      ))}
    </div>
  );
};
