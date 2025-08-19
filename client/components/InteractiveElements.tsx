import { useState, useEffect, useRef } from "react";
import { Mouse, ArrowUp, Zap, Sparkles, Activity } from "lucide-react";

// Curseur personnalisé avec effet de suivi
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        typeof target.matches === "function" &&
        target.matches("button, a, [data-interactive]")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        typeof target.matches === "function" &&
        target.matches("button, a, [data-interactive]")
      ) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] hidden lg:block">
      {/* Main cursor */}
      <div
        className={`
          absolute w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full
          transition-all duration-200 ease-out mix-blend-difference
          ${isHovering ? "scale-150" : "scale-100"}
          ${isClicking ? "scale-75" : ""}
        `}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `translate3d(0, 0, 0) scale(${isHovering ? 1.5 : 1}) ${isClicking ? "scale(0.75)" : ""}`,
        }}
      />

      {/* Cursor trail */}
      <div
        className="absolute w-2 h-2 bg-green-400/50 rounded-full transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
    </div>
  );
};

// Bouton "Back to top" avec animation
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full
        bg-gradient-to-r from-green-500 to-blue-600
        shadow-lg shadow-green-500/50
        flex items-center justify-center
        text-white transition-all duration-500
        hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
      `}
      aria-label="Retour en haut"
    >
      <ArrowUp className="w-6 h-6" />
      <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping" />
    </button>
  );
};

// Indicateur de progression de lecture
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
      <div
        className="h-full bg-gradient-to-r from-green-500 to-blue-600 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute top-0 right-0 w-8 h-1 bg-green-400/50 animate-pulse"
        style={{ transform: `translateX(${progress > 95 ? "0" : "100%"})` }}
      />
    </div>
  );
};

// Particules interactives de fond
const InteractiveParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      color: string;
    }>
  >([]);

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
    const colors = ["#10b981", "#3b82f6", "#8b5cf6", "#06b6d4"];
    for (let i = 0; i < 50; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
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

// Indicateur de vitesse de connexion
const ConnectionSpeed = () => {
  const [speed, setSpeed] = useState<"fast" | "medium" | "slow">("fast");
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Simulate speed detection based on load time
    const startTime = performance.now();
    const img = new Image();
    img.onload = () => {
      const loadTime = performance.now() - startTime;
      if (loadTime < 100) setSpeed("fast");
      else if (loadTime < 500) setSpeed("medium");
      else setSpeed("slow");
    };
    img.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAwMDAiLz48L3N2Zz4=";

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const getSpeedColor = () => {
    if (!isOnline) return "red";
    switch (speed) {
      case "fast":
        return "green";
      case "medium":
        return "yellow";
      case "slow":
        return "orange";
      default:
        return "gray";
    }
  };

  const getSpeedIcon = () => {
    if (!isOnline) return <Activity className="w-3 h-3" />;
    switch (speed) {
      case "fast":
        return <Zap className="w-3 h-3" />;
      case "medium":
        return <Activity className="w-3 h-3" />;
      case "slow":
        return <Mouse className="w-3 h-3" />;
      default:
        return <Activity className="w-3 h-3" />;
    }
  };

  const getSpeedLabel = () => {
    if (!isOnline) return "Hors ligne";
    switch (speed) {
      case "fast":
        return "Connexion rapide";
      case "medium":
        return "Connexion modérée";
      case "slow":
        return "Connexion lente";
      default:
        return "Connexion";
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
      <div
        className={`
        flex items-center gap-2 px-3 py-2 rounded-full
        bg-black/50 backdrop-blur-sm border border-white/10
        text-xs text-${getSpeedColor()}-300
      `}
      >
        <div className={`text-${getSpeedColor()}-400`}>{getSpeedIcon()}</div>
        <span>{getSpeedLabel()}</span>
        <div
          className={`w-2 h-2 bg-${getSpeedColor()}-400 rounded-full animate-pulse`}
        />
      </div>
    </div>
  );
};

// Effet de typing avancé avec curseur clignotant
const AdvancedTypingEffect = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  className = "",
}: {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentFullText.length) {
            setCurrentText(
              currentFullText.substring(0, currentText.length + 1),
            );
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentIndex,
    isDeleting,
    texts,
    speed,
    deleteSpeed,
    pauseDuration,
  ]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span
        className={`inline-block w-0.5 h-5 bg-current ml-1 ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}
      />
    </span>
  );
};

export {
  CustomCursor,
  BackToTopButton,
  ReadingProgress,
  InteractiveParticles,
  ConnectionSpeed,
  AdvancedTypingEffect,
};
