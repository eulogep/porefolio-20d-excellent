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

export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-4xl font-bold">
              ECG
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              MABIALA Excellent
              <br />
              <span className="text-blue-600">Chadrak Gédéon</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Étudiant en Licence Chimie-Physique | Passionné de sciences et de créativité
            </p>
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
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg"
            >
              Me contacter
            </Button>
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
                Jeune étudiant passionné par les sciences, je poursuis actuellement mes études en Licence Chimie-Physique à l'Université Versailles Saint-Quentin-en-Yvelines. Mon parcours académique et mes expériences de stage m'ont permis de développer une approche analytique et logique face aux défis scientifiques.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Au-delà des sciences, je cultive ma créativité à travers le théâtre et la musique, tout en maintenant un équilibre avec le sport, notamment le volleyball. Cette diversité d'intérêts enrichit ma vision du monde et renforce ma capacité d'adaptation.
              </p>
            </div>
            <Card className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-4 text-gray-900">Informations personnelles</h3>
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
                    <span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span>
                    <span className="text-gray-700">Nationalité Congolaise</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                <p className="text-gray-600">Poursuite de mes études scientifiques avec spécialisation en chimie et physique appliquée.</p>
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
            <Lightbulb className="text-yellow-600" />
            Compétences & Langues
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                  <Award className="text-blue-600" />
                  Compétences techniques
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Sciences</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Chimie</Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Physique</Badge>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">Mathématiques</Badge>
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
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">Restons en contact</h2>
          <Card className="p-8 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-0">
              <p className="text-lg text-gray-700 mb-8">
                N'hésitez pas à me contacter pour toute opportunité de stage, de collaboration ou simplement pour échanger !
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center gap-3 p-4 bg-blue-50 rounded-lg">
                  <Phone className="text-blue-600" />
                  <span className="text-gray-900 font-medium">07 66 16 06 22</span>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-purple-50 rounded-lg">
                  <Mail className="text-purple-600" />
                  <span className="text-gray-900 font-medium">mex.exce@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
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
