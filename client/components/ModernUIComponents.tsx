import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Mail,
  Phone,
  Shield,
  Lock,
  Terminal,
  Code,
  Eye,
  Zap,
} from "lucide-react";

// Modern Glowing Button inspired by uiverse.io
export const GlowButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
}> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantClasses = {
    primary: "from-blue-500 to-purple-600 shadow-blue-500/50",
    secondary: "from-green-500 to-cyan-600 shadow-green-500/50",
    success: "from-emerald-500 to-teal-600 shadow-emerald-500/50",
    danger: "from-red-500 to-pink-600 shadow-red-500/50",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group overflow-hidden rounded-full font-medium
        bg-gradient-to-r ${variantClasses[variant]}
        transition-all duration-500 transform
        hover:scale-105 hover:shadow-2xl hover:${variantClasses[variant]}
        active:scale-95
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {/* Shine effect */}
      <div
        className={`
        absolute inset-0 w-full h-full
        bg-gradient-to-r from-transparent via-white to-transparent
        opacity-0 group-hover:opacity-30
        transform -skew-x-12 -translate-x-full group-hover:translate-x-full
        transition-transform duration-1000 ease-out
      `}
      />

      {/* Pulse effect */}
      <div
        className={`
        absolute inset-0 rounded-full
        bg-gradient-to-r ${variantClasses[variant]}
        opacity-0 group-hover:opacity-20
        animate-pulse
      `}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 text-white">
        {children}
      </span>

      {/* Ripple effect */}
      {isHovered && (
        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
      )}
    </button>
  );
};

// Animated Card with advanced hover effects
export const ModernCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}> = ({ children, className = "", glowColor = "blue", icon, onClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`
        relative group cursor-pointer
        bg-gradient-to-br from-gray-900/80 to-gray-800/40
        backdrop-blur-xl border border-white/10
        rounded-2xl overflow-hidden
        transition-all duration-500 transform
        hover:scale-[1.02] hover:-translate-y-2
        hover:shadow-2xl hover:shadow-${glowColor}-500/20
        ${className}
      `}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 p-[1px] rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Mouse follow gradient */}
      <div
        className={`
          absolute w-32 h-32 rounded-full
          bg-gradient-radial from-${glowColor}-500/20 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300 pointer-events-none
          transform -translate-x-1/2 -translate-y-1/2
        `}
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      />

      {/* Floating icon */}
      {icon && (
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:animate-bounce transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 p-6">{children}</div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
    </div>
  );
};

// Typing Animation Component
export const TypingAnimation: React.FC<{
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
}> = ({ text, speed = 100, className = "", cursor = true }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  useEffect(() => {
    if (cursor) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [cursor]);

  return (
    <span className={className}>
      {displayText}
      {cursor && (
        <span
          className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}
        >
          |
        </span>
      )}
    </span>
  );
};

