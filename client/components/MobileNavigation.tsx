import { useState, useEffect } from "react";
import {
  X,
  Menu,
  Shield,
  Lock,
  Terminal,
  Mail,
  User,
  GraduationCap,
  Briefcase,
  FolderOpen,
  Code,
  Phone,
} from "lucide-react";
import { GlassContainer } from "@/components/ModernUIComponents";

interface MobileNavigationProps {
  onNavigate: (section: string) => void;
}

export const MobileNavigation = ({ onNavigate }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navigationItems = [
    { id: "about", label: "À propos", icon: User },
    { id: "education", label: "Formation", icon: GraduationCap },
    { id: "experience", label: "Expérience", icon: Briefcase },
    { id: "projects", label: "Projets", icon: FolderOpen },
    { id: "skills", label: "Compétences", icon: Code },
    { id: "contact", label: "Contact", icon: Phone },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !(event.target as Element).closest(".mobile-nav-container")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Observe sections for active state
  useEffect(() => {
    const observers = navigationItems.map((item) => {
      const element = document.getElementById(item.id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.id);
          }
        },
        { threshold: 0.3 },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          md:hidden fixed top-4 left-4 z-[70] w-12 h-12 rounded-xl
          bg-gradient-to-r from-green-500 to-blue-600
          shadow-lg shadow-green-500/50
          flex items-center justify-center
          text-white transition-all duration-300
          hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50
          ${isOpen ? "bg-gradient-to-r from-red-600 to-orange-600" : ""}
        `}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm">
          <div className="mobile-nav-container">
            {/* Menu Content */}
            <GlassContainer
              className="fixed top-20 left-4 right-4 bottom-4 p-6 overflow-y-auto"
              blur="xl"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div>
                  <h2 className="text-xl font-medium text-white">
                    Euloge Junior
                  </h2>
                  <p className="text-sm text-green-400">
                    Aspirant Cybersécurité
                  </p>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-3">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={`
                        w-full flex items-center gap-4 p-4 rounded-xl
                        transition-all duration-300 text-left
                        ${
                          isActive
                            ? "bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 text-green-200"
                            : "hover:bg-white/5 text-gray-300 hover:text-white"
                        }
                      `}
                    >
                      <div
                        className={`
                        w-10 h-10 rounded-lg flex items-center justify-center
                        ${
                          isActive
                            ? "bg-gradient-to-r from-green-500 to-blue-600"
                            : "bg-white/10"
                        }
                      `}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => handleNavigation("contact")}
                  className="w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Me contacter
                </button>

                <a
                  href="https://github.com/eulogep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 p-4 bg-white/10 rounded-xl text-gray-300 font-medium transition-all duration-300 hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <Terminal className="w-5 h-5" />
                  GitHub
                </a>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                  <Lock className="w-4 h-4" />
                  <span>Portfolio sécurisé</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
            </GlassContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
