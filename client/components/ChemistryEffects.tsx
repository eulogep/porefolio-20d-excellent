import React, { useEffect, useRef } from "react";
import { Atom, FlaskConical, Microscope, Zap, Beaker } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
}

export const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const colors = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444"];
    for (let i = 0; i < 50; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export const GlowingButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-8 py-4 rounded-full font-semibold text-white
        bg-gradient-to-r from-blue-500 to-purple-600
        overflow-hidden transition-all duration-300
        hover:scale-105 hover:shadow-2xl
        group ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      <div className="relative z-10 flex items-center gap-2">{children}</div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-300" />
    </button>
  );
};

export const MoleculeAnimation: React.FC = () => {
  return (
    <div className="relative w-24 h-24">
      <div className="absolute inset-0 animate-spin-slow">
        <div className="w-6 h-6 bg-blue-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
        <div className="w-4 h-4 bg-purple-500 rounded-full absolute top-1/2 right-0 transform -translate-y-1/2" />
        <div className="w-5 h-5 bg-green-500 rounded-full absolute bottom-0 left-1/4 transform -translate-x-1/2" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full absolute top-1/4 left-0 transform -translate-y-1/2" />
      </div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="50%"
          stroke="#3B82F6"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="#8B5CF6"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="25%"
          y2="100%"
          stroke="#10B981"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="50%"
          y1="50%"
          x2="0"
          y2="25%"
          stroke="#F59E0B"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export const ChemistryCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}> = ({ children, className = "", icon }) => {
  return (
    <div
      className={`
      relative group p-6 rounded-2xl
      bg-gradient-to-br from-white/20 to-white/5
      backdrop-blur-md border border-white/20
      shadow-2xl hover:shadow-3xl
      transition-all duration-500
      hover:scale-105 hover:-translate-y-2
      ${className}
    `}
    >
      {/* Animated background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glow effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />

      {/* Icon floating effect */}
      {icon && (
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:animate-bounce">
          {icon}
        </div>
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const DNAHelix: React.FC = () => {
  return (
    <div className="relative w-16 h-32 mx-auto">
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse"
            style={{
              left: `${50 + 30 * Math.sin((i * Math.PI) / 4)}%`,
              top: `${i * 12.5}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <div
            key={i + 8}
            className="absolute w-2 h-2 bg-purple-500 rounded-full animate-pulse"
            style={{
              left: `${50 - 30 * Math.sin((i * Math.PI) / 4)}%`,
              top: `${i * 12.5}%`,
              animationDelay: `${i * 0.1 + 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const PeriodicElement: React.FC<{
  symbol: string;
  name: string;
  number: number;
}> = ({ symbol, name, number }) => {
  return (
    <div
      className="
      relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600
      rounded-lg text-white text-center cursor-pointer
      transition-all duration-300 hover:scale-110 hover:rotate-6
      shadow-lg hover:shadow-2xl
      group
    "
    >
      <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 p-1">
        <div className="text-xs font-bold">{number}</div>
        <div className="text-lg font-bold">{symbol}</div>
        <div className="text-xs truncate">{name}</div>
      </div>
    </div>
  );
};

export const LoadingMolecule: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-12 h-12">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-blue-500 rounded-full animate-ping"
            style={{
              left: `${50 + 40 * Math.cos((i * Math.PI) / 3)}%`,
              top: `${50 + 40 * Math.sin((i * Math.PI) / 3)}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin" />
      </div>
    </div>
  );
};