// Modern Loading Spinner
export const ModernLoader: React.FC<{
  size?: "sm" | "md" | "lg";
  color?: string;
}> = ({ size = "md", color = "blue" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  return (
    <div className={`relative ${sizeClasses[size]}`}>
      {/* Outer ring */}
      <div
        className={`
        absolute inset-0 rounded-full border-2 border-${color}-500/30
        animate-spin
      `}
        style={{ animationDuration: "1s" }}
      />

      {/* Inner ring */}
      <div
        className={`
        absolute inset-1 rounded-full border-2 border-${color}-400/50
        animate-spin
      `}
        style={{ animationDuration: "0.8s", animationDirection: "reverse" }}
      />

      {/* Center dot */}
      <div
        className={`
        absolute top-1/2 left-1/2 w-2 h-2 
        bg-${color}-500 rounded-full
        transform -translate-x-1/2 -translate-y-1/2
        animate-pulse
      `}
      />
    </div>
  );
};

// Progress Bar with animation
export const AnimatedProgress: React.FC<{
  progress: number;
  label?: string;
  color?: string;
  showPercentage?: boolean;
}> = ({ progress, label, color = "blue", showPercentage = true }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-300">{label}</span>
          {showPercentage && (
            <span className="text-sm text-gray-400">
              {Math.round(animatedProgress)}%
            </span>
          )}
        </div>
      )}
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className={`
            h-full bg-gradient-to-r from-${color}-500 to-${color}-400
            transition-all duration-1000 ease-out
            relative overflow-hidden
          `}
          style={{ width: `${animatedProgress}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
};

// Floating Action Button
export const FloatingActionButton: React.FC<{
  icon: React.ReactNode;
  onClick?: () => void;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  color?: string;
}> = ({ icon, onClick, position = "bottom-right", color = "blue" }) => {
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  return (
    <button
      onClick={onClick}
      className={`
        fixed ${positionClasses[position]} z-50
        w-14 h-14 rounded-full
        bg-gradient-to-r from-${color}-500 to-${color}-600
        shadow-lg shadow-${color}-500/50
        flex items-center justify-center
        text-white transition-all duration-300
        hover:scale-110 hover:shadow-2xl hover:shadow-${color}-500/50
        active:scale-95
        group
      `}
    >
      <div className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Pulse effect */}
      <div
        className={`
        absolute inset-0 rounded-full
        bg-${color}-500 opacity-0 group-hover:opacity-30
        animate-ping
      `}
      />
    </button>
  );
};

// Terminal-like Text Effect
export const TerminalText: React.FC<{
  lines: string[];
  speed?: number;
  className?: string;
}> = ({ lines, speed = 50, className = "" }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const currentLine = lines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        const timeout = setTimeout(() => {
          setCurrentText((prev) => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Line completed, move to next
        const timeout = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, currentText]);
          setCurrentText("");
          setCurrentCharIndex(0);
          setCurrentLineIndex((prev) => prev + 1);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentLineIndex, currentCharIndex, lines, speed, currentText]);

  return (
    <div className={`font-mono text-sm ${className}`}>
      {displayedLines.map((line, index) => (
        <div key={index} className="text-green-400">
          <span className="text-gray-500">$ </span>
          {line}
        </div>
      ))}
      {currentLineIndex < lines.length && (
        <div className="text-green-400">
          <span className="text-gray-500">$ </span>
          {currentText}
          <span className="animate-pulse">_</span>
        </div>
      )}
    </div>
  );
};

// Glassmorphism Container
export const GlassContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  blur?: "sm" | "md" | "lg" | "xl";
  opacity?: number;
}> = ({ children, className = "", blur = "md", opacity = 0.1 }) => {
  const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
  };

  return (
    <div
      className={`
      ${blurClasses[blur]}
      bg-white/10 border border-white/20
      rounded-2xl shadow-2xl
      ${className}
    `}
      style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}
    >
      {children}
    </div>
  );
};

// Status Indicator
export const StatusIndicator: React.FC<{
  status: "online" | "offline" | "busy" | "away";
  animated?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
}> = ({ status, animated = true, size = "md", label }) => {
  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-500",
    busy: "bg-red-500",
    away: "bg-yellow-500",
  };

  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div
          className={`
          ${sizeClasses[size]} ${statusColors[status]} rounded-full
          ${animated ? "animate-pulse" : ""}
        `}
        />
        {animated && status === "online" && (
          <div
            className={`
            absolute inset-0 ${statusColors[status]} rounded-full
            animate-ping opacity-75
          `}
          />
        )}
      </div>
      {label && (
        <span className="text-sm text-gray-300 capitalize">{status}</span>
      )}
    </div>
  );
};

// Download Button with progress
export const DownloadButton: React.FC<{
  filename: string;
  url: string;
  className?: string;
}> = ({ filename, url, className = "" }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownload = async () => {
    setIsDownloading(true);
    setProgress(0);

    // Simulate download progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);

          // Actual download
          const link = document.createElement("a");
          link.href = url;
          link.download = filename;
          link.target = "_blank";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          return 0;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <GlowButton
      onClick={handleDownload}
      variant="success"
      className={`relative overflow-hidden ${className}`}
    >
      {isDownloading ? (
        <>
          <ModernLoader size="sm" color="white" />
          <span>Téléchargement... {progress}%</span>
        </>
      ) : (
        <>
          <Download className="w-5 h-5" />
          <span>Télécharger CV</span>
        </>
      )}

      {isDownloading && (
        <div
          className="absolute bottom-0 left-0 h-1 bg-white/30 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      )}
    </GlowButton>
  );
};
