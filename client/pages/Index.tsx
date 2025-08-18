import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
  Zap
} from "lucide-react";
import {
  FloatingParticles,
  GlowingButton,
  MoleculeAnimation,
  ChemistryCard,
  DNAHelix,
  PeriodicElement,
  LoadingMolecule
} from "@/components/ChemistryEffects";

export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <FloatingParticles />
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl text-gray-900">Excellent Chadrak</h1>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">À propos</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-blue-600 transition-colors">Formation</button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-600 transition-colors">Expérience</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Compétences</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-20 relative">
            <div className="relative w-40 h-40 mx-auto mb-8 group">
              {/* Main profile image with enhanced effects */}
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fb763a074828b443491d7e3e64f46617d%2F128de65beba046ed97de67b7f1b32662?format=webp&width=800"
                  alt="Excellent Chadrak Gédéon"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-2xl group-hover:scale-110 transition-all duration-500 animate-glow-pulse"
                />

                {/* Orbiting chemistry elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-molecule-orbit">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <Atom className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-molecule-orbit" style={{ animationDelay: '1s', animationDirection: 'reverse' }}>
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                      <FlaskConical className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="animate-molecule-orbit" style={{ animationDelay: '2s' }}>
                    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <Microscope className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* DNA Helix decoration */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <DNAHelix />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              MABIALA Excellent
              <br />
              <span className="text-blue-600">Chadrak Gédéon</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto flex items-center justify-center gap-2">
              <Microscope className="w-5 h-5 text-blue-600 animate-pulse" />
              Étudiant en Licence Chimie-Physique | Futur Chercheur en Chimie
              <Beaker className="w-5 h-5 text-purple-600 animate-bounce" />
            </p>

            {/* Floating Chemistry Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-20 left-10 animate-float-slow">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center opacity-70">
                  <Atom className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="absolute top-40 right-16 animate-float-medium">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center opacity-60">
                  <FlaskConical className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <div className="absolute bottom-40 left-20 animate-float-fast">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center opacity-50">
                  <Zap className="w-4 h-4 text-green-600" />
                </div>
              </div>
              <div className="absolute bottom-60 right-10 animate-float-slow">
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center opacity-40">
                  <Microscope className="w-7 h-7 text-indigo-600" />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span>Paris, France</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} />
                <span>Né le 07/11/2007</span>
              </div>
            </div>
            <GlowingButton onClick={() => scrollToSection('contact')}>
              <Mail className="w-5 h-5" />
              Me contacter
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">À propos de moi</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Jeune étudiant passionné par les sciences, je poursuis actuellement mes études en Licence Chimie-Physique à l'Université Versailles Saint-Quentin-en-Yvelines. <strong className="text-blue-600">Mon objectif : devenir chercheur en chimie</strong> pour contribuer aux avancées scientifiques et aux innovations qui amélioreront notre monde.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Mon parcours académique et mes expériences de stage m'ont permis de développer une approche analytique rigoureuse face aux défis scientifiques. Je suis particulièrement attiré par la recherche fondamentale et appliquée en chimie.
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full glass-advanced animate-glow-pulse">
                  <Atom className="w-5 h-5 text-blue-600 animate-spin-slow" />
                  <span className="text-blue-700 font-medium">Recherche Fondamentale</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full glass-advanced animate-pulse">
                  <FlaskConical className="w-5 h-5 text-purple-600 animate-shake-reaction" />
                  <span className="text-purple-700 font-medium">Innovation Chimique</span>
                </div>
              </div>

              {/* Molecule Animation */}
              <div className="flex justify-center mt-8">
                <MoleculeAnimation />
              </div>
            </div>
            <ChemistryCard icon={<Beaker className="w-4 h-4" />}>
              <h3 className="font-semibold text-lg mb-4 text-gray-900 flex items-center gap-2">
                <Beaker className="w-5 h-5 text-blue-600" />
                Informations personnelles
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-blue-600" />
                  <span className="text-gray-700">70 boulevard Barbès, 75018 Paris</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-blue-600" />
                  <span className="text-gray-700">07 66 16 06 22</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-blue-600" />
                  <span className="text-gray-700">mex.exce@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full bg-green-500 inline-block animate-pulse"></span>
                  <span className="text-gray-700">Nationalité Congolaise</span>
                </div>
              </div>
            </ChemistryCard>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
            <GraduationCap className="text-blue-600" />
            Formation académique
          </h2>
          <div className="space-y-8">
            <Card className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Licence 2, mention Chimie – Physique</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 w-fit">2025–2026</Badge>
                </div>
                <p className="text-gray-700 mb-2">UFR Sciences, Université Versailles Saint-Quentin-en-Yvelines</p>
                <p className="text-gray-600">Spécialisation approfondie en chimie et physique, avec focus sur la recherche expérimentale et théorique.</p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Baccalauréat général</h3>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 w-fit">2024 - Mention</Badge>
                </div>
                <p className="text-gray-700 mb-2">Lycée Jacques Decour, Paris</p>
                <p className="text-gray-600">Terminale générale avec spécialités Mathématiques et Physique-Chimie, option Théâtre</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
            <Briefcase className="text-purple-600" />
            Expérience professionnelle
          </h2>
          <div className="space-y-8">
            <Card className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Stage en entreprise d'architecture acoustique</h3>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 w-fit">2024 - 2 semaines</Badge>
                </div>
                <p className="text-gray-600">Découverte des principes de l'acoustique appliquée en architecture et des méthodes de mesure sonore.</p>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Stage chez ARCHI META VISION</h3>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 w-fit">Novembre 2020 - 1 semaine</Badge>
                </div>
                <p className="text-gray-700 mb-2">Géomètre</p>
                <p className="text-gray-600">Initiation aux techniques de géométrie appliquée et aux outils de mesure topographique.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 flex items-center justify-center gap-3">
            <Lightbulb className="text-yellow-600 animate-pulse" />
            Compétences & Langues
          </h2>

          {/* Periodic Elements Display */}
          <div className="flex justify-center mb-8 gap-4 flex-wrap">
            <PeriodicElement symbol="C" name="Carbone" number={6} />
            <PeriodicElement symbol="H" name="Hydrogène" number={1} />
            <PeriodicElement symbol="O" name="Oxygène" number={8} />
            <PeriodicElement symbol="N" name="Azote" number={7} />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                  <Award className="text-blue-600 animate-bounce" />
                  Compétences techniques & Recherche
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <FlaskConical className="w-4 h-4 text-blue-600" />
                      Sciences & Recherche
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">Chimie Organique</Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">Chimie Analytique</Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">Physique-Chimie</Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors">Mathématiques</Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100 transition-colors">Méthodes de Recherche</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Spécialisations</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700">Acoustique</Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700">Géométrie appliquée</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Soft Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700">Analyse scientifique</Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700">Esprit logique</Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700">Travail en équipe</Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700">Adaptation rapide</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                  <Languages className="text-green-600" />
                  Langues & Centres d'intérêt
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Langues parlées</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Français</span>
                        <Badge className="bg-green-100 text-green-800">Courant</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Anglais</span>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Niveau scolaire</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Espagnol</span>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Niveau scolaire</Badge>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                      <Heart className="text-red-500" size={16} />
                      Centres d'intérêt
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-pink-50 text-pink-700">Musique</Badge>
                      <Badge variant="outline" className="bg-pink-50 text-pink-700">Théâtre</Badge>
                      <Badge variant="outline" className="bg-pink-50 text-pink-700">Jeux vidéo</Badge>
                      <Badge variant="outline" className="bg-pink-50 text-pink-700">Volleyball</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900 neon-text">Restons en contact</h2>

          {/* Loading molecule animation */}
          <div className="flex justify-center mb-8">
            <LoadingMolecule />
          </div>

          <ChemistryCard icon={<Mail className="w-4 h-4" />} className="p-8">
            <p className="text-lg text-gray-700 mb-8">
              N'hésitez pas à me contacter pour toute opportunité de stage, de collaboration ou simplement pour échanger !
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white shadow-xl hover:scale-105 transition-all duration-300 animate-glow-pulse">
                <Phone className="text-white animate-bounce" />
                <span className="font-medium">07 66 16 06 22</span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white shadow-xl hover:scale-105 transition-all duration-300 animate-glow-pulse">
                <Mail className="text-white animate-bounce" />
                <span className="font-medium">mex.exce@gmail.com</span>
              </div>
            </div>
          </ChemistryCard>
        </div>

        {/* Floating bubbles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-blue-200 rounded-full animate-bubble-rise opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200/50 bg-white/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            © 2024 MABIALA Excellent Chadrak Gédéon - Portfolio personnel
          </p>
        </div>
      </footer>
    </div>
  );
}
