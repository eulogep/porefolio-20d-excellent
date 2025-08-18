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
  Atom,
  FlaskConical,
  Microscope,
  Beaker,
  Zap,
  ArrowRight,
  Download,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30" />
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{ 
            left: mousePosition.x - 192, 
            top: mousePosition.y - 192,
            transform: 'translate3d(0, 0, 0)'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Atom className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <span className="text-xl font-light tracking-wider">EXCELLENT</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['about', 'education', 'experience', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative text-gray-300 hover:text-white transition-all duration-300 capitalize tracking-wide group"
                >
                  {item === 'about' ? 'À propos' : 
                   item === 'education' ? 'Formation' :
                   item === 'experience' ? 'Expérience' :
                   item === 'skills' ? 'Compétences' : 'Contact'}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          
          {/* Profile Image with Advanced Effects */}
          <div className="relative mb-12 group">
            <div className="relative w-48 h-48 mx-auto">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-2 rounded-full border border-purple-500/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              <div className="absolute inset-4 rounded-full border border-pink-500/30 animate-spin" style={{ animationDuration: '10s' }} />
              
              {/* Main image */}
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2Fb763a074828b443491d7e3e64f46617d%2F128de65beba046ed97de67b7f1b32662?format=webp&width=800"
                alt="Excellent Chadrak Gédéon"
                className="absolute inset-6 w-36 h-36 rounded-full object-cover border-2 border-white/20 shadow-2xl group-hover:scale-110 transition-all duration-700"
              />
              
              {/* Floating orbs */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0s' }}>
                <Atom className="w-4 h-4 text-white m-2" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <FlaskConical className="w-4 h-4 text-white m-2" />
              </div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-r from-green-500 to-teal-400 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                <Microscope className="w-3 h-3 text-white m-1.5" />
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl font-extralight tracking-wider leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200">
                EXCELLENT
              </span>
              <span className="block text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-thin tracking-widest">
                CHADRAK GÉDÉON
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 text-xl text-gray-300">
              <Microscope className="w-6 h-6 text-blue-400 animate-pulse" />
              <span className="font-light tracking-wide">Futur Chercheur en Chimie</span>
              <Beaker className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Étudiant passionné en Licence Chimie-Physique, aspirant à révolutionner le monde 
              à travers la recherche scientifique et l'innovation moléculaire.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Me contacter
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-gray-300 hover:text-white hover:border-white/40 transition-all duration-300">
              <Download className="w-4 h-4" />
              <span className="font-light tracking-wide">Télécharger CV</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-ping"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
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
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8" />
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed font-light">
                Passionné par les mystères de la matière et animé par une curiosité insatiable, 
                je me destine à devenir <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">chercheur en chimie</span>.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed font-light">
                Actuellement en Licence Chimie-Physique à l'Université Versailles Saint-Quentin-en-Yvelines, 
                je développe une approche analytique rigoureuse pour contribuer aux avancées scientifiques 
                qui façonneront notre avenir.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="group p-6 bg-gradient-to-br from-blue-900/20 to-blue-800/10 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105">
                  <Atom className="w-8 h-8 text-blue-400 mb-4 group-hover:animate-spin" />
                  <h3 className="text-lg font-medium text-blue-200 mb-2">Recherche Fondamentale</h3>
                  <p className="text-sm text-gray-400 font-light">Exploration des principes chimiques fondamentaux</p>
                </div>
                
                <div className="group p-6 bg-gradient-to-br from-purple-900/20 to-purple-800/10 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                  <FlaskConical className="w-8 h-8 text-purple-400 mb-4 group-hover:animate-pulse" />
                  <h3 className="text-lg font-medium text-purple-200 mb-2">Innovation</h3>
                  <p className="text-sm text-gray-400 font-light">Développement de solutions chimiques innovantes</p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Contact Card */}
              <div className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-2xl font-light mb-8 text-gray-200">Informations</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light">Adresse</p>
                      <p className="text-gray-200">Paris, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light">Naissance</p>
                      <p className="text-gray-200">07/11/2007</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light">Téléphone</p>
                      <p className="text-gray-200">07 66 16 06 22</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-light">Email</p>
                      <p className="text-gray-200">mex.exce@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Formation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8" />
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              Un parcours académique orienté vers l'excellence scientifique
            </p>
          </div>

          <div className="space-y-8">
            {/* Current Education */}
            <div className="group relative p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/10 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium text-blue-200 mb-2">Licence 2 Chimie-Physique</h3>
                  <p className="text-lg text-gray-300 font-light">Université Versailles Saint-Quentin-en-Yvelines</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm font-light">
                    2025-2026
                  </Badge>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed font-light">
                Spécialisation approfondie en chimie et physique avec un focus particulier sur 
                la recherche expérimentale et théorique. Développement de compétences analytiques 
                avancées et maîtrise des outils de laboratoire modernes.
              </p>
              
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <GraduationCap className="w-12 h-12 text-blue-400" />
              </div>
            </div>

            {/* Previous Education */}
            <div className="group relative p-8 bg-gradient-to-br from-green-900/20 to-emerald-900/10 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium text-green-200 mb-2">Baccalauréat Général</h3>
                  <p className="text-lg text-gray-300 font-light">Lycée Jacques Decour, Paris</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2 text-sm font-light">
                    2024 - Mention
                  </Badge>
                  <Award className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed font-light">
                Spécialités Mathématiques et Physique-Chimie, complétées par l'option Théâtre. 
                Cette formation polyvalente a développé ma rigueur scientifique tout en 
                cultivant ma créativité artistique.
              </p>
              
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <Award className="w-12 h-12 text-green-400" />
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
              Expérience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/10 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">2024</Badge>
              </div>
              <h3 className="text-xl font-medium text-purple-200 mb-4">Architecture Acoustique</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Stage de 2 semaines dans une entreprise d'architecture acoustique. 
                Découverte des principes physiques appliqués et des technologies de mesure sonore.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-orange-900/20 to-red-900/10 rounded-3xl border border-orange-500/20 hover:border-orange-400/40 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">2020</Badge>
              </div>
              <h3 className="text-xl font-medium text-orange-200 mb-4">ARCHI META VISION</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Stage d'initiation chez un géomètre. Première approche des techniques 
                de mesure topographique et des outils de géométrie appliquée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gradient-to-b from-gray-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Compétences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mx-auto mb-8" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Scientific Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-green-200 mb-8 flex items-center gap-3">
                <Atom className="w-6 h-6 text-green-400" />
                Sciences
              </h3>
              {['Chimie Organique', 'Chimie Analytique', 'Physique-Chimie', 'Mathématiques', 'Méthodes de Recherche'].map((skill, index) => (
                <div key={skill} className="group flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-gray-300 font-light group-hover:text-green-200 transition-colors duration-300">{skill}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-blue-200 mb-8 flex items-center gap-3">
                <Languages className="w-6 h-6 text-blue-400" />
                Langues
              </h3>
              {[
                { lang: 'Français', level: 'Courant', color: 'blue' },
                { lang: 'Anglais', level: 'Scolaire', color: 'purple' },
                { lang: 'Espagnol', level: 'Scolaire', color: 'pink' }
              ].map(({ lang, level, color }) => (
                <div key={lang} className="group flex items-center justify-between">
                  <span className="text-gray-300 font-light">{lang}</span>
                  <Badge className={`bg-${color}-500/20 text-${color}-300 border-${color}-500/30 text-xs`}>
                    {level}
                  </Badge>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-purple-200 mb-8 flex items-center gap-3">
                <Heart className="w-6 h-6 text-purple-400" />
                Centres d'intérêt
              </h3>
              {['Musique', 'Théâtre', 'Jeux vidéo', 'Volleyball'].map((interest, index) => (
                <div key={interest} className="group flex items-center gap-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-gray-300 font-light group-hover:text-purple-200 transition-colors duration-300">{interest}</span>
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
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-red-600 rounded-full mx-auto mb-8" />
          
          <p className="text-xl text-gray-400 font-light mb-16 max-w-2xl mx-auto">
            Prêt à collaborer sur des projets scientifiques innovants ou à discuter d'opportunités de recherche
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a 
              href="tel:+33766160622"
              className="group p-8 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-3xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-medium text-blue-200 mb-2">Téléphone</h3>
              <p className="text-gray-300 font-light">07 66 16 06 22</p>
            </a>

            <a 
              href="mailto:mex.exce@gmail.com"
              className="group p-8 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-3xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-xl font-medium text-purple-200 mb-2">Email</h3>
              <p className="text-gray-300 font-light">mex.exce@gmail.com</p>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 rounded-full font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25">
              <span className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Voir mon travail
              </span>
            </button>
            
            <button className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-gray-300 hover:text-white hover:border-white/40 transition-all duration-300">
              <Download className="w-4 h-4" />
              <span className="font-light tracking-wide">CV complet</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 bg-gradient-to-t from-black to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Atom className="w-4 h-4 text-white" />
            </div>
            <span className="text-gray-400 font-light">© 2024 Excellent Chadrak Gédéon</span>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <FlaskConical className="w-4 h-4 text-white" />
            </div>
          </div>
          <p className="text-gray-500 font-light italic">Futur Chercheur en Chimie - Portfolio 2024</p>
        </div>
      </footer>
    </div>
  );
}
