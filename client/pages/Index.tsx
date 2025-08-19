import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  NetworkStructure,
  HackingTerminal,
  SecurityMetrics,
  CyberToolsAnimation,
  CVDownloadButton,
  CyberBackground,
  VulnerabilityScanner,
  EncryptionAnimation,
} from "@/components/CyberSecurityAnimations";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CyberBackground />
      <NetworkStructure />
      <HackingTerminal />
      <VulnerabilityScanner />
      <EncryptionAnimation />
      
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
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield
                  className="w-6 h-6 text-white animate-pulse"
                />
              </div>
              <span className="text-xl font-light tracking-wider">
                EULOGE JUNIOR
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["about", "education", "experience", "projects", "skills", "contact"].map(
                (item) => (
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
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Profile Image with Cyber Effects */}
          <div className="relative mb-12 group">
            <div className="relative w-48 h-48 mx-auto">
              {/* Scanning rings */}
              <div
                className="absolute inset-0 rounded-full border border-green-500/30 animate-ping"
                style={{ animationDuration: "3s" }}
              />
              <div
                className="absolute inset-2 rounded-full border border-blue-500/30 animate-ping"
                style={{
                  animationDuration: "2s",
                  animationDelay: "0.5s"
                }}
              />
              <div
                className="absolute inset-4 rounded-full border border-purple-500/30 animate-pulse"
              />

              {/* Main image placeholder - will be replaced with actual photo */}
              <div className="absolute inset-6 w-36 h-36 rounded-full bg-gradient-to-br from-green-500 to-blue-600 border-2 border-white/20 shadow-2xl group-hover:scale-110 transition-all duration-700 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">EM</span>
              </div>

              {/* Floating cyber icons */}
              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-400 rounded-full shadow-lg animate-bounce"
                style={{ animationDelay: "0s" }}
              >
                <Shield className="w-4 h-4 text-white m-2" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full shadow-lg animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <Lock className="w-4 h-4 text-white m-2" />
              </div>
              <div
                className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-red-500 to-orange-400 rounded-full shadow-lg animate-bounce"
                style={{ animationDelay: "2s" }}
              >
                <Bug className="w-3 h-3 text-white m-1.5" />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-wider leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-green-200 to-blue-200">
                EULOGE JUNIOR
              </span>
              <span className="block text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 font-thin tracking-widest">
                MABIALA
              </span>
            </h1>

            <div className="flex items-center justify-center space-x-4 text-xl text-gray-300">
              <Terminal className="w-6 h-6 text-green-400 animate-pulse" />
              <span className="font-light tracking-wide">
                Aspirant en Cyber-sécurité
              </span>
              <Shield className="w-6 h-6 text-blue-400 animate-pulse" />
            </div>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Étudiant-ingénieur en informatique passionné par la cybersécurité, 
              l'optimisation logicielle et la défense numérique. Proactif, curieux 
              et engagé dans la protection des systèmes d'information.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-medium tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Me contacter
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <CVDownloadButton />
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-ping"
              style={{
                left: `${15 + i * 12}%`,
                top: `${25 + i * 8}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
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
                . Mon parcours académique rigoureux et ma passion pour les nouvelles 
                technologies me poussent vers l'excellence dans la protection des systèmes numériques.
              </p>

              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Proactif et curieux, j'apprécie résoudre des problèmes complexes, 
                travailler en équipe et apprendre en continu. Mon objectif est de 
                devenir un expert en cybersécurité capable de défendre notre 
                infrastructure numérique contre les menaces émergentes.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="group p-6 bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105">
                  <Shield className="w-8 h-8 text-green-400 mb-4 group-hover:animate-pulse" />
                  <h3 className="text-lg font-medium text-green-200 mb-2">
                    Sécurité Offensive
                  </h3>
                  <p className="text-sm text-gray-400 font-light">
                    Penetration testing et analyse de vulnérabilités
                  </p>
                </div>

                <div className="group p-6 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                  <Lock className="w-8 h-8 text-blue-400 mb-4 group-hover:animate-pulse" />
                  <h3 className="text-lg font-medium text-blue-200 mb-2">
                    Sécurité Défensive
                  </h3>
                  <p className="text-sm text-gray-400 font-light">
                    Protection des systèmes et détection d'intrusions
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Contact Card */}
              <div className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-2xl font-light mb-8 text-gray-200">
                  Informations
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light">
                        Adresse
                      </p>
                      <p className="text-gray-200">Paris, France</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light">
                        Téléphone
                      </p>
                      <p className="text-gray-200">07 60 83 09 31</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light">Email</p>
                      <p className="text-gray-200">mabialaeulogejunior@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light">GitHub</p>
                      <p className="text-gray-200">github.com/eulogep</p>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="group relative p-8 bg-gradient-to-br from-green-900/20 to-blue-900/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 hover:scale-[1.02]">
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
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed font-light">
                Formation d'ingénieur spécialisée en cybersécurité et développement logiciel. 
                Acquisition de compétences avancées en sécurité informatique, cryptographie, 
                analyse de vulnérabilités et développement sécurisé.
              </p>

              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Shield className="w-12 h-12 text-green-400" />
              </div>
            </div>

            {/* Previous Education */}
            <div className="space-y-6">
              <div className="group relative p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/10 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-blue-200 mb-1">
                      Classe préparatoire PSI
                    </h3>
                    <p className="text-gray-300 font-light">Lycée Jean-Jaurès, Saint-Denis</p>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1 text-sm">
                    Jan 2022 - Jan 2023
                  </Badge>
                </div>
              </div>

              <div className="group relative p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/10 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-purple-200 mb-1">
                      Classe préparatoire MPSI
                    </h3>
                    <p className="text-gray-300 font-light">Lycée Paul Éluard</p>
                  </div>
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1 text-sm">
                    Jan 2021 - Jan 2022
                  </Badge>
                </div>
              </div>

              <div className="group relative p-6 bg-gradient-to-br from-yellow-900/20 to-orange-900/10 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-yellow-200 mb-1">
                      Baccalauréat Général - Mention Bien
                    </h3>
                    <p className="text-gray-300 font-light">Lycée Colbert, Paris</p>
                    <p className="text-sm text-gray-400 mt-1">Spécialités : Mathématiques et Physique-Chimie</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 px-3 py-1 text-sm">
                      Jan 2020 - Jan 2021
                    </Badge>
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
              </div>
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
            <div className="group p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-400 rounded-xl flex items-center justify-center group-hover:animate-pulse">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  Sept 2024 - Jan 2025
                </Badge>
              </div>
              <h3 className="text-xl font-medium text-blue-200 mb-4">
                Équipier Polyvalent - Five Guys, Levallois-Perret
              </h3>
              <div className="space-y-3 text-gray-400 font-light leading-relaxed">
                <p className="flex items-start gap-2">
                  <Target className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  Gestion des commandes et service client en environnement rapide
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
            </div>

            <div className="group p-8 bg-gradient-to-br from-green-900/20 to-teal-900/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-400 rounded-xl flex items-center justify-center group-hover:animate-pulse">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  Déc 2021 - Mai 2022
                </Badge>
              </div>
              <h3 className="text-xl font-medium text-green-200 mb-4">
                Assistant de Projet - Événement "Essaimées", Saint-Denis
              </h3>
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
                  Collaboration avec ingénieurs et artistes dans un projet innovant
                </p>
              </div>
            </div>

            <div className="group p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center group-hover:animate-pulse">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  Juil - Août 2019
                </Badge>
              </div>
              <h3 className="text-xl font-medium text-purple-200 mb-4">
                Opérateur de saisie - Cyber Café du Centre, Brazzaville
              </h3>
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
                  Première expérience professionnelle dans le domaine informatique
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Projets GitHub
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mx-auto mb-8" />

            {/* Security Metrics */}
            <SecurityMetrics />

            {/* Cyber Tools Animation */}
            <CyberToolsAnimation />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BruteForce Tool */}
            <div className="group p-8 bg-gradient-to-br from-red-900/20 to-orange-900/10 rounded-3xl border border-red-500/20 hover:border-red-400/40 transition-all duration-500 hover:scale-105 relative">
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
                Outil de test de sécurité éducatif avec interface React/Tailwind et backend Flask. 
                Supporte les attaques personnalisables, le craquage GPU avec Hashcat et la gestion de dictionnaires.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-gray-700 text-gray-300 text-xs">Python</Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">Flask</Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">React</Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">Hashcat</Badge>
              </div>
              <a 
                href="https://github.com/eulogep" 
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                Voir le projet
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* CyberSentinel AI */}
            <div className="group p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 relative">
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
                Système de détection de menaces utilisant l'IA avec GPT-4. Capture réseau temps réel, 
                remédiation automatisée et tableaux de bord React avec backend FastAPI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-gray-700 text-gray-300 text-xs">Python</Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">FastAPI</Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">GPT-4</Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">PostgreSQL</Badge>
              </div>
              <a 
                href="https://github.com/eulogep" 
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                Voir le projet
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Password Simulator */}
            <div className="group p-8 bg-gradient-to-br from-green-900/20 to-emerald-900/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 hover:scale-105 relative">
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
                Simulateur interactif de sécurité des mots de passe. Analyse détaillée, 
                simulations d'attaques et visualisations pour sensibiliser aux bonnes pratiques.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-gray-700 text-gray-300 text-xs">HTML/CSS</Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">JavaScript</Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">Education</Badge>
              </div>
              <a 
                href="https://github.com/eulogep" 
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                Voir le projet
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* DEX Swap App */}
            <div className="group p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 relative">
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
                Application décentralisée d'échange de cryptomonnaies via Uniswap v3. 
                Interface glassmorphism avec React 18, ethers.js et intégration MetaMask.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-gray-700 text-gray-300 text-xs">React 18</Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">Ethers.js</Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">Uniswap</Badge>
                <Badge className="bg-gray-700 text-gray-300 text-xs">Web3</Badge>
              </div>
              <a 
                href="https://github.com/eulogep" 
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                Voir le projet
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
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
              Compétences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full mx-auto mb-8" />
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Technical Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-green-200 mb-8 flex items-center gap-3">
                <Terminal className="w-6 h-6 text-green-400" />
                Programmation
              </h3>
              {[
                "Python (avancé)",
                "Java (intermédiaire)",
                "HTML/CSS",
                "Shell scripting/Bash",
                "SQL",
                "JavaScript",
                "Git/GitHub",
              ].map((skill, index) => (
                <div key={skill} className="group flex items-center gap-4">
                  <div
                    className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300 animate-pulse"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                  <span className="text-gray-300 font-light group-hover:text-green-200 transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Cybersecurity Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-red-200 mb-8 flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-400" />
                Cybersécurité
              </h3>
              {[
                "Pentesting",
                "Analyse vulnérabilités",
                "Cryptographie",
                "Détection intrusions",
                "Sécurité réseaux",
                "OSINT",
                "Tests sécurité",
              ].map((skill, index) => (
                <div key={skill} className="group flex items-center gap-4">
                  <div
                    className="w-2 h-2 bg-red-400 rounded-full group-hover:scale-150 transition-transform duration-300 animate-pulse"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                  <span className="text-gray-300 font-light group-hover:text-red-200 transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            {/* Languages & Tools */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-blue-200 mb-8 flex items-center gap-3">
                <Languages className="w-6 h-6 text-blue-400" />
                Langues & Outils
              </h3>
              {[
                { lang: "Français", level: "Courant", color: "blue" },
                { lang: "Anglais", level: "B2", color: "purple" },
                { lang: "Espagnol", level: "Débutant", color: "pink" },
              ].map(({ lang, level, color }) => (
                <div
                  key={lang}
                  className="group flex items-center justify-between p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/40 transition-all duration-300"
                >
                  <span className="text-gray-300 font-light">{lang}</span>
                  <Badge
                    className={`bg-${color}-500/20 text-${color}-300 border-${color}-500/30 text-xs hover:scale-110 transition-transform`}
                  >
                    {level}
                  </Badge>
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <p className="text-gray-300 font-light">Linux/Unix</p>
                <p className="text-gray-300 font-light">LabVIEW</p>
                <p className="text-gray-300 font-light">Microsoft Office</p>
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-purple-200 mb-8 flex items-center gap-3">
                <Heart className="w-6 h-6 text-purple-400" />
                Centres d'intérêt
              </h3>
              {[
                { name: "Danse (Hip-hop, Popping)", icon: "💃" },
                { name: "Sports (Basket, Judo)", icon: "🏀" },
                { name: "Théâtre amateur", icon: "🎭" },
                { name: "Culture manga/anime", icon: "🎌" },
                { name: "Cinéma/Figuration", icon: "🎬" },
                { name: "Lecture", icon: "📚" },
              ].map(({ name, icon }, index) => (
                <div
                  key={name}
                  className="group flex items-center gap-4 p-3 rounded-lg bg-purple-900/20 hover:bg-purple-800/30 transition-all duration-300 hover:scale-105"
                >
                  <span
                    className="text-2xl animate-bounce"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {icon}
                  </span>
                  <span className="text-gray-300 font-light group-hover:text-purple-200 transition-colors duration-300 text-sm">
                    {name}
                  </span>
                </div>
              ))}
            </div>
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
            Intéressé par la cybersécurité ? Discutons d'opportunités de collaboration, 
            de stages ou de projets innovants dans le domaine de la sécurité informatique.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <a
              href="tel:+33760830931"
              className="group p-6 bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-2xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:animate-bounce" />
              <h3 className="text-lg font-medium text-green-200 mb-1">
                Téléphone
              </h3>
              <p className="text-gray-300 font-light text-sm">07 60 83 09 31</p>
            </a>

            <a
              href="mailto:mabialaeulogejunior@gmail.com"
              className="group p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-2xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:animate-bounce" />
              <h3 className="text-lg font-medium text-blue-200 mb-1">
                Email
              </h3>
              <p className="text-gray-300 font-light text-sm">mabialaeulogejunior@gmail.com</p>
            </a>

            <a
              href="https://github.com/eulogep"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:animate-bounce" />
              <h3 className="text-lg font-medium text-purple-200 mb-1">
                GitHub
              </h3>
              <p className="text-gray-300 font-light text-sm">github.com/eulogep</p>
            </a>

            <a
              href="https://linkedin.com/in/euloge-junior-mabiala"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-orange-900/30 to-orange-800/20 rounded-2xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-8 h-8 text-orange-400 mx-auto mb-3 group-hover:animate-bounce" />
              <h3 className="text-lg font-medium text-orange-200 mb-1">
                LinkedIn
              </h3>
              <p className="text-gray-300 font-light text-sm">LinkedIn Profile</p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-full font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
              <span className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Voir mes projets GitHub
              </span>
            </button>

            <CVDownloadButton />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 bg-gradient-to-t from-black to-transparent">
        <div className="max-w-6xl mx-auto text-center">
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
          <p className="text-gray-500 font-light italic">
            Aspirant en Cyber-sécurité - Portfolio Interactif 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
