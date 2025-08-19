import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Briefcase,
  Languages,
  Heart,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  Lightbulb,
  Shield,
  Lock,
  Terminal,
  Code,
  Database,
  Network,
  ArrowRight,
  Download,
  ExternalLink,
  ChevronDown,
  Brain,
  Target,
  Github,
  Linkedin,
  Globe,
  Bug,
  Key,
  Server,
  Eye,
  AlertTriangle,
  Zap,
  Monitor,
  Wifi,
  Settings,
  Activity,
  Music,
  Dumbbell,
  Theater,
  Gamepad2,
  Film,
  BookOpen,
  Sparkles,
  Star,
  Palette,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  NetworkStructure,
  HackingTerminal,
  SecurityMetrics,
  CyberToolsAnimation,
  CyberBackground,
  VulnerabilityScanner,
  EncryptionAnimation,
} from "@/components/CyberSecurityAnimations";
import {
  GlowButton,
  ModernCard,
  TypingAnimation,
  ModernLoader,
  AnimatedProgress,
  FloatingActionButton,
  TerminalText,
  GlassContainer,
  StatusIndicator,
  DownloadButton,
} from "@/components/ModernUIComponents";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const [showTerminal, setShowTerminal] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const terminalLines = [
    "whoami",
    "euloge@cybersec",
    "nmap -sS target.com",
    "Starting Nmap scan...",
    "python exploit.py",
    "Access granted ✓",
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CyberBackground />
      <NetworkStructure />
      <HackingTerminal />
      <VulnerabilityScanner />
      <EncryptionAnimation />

      {/* Floating Action Button */}
      <FloatingActionButton
        icon={<Terminal className="w-6 h-6" />}
        onClick={() => setShowTerminal(!showTerminal)}
        color="green"
      />

      {/* Floating Terminal */}
      {showTerminal && (
        <div className="fixed bottom-20 right-6 z-40">
          <GlassContainer className="w-80 p-4" blur="lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-sm ml-2">
                  cyber-terminal
                </span>
              </div>
              <StatusIndicator status="online" animated size="sm" />
            </div>
            <TerminalText lines={terminalLines} speed={50} />
          </GlassContainer>
        </div>
      )}

      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-blue-900/20 to-purple-900/30" />
        <div
          className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: "translate3d(0, 0, 0)",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${navCollapsed ? "-translate-y-full" : "translate-y-0"}`}
      >
        <GlassContainer
          blur="xl"
          className="mx-6 mt-4 px-6 py-4"
          opacity={0.05}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center relative">
                <Shield className="w-6 h-6 text-white animate-pulse" />
                <div className="absolute inset-0 bg-green-400/20 rounded-lg animate-ping" />
              </div>
              <div>
                <TypingAnimation
                  text="EULOGE JUNIOR"
                  speed={150}
                  className="text-xl font-light tracking-wider opacity-30"
                  cursor={false}
                />
                <div className="opacity-30">
                  <StatusIndicator status="online" animated size="sm" label />
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                "about",
                "education",
                "experience",
                "projects",
                "skills",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 capitalize tracking-wide group"
                >
                  {item === "about"
                    ? "À propos"
                    : item === "education"
                      ? "Formation"
                      : item === "experience"
                        ? "Expérience"
                        : item === "projects"
                          ? "Projets"
                          : item === "skills"
                            ? "Compétences"
                            : "Contact"}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-blue-600 group-hover:w-full transition-all duration-300" />

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </button>
              ))}
            </div>
          </div>
        </GlassContainer>
      </nav>

      {/* Navigation Toggle Button */}
      <button
        onClick={() => setNavCollapsed(!navCollapsed)}
        className={`
          fixed top-4 right-4 z-[60] w-12 h-12 rounded-full
          bg-gradient-to-r from-green-500 to-blue-600
          shadow-lg shadow-green-500/50
          flex items-center justify-center
          text-white transition-all duration-300
          hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50
          ${navCollapsed ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
        `}
        title={
          navCollapsed ? "Afficher la navigation" : "Masquer la navigation"
        }
      >
        <ChevronDown
          className={`w-6 h-6 transition-transform duration-300 ${navCollapsed ? "rotate-180" : ""}`}
        />
      </button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Profile Image with Advanced Cyber Effects */}
          <div className="relative mb-12 group">
            <div className="relative w-48 h-48 mx-auto">
              {/* Animated scanning rings */}
              <div
                className="absolute inset-0 rounded-full border border-green-500/30 animate-ping"
                style={{ animationDuration: "3s" }}
              />
              <div
                className="absolute inset-2 rounded-full border border-blue-500/30 animate-ping"
                style={{ animationDuration: "2s", animationDelay: "0.5s" }}
              />
              <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-pulse" />

              {/* Main profile container */}
              <div className="absolute inset-6 w-36 h-36 rounded-full border-2 border-white/20 shadow-2xl group-hover:scale-110 transition-all duration-700 overflow-hidden">
                {/* Profile photo */}
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb763a074828b443491d7e3e64f46617d%2Fbb7bdfbef8144b53b1dd19ca04900b26?format=webp&width=800"
                  alt="Euloge Junior Mabiala - Aspirant en Cyber-sécurité"
                  className="w-full h-full object-cover object-center rounded-full relative z-10"
                />

                {/* Cyber overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Scanning lines effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-green-400 animate-pulse" />
                  <div
                    className="absolute top-2/4 left-0 right-0 h-0.5 bg-blue-400 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div
                    className="absolute top-3/4 left-0 right-0 h-0.5 bg-purple-400 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                </div>

                {/* Animated particles overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-green-400 rounded-full animate-ping"
                      style={{
                        left: `${15 + (i % 4) * 25}%`,
                        top: `${15 + Math.floor(i / 4) * 35}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: "2s",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating cyber icons with enhanced animations */}
              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-400 rounded-full shadow-lg animate-bounce flex items-center justify-center"
                style={{ animationDelay: "0s" }}
              >
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full shadow-lg animate-bounce flex items-center justify-center"
                style={{ animationDelay: "1s" }}
              >
                <Lock className="w-4 h-4 text-white" />
              </div>
              <div
                className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-400 rounded-full shadow-lg animate-bounce flex items-center justify-center"
                style={{ animationDelay: "2s" }}
              >
                <Bug className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Name and Title with Enhanced Typography */}
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-wider leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-green-200 to-blue-200">
                EULOGE JUNIOR
              </span>
              <span className="block text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 font-thin tracking-widest">
                MABIALA
              </span>
            </h1>

            <div className="flex items-center justify-center space-x-6 text-xl text-gray-300">
              <div className="flex items-center gap-2">
                <Terminal className="w-6 h-6 text-green-400 animate-pulse" />
                <TypingAnimation
                  text="Aspirant en Cyber-sécurité"
                  speed={100}
                  className="font-light tracking-wide"
                />
              </div>
              <Shield className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Étudiant-ingénieur en informatique passionné par la cybersécurité,
              l'optimisation logicielle et la défense numérique. Proactif,
              curieux et engagé dans la protection des systèmes d'information.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <GlowButton
              onClick={() => scrollToSection("contact")}
              variant="primary"
              size="lg"
            >
              <Mail className="w-5 h-5" />
              Me contacter
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </GlowButton>

            <DownloadButton filename="CV_Euloge_Junior_Mabiala.pdf" url="#" />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-ping"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section with Modern Cards */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  À Propos
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-8" />
              </div>

              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Étudiant-ingénieur à l'ESIEA Paris, spécialisé en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-medium">
                  cybersécurité et développement logiciel
                </span>
                . Mon parcours académique rigoureux et ma passion pour les
                nouvelles technologies me poussent vers l'excellence dans la
                protection des systèmes numériques.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Proactif et curieux, j'apprécie résoudre des problèmes
                complexes, travailler en équipe et apprendre en continu. Mon
                objectif est de devenir un expert en cybersécurité capable de
                défendre notre infrastructure numérique contre les menaces
                émergentes.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <ModernCard
                  glowColor="green"
                  icon={<Shield className="w-4 h-4" />}
                  className="p-6"
                >
                  <Shield className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-lg font-medium text-green-200 mb-2">
                    Sécurité Offensive
                  </h3>
                  <p className="text-sm text-gray-400 font-light">
                    Penetration testing et analyse de vulnérabilités
                  </p>
                  <AnimatedProgress progress={75} color="green" />
                </ModernCard>

                <ModernCard
                  glowColor="blue"
                  icon={<Lock className="w-4 h-4" />}
                  className="p-6"
                >
                  <Lock className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-medium text-blue-200 mb-2">
                    Sécurité Défensive
                  </h3>
                  <p className="text-sm text-gray-400 font-light">
                    Protection des systèmes et détection d'intrusions
                  </p>
                  <AnimatedProgress progress={80} color="blue" />
                </ModernCard>
              </div>
            </div>

            <div className="relative">
              {/* Enhanced Contact Card */}
              <GlassContainer className="p-8" blur="xl">
                <div className="flex items-center gap-3 mb-8">
                  <h3 className="text-2xl font-light text-gray-200">
                    Informations
                  </h3>
                  <StatusIndicator status="online" animated />
                </div>

                <div className="space-y-6">
                  <ModernCard className="p-4" glowColor="green">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-400 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-light">
                          Adresse
                        </p>
                        <p className="text-gray-200">Paris, France</p>
                      </div>
                    </div>
                  </ModernCard>

                  <ModernCard className="p-4" glowColor="blue">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-400 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-light">
                          Téléphone
                        </p>
                        <p className="text-gray-200">07 60 83 09 31</p>
                      </div>
                    </div>
                  </ModernCard>

                  <ModernCard className="p-4" glowColor="purple">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-light">
                          Email
                        </p>
                        <p className="text-gray-200 text-sm">
                          mabialaeulogejunior@gmail.com
                        </p>
                      </div>
                    </div>
                  </ModernCard>

                  <ModernCard className="p-4" glowColor="orange">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center">
                        <Github className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-light">
                          GitHub
                        </p>
                        <p className="text-gray-200">github.com/eulogep</p>
                      </div>
                    </div>
                  </ModernCard>
                </div>
              </GlassContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Formation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-8" />
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Un parcours académique orienté vers l'excellence en cybersécurité
            </p>
          </div>

          <div className="space-y-8">
            {/* Current Education */}
            <ModernCard
              glowColor="green"
              icon={<GraduationCap className="w-4 h-4" />}
              className="p-8"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium text-green-200 mb-2">
                    Cycle Ingénieur - Cybersécurité & Développement logiciel
                  </h3>
                  <p className="text-lg text-gray-300 font-light">
                    ESIEA, Paris
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2 text-sm font-light">
                    Depuis janvier 2023
                  </Badge>
                  <StatusIndicator status="online" animated />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed font-light mb-4">
                Formation d'ingénieur spécialisée en cybersécurité et
                développement logiciel. Acquisition de compétences avancées en
                sécurité informatique, cryptographie, analyse de vulnérabilités
                et développement sécurisé.
              </p>
              <AnimatedProgress
                progress={85}
                label="Progression"
                color="green"
              />
            </ModernCard>

            {/* Previous Education */}
            <div className="grid md:grid-cols-3 gap-6">
              <ModernCard glowColor="blue" className="p-6">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-medium text-blue-200 mb-2">
                      Classe préparatoire PSI
                    </h3>
                    <p className="text-gray-300 font-light text-sm mb-4">
                      Lycée Jean-Jaurès, Saint-Denis
                    </p>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1 text-xs w-fit">
                    Jan 2022 - Jan 2023
                  </Badge>
                </div>
              </ModernCard>

              <ModernCard glowColor="purple" className="p-6">
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-medium text-purple-200 mb-2">
                      Classe préparatoire MPSI
                    </h3>
                    <p className="text-gray-300 font-light text-sm mb-4">
                      Lycée Paul Éluard
                    </p>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1 text-xs w-fit">
                    Jan 2021 - Jan 2022
                  </Badge>
                </div>
              </ModernCard>

              <ModernCard
                glowColor="yellow"
                icon={<Award className="w-4 h-4" />}
                className="p-6"
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-medium text-yellow-200 mb-2">
                      Baccalauréat Général
                    </h3>
                    <p className="text-gray-300 font-light text-sm mb-2">
                      Lycée Colbert, Paris
                    </p>
                    <p className="text-xs text-gray-400 mb-4">
                      Mention Bien - Math & Physique-Chimie
                    </p>
                  </div>
                  <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 px-3 py-1 text-xs w-fit">
                    Jan 2020 - Jan 2021
                  </Badge>
                </div>
              </ModernCard>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Expérience Professionnelle
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8" />
          </div>

          <div className="space-y-8">
            <ModernCard
              glowColor="blue"
              icon={<Briefcase className="w-4 h-4" />}
              className="p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-400 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-2">
                    Sept 2024 - Jan 2025
                  </Badge>
                  <h3 className="text-xl font-medium text-blue-200">
                    Équipier Polyvalent - Five Guys, Levallois-Perret
                  </h3>
                </div>
              </div>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  Gestion des commandes et service client en environnement
                  rapide
                </p>
                <p className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  Travail en équipe et respect des normes d'hygiène strictes
                </p>
                <p className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  Développement de la capacité à travailler sous pression
                </p>
              </div>
            </ModernCard>

            <ModernCard
              glowColor="green"
              icon={<Code className="w-4 h-4" />}
              className="p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-400 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 mb-2">
                    Déc 2021 - Mai 2022
                  </Badge>
                  <h3 className="text-xl font-medium text-green-200">
                    Assistant de Projet - Événement "Essaimées", Saint-Denis
                  </h3>
                </div>
              </div>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  Programmation et automatisation avec LabVIEW
                </p>
                <p className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  Modification et calibration de systèmes robotiques
                </p>
                <p className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                  Collaboration avec ingénieurs et artistes dans un projet
                  innovant
                </p>
              </div>
            </ModernCard>

            <ModernCard
              glowColor="purple"
              icon={<Database className="w-4 h-4" />}
              className="p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-2">
                    Juil - Août 2019
                  </Badge>
                  <h3 className="text-xl font-medium text-purple-200">
                    Opérateur de saisie - Cyber Café du Centre, Brazzaville
                  </h3>
                </div>
              </div>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  Utilisation d'outils bureautiques (Microsoft Office/Excel)
                </p>
                <p className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  Saisie de données avec rigueur et précision
                </p>
                <p className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                  Première expérience professionnelle dans le domaine
                  informatique
                </p>
              </div>
            </ModernCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-32 px-6 bg-gradient-to-b from-gray-900/20 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Projets GitHub
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mx-auto mb-8" />
            <SecurityMetrics />
            <CyberToolsAnimation />
          </div>

          {/* Demo Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-light mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                🚀 Testez mes démonstrations en direct
              </h3>
              <p className="text-gray-400 font-light max-w-2xl mx-auto">
                Découvrez mes projets cybersécurité en action avec ces démos
                interactives
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* CyberSentinel AI Demo */}
              <ModernCard
                glowColor="cyan"
                icon={<Eye className="w-4 h-4" />}
                className="p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl flex items-center justify-center animate-pulse">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mb-2 animate-pulse">
                      DÉMO LIVE
                    </Badge>
                    <h3 className="text-xl font-medium text-cyan-200">
                      CyberSentinel AI
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 font-light mb-6">
                  Système de détection de menaces en temps réel alimenté par
                  l'IA. Interface interactive avec tableaux de bord et alertes.
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <StatusIndicator status="online" animated />
                  <span className="text-xs text-green-300">
                    Démo fonctionnelle
                  </span>
                </div>
                <GlowButton
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://classy-raindrop-17eb77.netlify.app",
                      "_blank",
                    )
                  }
                  className="w-full"
                >
                  <Eye className="w-5 h-5" />
                  Tester CyberSentinel AI
                  <ExternalLink className="w-4 h-4" />
                </GlowButton>
              </ModernCard>

              {/* Brute Force Simulator Demo */}
              <ModernCard
                glowColor="red"
                icon={<AlertTriangle className="w-4 h-4" />}
                className="p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-400 rounded-xl flex items-center justify-center animate-pulse">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <Badge className="bg-red-500/20 text-red-300 border-red-500/30 mb-2 animate-pulse">
                      DÉMO ÉDUCATIVE
                    </Badge>
                    <h3 className="text-xl font-medium text-red-200">
                      Simulateur Brute Force
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 font-light mb-6">
                  Démonstration interactive de la sécurité des mots de passe.
                  Analyse en temps réel et visualisations éducatives.
                </p>
                <div className="flex items-center gap-3 mb-6">
                  <StatusIndicator status="online" animated />
                  <span className="text-xs text-green-300">Démo sécurisée</span>
                </div>
                <GlowButton
                  variant="danger"
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://dancing-trifle-bd9ab5.netlify.app",
                      "_blank",
                    )
                  }
                  className="w-full"
                >
                  <AlertTriangle className="w-5 h-5" />
                  Tester le Simulateur
                  <ExternalLink className="w-4 h-4" />
                </GlowButton>
              </ModernCard>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full border border-white/10">
                <Monitor className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">
                  Démos hébergées sur Netlify
                </span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BruteForce Tool */}
            <ModernCard
              glowColor="red"
              icon={<Bug className="w-4 h-4" />}
              className="p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-400 rounded-xl flex items-center justify-center">
                  <Bug className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                  2025 - Sécurité
                </Badge>
              </div>
              <h3 className="text-xl font-medium text-red-200 mb-4">
                BruteForce Tool
              </h3>
              <p className="text-gray-400 font-light mb-6">
                Outil de test de sécurité éducatif avec interface React/Tailwind
                et backend Flask. Supporte les attaques personnalisables, le
                craquage GPU avec Hashcat.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  Python
                </Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  Flask
                </Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  React
                </Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  Hashcat
                </Badge>
              </div>
              <GlowButton
                variant="danger"
                size="sm"
                onClick={() =>
                  window.open("https://github.com/eulogep", "_blank")
                }
              >
                <Github className="w-4 h-4" />
                Voir le projet
                <ExternalLink className="w-3 h-3" />
              </GlowButton>
            </ModernCard>

            {/* CyberSentinel AI */}
            <ModernCard
              glowColor="blue"
              icon={<Eye className="w-4 h-4" />}
              className="p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  2025 - IA & Sécurité
                </Badge>
              </div>
              <h3 className="text-xl font-medium text-blue-200 mb-4">
                CyberSentinel AI
              </h3>
              <p className="text-gray-400 font-light mb-6">
                Système de détection de menaces utilisant l'IA avec GPT-4.
                Capture réseau temps réel, remédiation automatisée et tableaux
                de bord React.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  Python
                </Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  FastAPI
                </Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  GPT-4
                </Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  PostgreSQL
                </Badge>
              </div>
              <GlowButton
                variant="primary"
                size="sm"
                onClick={() =>
                  window.open("https://github.com/eulogep", "_blank")
                }
              >
                <Github className="w-4 h-4" />
                Voir le projet
                <ExternalLink className="w-3 h-3" />
              </GlowButton>
            </ModernCard>

            {/* Password Simulator */}
            <ModernCard
              glowColor="green"
              icon={<Key className="w-4 h-4" />}
              className="p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  2024 - Éducation
                </Badge>
              </div>
              <h3 className="text-xl font-medium text-green-200 mb-4">
                Simulateur d'Attaque Brute Force
              </h3>
              <p className="text-gray-400 font-light mb-6">
                Simulateur interactif de sécurité des mots de passe. Analyse
                détaillée, simulations d'attaques et visualisations éducatives.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  HTML/CSS
                </Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  JavaScript
                </Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  Education
                </Badge>
              </div>
              <GlowButton
                variant="secondary"
                size="sm"
                onClick={() =>
                  window.open("https://github.com/eulogep", "_blank")
                }
              >
                <Github className="w-4 h-4" />
                Voir le projet
                <ExternalLink className="w-3 h-3" />
              </GlowButton>
            </ModernCard>

            {/* DEX Swap App */}
            <ModernCard
              glowColor="purple"
              icon={<Globe className="w-4 h-4" />}
              className="p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  2024 - Web3
                </Badge>
              </div>
              <h3 className="text-xl font-medium text-purple-200 mb-4">
                DEX Swap App
              </h3>
              <p className="text-gray-400 font-light mb-6">
                Application décentralisée d'échange de cryptomonnaies via
                Uniswap v3. Interface glassmorphism avec React 18 et intégration
                MetaMask.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  React 18
                </Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  Ethers.js
                </Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  Uniswap
                </Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">
                  Web3
                </Badge>
              </div>
              <GlowButton
                variant="primary"
                size="sm"
                onClick={() =>
                  window.open("https://github.com/eulogep", "_blank")
                }
              >
                <Github className="w-4 h-4" />
                Voir le projet
                <ExternalLink className="w-3 h-3" />
              </GlowButton>
            </ModernCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-32 px-6 bg-gradient-to-b from-gray-900/20 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Comp��tences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mx-auto mb-8" />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Programming Skills */}
            <GlassContainer className="p-6" blur="md">
              <h3 className="text-2xl font-light text-green-200 mb-8 flex items-center gap-3">
                <Terminal className="w-6 h-6 text-green-400" />
                Programmation
              </h3>
              <div className="space-y-4">
                {[
                  { skill: "Python", level: 90 },
                  { skill: "Java", level: 70 },
                  { skill: "HTML/CSS", level: 85 },
                  { skill: "JavaScript", level: 75 },
                  { skill: "SQL", level: 80 },
                  { skill: "Bash", level: 65 },
                ].map(({ skill, level }) => (
                  <div key={skill}>
                    <AnimatedProgress
                      progress={level}
                      label={skill}
                      color="green"
                      showPercentage={false}
                    />
                  </div>
                ))}
              </div>
            </GlassContainer>

            {/* Cybersecurity Skills */}
            <GlassContainer className="p-6" blur="md">
              <h3 className="text-2xl font-light text-red-200 mb-8 flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-400" />
                Cybersécurité
              </h3>
              <div className="space-y-4">
                {[
                  { skill: "Pentesting", level: 75 },
                  { skill: "Cryptographie", level: 80 },
                  { skill: "Analyse vuln.", level: 70 },
                  { skill: "Réseaux", level: 85 },
                  { skill: "OSINT", level: 65 },
                  { skill: "Forensics", level: 60 },
                ].map(({ skill, level }) => (
                  <div key={skill}>
                    <AnimatedProgress
                      progress={level}
                      label={skill}
                      color="red"
                      showPercentage={false}
                    />
                  </div>
                ))}
              </div>
            </GlassContainer>

            {/* Languages */}
            <GlassContainer className="p-6" blur="md">
              <h3 className="text-2xl font-light text-blue-200 mb-8 flex items-center gap-3">
                <Languages className="w-6 h-6 text-blue-400" />
                Langues
              </h3>
              <div className="space-y-6">
                {[
                  {
                    lang: "Français",
                    level: "Courant",
                    color: "blue",
                    progress: 100,
                  },
                  {
                    lang: "Anglais",
                    level: "B2",
                    color: "purple",
                    progress: 75,
                  },
                  {
                    lang: "Espagnol",
                    level: "Débutant",
                    color: "pink",
                    progress: 30,
                  },
                ].map(({ lang, level, color, progress }) => (
                  <ModernCard key={lang} className="p-4" glowColor={color}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-light">{lang}</span>
                      <Badge
                        className={`bg-${color}-500/20 text-${color}-300 border-${color}-500/30 text-xs`}
                      >
                        {level}
                      </Badge>
                    </div>
                    <AnimatedProgress
                      progress={progress}
                      color={color}
                      showPercentage={false}
                    />
                  </ModernCard>
                ))}
              </div>
            </GlassContainer>

            {/* Interests */}
            <GlassContainer className="p-6" blur="md">
              <h3 className="text-2xl font-light text-purple-200 mb-8 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                Centres d'intérêt
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "Danse Hip-hop",
                    icon: Music,
                    color: "pink",
                    description: "Popping, Afro, Valse",
                  },
                  {
                    name: "Sports",
                    icon: Dumbbell,
                    color: "orange",
                    description: "Basket, Football, Judo",
                  },
                  {
                    name: "Théâtre",
                    icon: Theater,
                    color: "purple",
                    description: "Théâtre amateur, Expression",
                  },
                  {
                    name: "Culture Otaku",
                    icon: Star,
                    color: "red",
                    description: "Manga, Anime, Culture japonaise",
                  },
                  {
                    name: "Cinéma",
                    icon: Film,
                    color: "blue",
                    description: "Figuration, Découvertes",
                  },
                  {
                    name: "Lecture",
                    icon: BookOpen,
                    color: "green",
                    description: "Littérature, Technique",
                  },
                ].map(
                  (
                    { name, icon: IconComponent, color, description },
                    index,
                  ) => (
                    <ModernCard
                      key={name}
                      className="p-4 hover:scale-105 transition-all duration-300 group"
                      glowColor={color}
                    >
                      <div className="flex items-center gap-4">
                        {/* Icon with enhanced animations */}
                        <div
                          className={`
                        relative w-12 h-12 rounded-xl flex items-center justify-center
                        bg-gradient-to-br from-${color}-500/20 to-${color}-600/10
                        border border-${color}-500/30
                        group-hover:scale-110 transition-all duration-300
                        group-hover:shadow-lg group-hover:shadow-${color}-500/50
                      `}
                        >
                          <IconComponent
                            className={`w-6 h-6 text-${color}-400 group-hover:text-${color}-300 transition-colors duration-300`}
                            style={{
                              animationDelay: `${index * 0.2}s`,
                              filter: "drop-shadow(0 0 8px currentColor)",
                            }}
                          />

                          {/* Animated border */}
                          <div
                            className={`
                          absolute inset-0 rounded-xl border-2 border-${color}-400/0
                          group-hover:border-${color}-400/50 transition-all duration-300
                          animate-pulse
                        `}
                          />

                          {/* Floating particles */}
                          <div className="absolute inset-0 pointer-events-none">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className={`
                                absolute w-1 h-1 bg-${color}-400 rounded-full
                                opacity-0 group-hover:opacity-100
                                animate-ping transition-opacity duration-300
                              `}
                                style={{
                                  left: `${20 + i * 20}%`,
                                  top: `${20 + i * 20}%`,
                                  animationDelay: `${i * 0.3}s`,
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4
                            className={`
                          text-lg font-medium text-${color}-200 mb-1
                          group-hover:text-${color}-100 transition-colors duration-300
                        `}
                          >
                            {name}
                          </h4>
                          <p className="text-gray-400 text-xs font-light leading-relaxed">
                            {description}
                          </p>

                          {/* Skill level indicator */}
                          <div className="mt-2 flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`
                                w-1.5 h-1.5 rounded-full transition-all duration-300
                                ${
                                  i < 4
                                    ? `bg-${color}-400 opacity-100`
                                    : "bg-gray-600 opacity-50"
                                }
                                group-hover:animate-pulse
                              `}
                                style={{ animationDelay: `${i * 0.1}s` }}
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-2">
                              Passionné
                            </span>
                          </div>
                        </div>

                        {/* Hover indicator */}
                        <div
                          className={`
                        w-2 h-2 rounded-full bg-${color}-400
                        opacity-0 group-hover:opacity-100
                        transition-all duration-300 animate-pulse
                      `}
                        />
                      </div>

                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div
                          className={`
                        w-full h-full bg-gradient-to-br from-${color}-500/10 to-transparent
                        transform rotate-45 scale-150
                        group-hover:rotate-90 transition-transform duration-700
                      `}
                        />
                      </div>
                    </ModernCard>
                  ),
                )}
              </div>

              {/* Fun stats */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4" />
                    <span>Créativité active</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </GlassContainer>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Contact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-auto mb-8" />

          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl mx-auto">
            Intéressé par la cybersécurité ? Discutons d'opportunités de
            collaboration, de stages ou de projets innovants dans le domaine de
            la sécurité informatique.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ModernCard glowColor="green" className="p-6 text-center">
              <a href="tel:+33760830931" className="block">
                <Phone className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-green-200 mb-1">
                  Téléphone
                </h3>
                <p className="text-gray-300 font-light text-sm">
                  07 60 83 09 31
                </p>
              </a>
            </ModernCard>

            <ModernCard glowColor="blue" className="p-6 text-center">
              <a href="mailto:mabialaeulogejunior@gmail.com" className="block">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-blue-200 mb-1">
                  Email
                </h3>
                <p className="text-gray-300 font-light text-sm break-all">
                  mabialaeulogejunior@gmail.com
                </p>
              </a>
            </ModernCard>

            <ModernCard glowColor="purple" className="p-6 text-center">
              <a
                href="https://github.com/eulogep"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Github className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-purple-200 mb-1">
                  GitHub
                </h3>
                <p className="text-gray-300 font-light text-sm">
                  github.com/eulogep
                </p>
              </a>
            </ModernCard>

            <ModernCard glowColor="orange" className="p-6 text-center">
              <a
                href="https://linkedin.com/in/euloge-junior-mabiala"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Linkedin className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-orange-200 mb-1">
                  LinkedIn
                </h3>
                <p className="text-gray-300 font-light text-sm">
                  LinkedIn Profile
                </p>
              </a>
            </ModernCard>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <GlowButton
              variant="primary"
              size="lg"
              onClick={() =>
                window.open("https://github.com/eulogep", "_blank")
              }
            >
              <ExternalLink className="w-5 h-5" />
              Voir mes projets GitHub
            </GlowButton>

            <DownloadButton filename="CV_Euloge_Junior_Mabiala.pdf" url="#" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 bg-gradient-to-t from-black to-transparent">
        <GlassContainer
          className="max-w-6xl mx-auto text-center py-8"
          blur="md"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-400 font-light">
              © 2024 Euloge Junior Mabiala
            </span>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Lock className="w-4 h-4 text-white" />
            </div>
          </div>
          <p className="text-gray-500 font-light italic mb-4">
            Aspirant en Cyber-sécurité - Portfolio Interactif 2024
          </p>
          <div className="flex items-center justify-center gap-4">
            <StatusIndicator status="online" animated label />
            <span className="text-xs text-gray-400">
              Système sécurisé et opérationnel
            </span>
          </div>
        </GlassContainer>
      </footer>
    </div>
  );
}
