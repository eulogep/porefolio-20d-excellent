import {
  Award,
  Calendar,
  ExternalLink,
  CheckCircle,
  Star,
  Shield,
  Lock,
  Terminal,
  Globe,
  Database,
  Network,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  ModernCard,
  GlowButton,
  AnimatedProgress,
  StatusIndicator,
} from "@/components/ModernUIComponents";

export const CertificationsSection = () => {
  const certifications = [
    {
      name: "Introduction to Cybersecurity",
      provider: "Cisco Networking Academy",
      date: "2024",
      status: "completed",
      credentialId: "CISCO-CYBER-2024",
      skills: ["Sécurité réseau", "Menaces cyber", "Cryptographie de base"],
      icon: Shield,
      color: "blue",
      verified: true,
    },
    {
      name: "Network Security Fundamentals",
      provider: "CompTIA Security+",
      date: "En cours",
      status: "in-progress",
      progress: 75,
      skills: ["Firewall", "VPN", "IDS/IPS", "Audit sécurité"],
      icon: Network,
      color: "green",
      verified: false,
    },
    {
      name: "Ethical Hacking Basics",
      provider: "EC-Council",
      date: "Planifié 2024",
      status: "planned",
      skills: ["Pentesting", "Vulnérabilités", "Exploits", "Reporting"],
      icon: Terminal,
      color: "red",
      verified: false,
    },
  ];

  const onlinePrograms = [
    {
      name: "Python for Cybersecurity",
      provider: "Coursera",
      date: "2023",
      duration: "6 semaines",
      grade: "98%",
      icon: Database,
      color: "purple",
    },
    {
      name: "Web Application Security",
      provider: "OWASP Foundation",
      date: "2024",
      duration: "4 semaines",
      grade: "95%",
      icon: Globe,
      color: "orange",
    },
  ];

  const achievements = [
    {
      title: "CTF ESIEA 2024",
      description: "Top 10 - Capture The Flag competition",
      date: "Mars 2024",
      rank: "8ème place",
      icon: Award,
      color: "yellow",
    },
    {
      title: "Hackathon Sécurité",
      description: "Prix de l'innovation - Solution anti-phishing",
      date: "Novembre 2023",
      rank: "2ème place",
      icon: Star,
      color: "cyan",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "green";
      case "in-progress":
        return "blue";
      case "planned":
        return "purple";
      default:
        return "gray";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed":
        return "Certifié";
      case "in-progress":
        return "En cours";
      case "planned":
        return "Planifié";
      default:
        return "À venir";
    }
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extralight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Certifications & Formations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Engagement continu dans l'amélioration des compétences et la
            validation des expertises
          </p>
        </div>

        {/* Certifications principales */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            Certifications Professionnelles
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              const statusColor = getStatusColor(cert.status);

              return (
                <ModernCard
                  key={cert.name}
                  glowColor={cert.color}
                  className="p-6 relative overflow-hidden"
                >
                  {/* Status badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <Badge
                      className={`bg-${statusColor}-500/20 text-${statusColor}-300 border-${statusColor}-500/30 text-xs`}
                    >
                      {getStatusLabel(cert.status)}
                    </Badge>
                    {cert.verified && (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    )}
                  </div>

                  {/* Icon and title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r from-${cert.color}-500 to-${cert.color}-600 rounded-xl flex items-center justify-center`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`text-lg font-medium text-${cert.color}-200 mb-1`}
                      >
                        {cert.name}
                      </h4>
                      <p className="text-gray-400 text-sm font-light">
                        {cert.provider}
                      </p>
                    </div>
                  </div>

                  {/* Progress for in-progress certs */}
                  {cert.status === "in-progress" && cert.progress && (
                    <div className="mb-4">
                      <AnimatedProgress
                        progress={cert.progress}
                        label="Progression"
                        color={cert.color}
                        showPercentage={true}
                      />
                    </div>
                  )}

                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">
                      Compétences acquises :
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-gray-700 text-gray-300 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Date and credential */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </div>
                    {cert.credentialId && (
                      <span className="font-mono">ID: {cert.credentialId}</span>
                    )}
                  </div>
                </ModernCard>
              );
            })}
          </div>
        </div>

        {/* Formations en ligne */}
        <div className="mb-16">
          <h3 className="text-3xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Formations Supplémentaires
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {onlinePrograms.map((program, index) => {
              const IconComponent = program.icon;

              return (
                <ModernCard
                  key={program.name}
                  glowColor={program.color}
                  className="p-6"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r from-${program.color}-500 to-${program.color}-600 rounded-lg flex items-center justify-center`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`text-lg font-medium text-${program.color}-200`}
                      >
                        {program.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {program.provider}
                      </p>
                    </div>
                    <Badge
                      className={`bg-${program.color}-500/20 text-${program.color}-300 border-${program.color}-500/30`}
                    >
                      {program.grade}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{program.duration}</span>
                    <span>{program.date}</span>
                  </div>
                </ModernCard>
              );
            })}
          </div>
        </div>

        {/* Achievements et compétitions */}
        <div>
          <h3 className="text-3xl font-light mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            Distinctions & Compétitions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;

              return (
                <ModernCard
                  key={achievement.title}
                  glowColor={achievement.color}
                  className="p-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r from-${achievement.color}-500 to-${achievement.color}-600 rounded-xl flex items-center justify-center`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4
                          className={`text-xl font-medium text-${achievement.color}-200`}
                        >
                          {achievement.title}
                        </h4>
                        <Badge
                          className={`bg-${achievement.color}-500/20 text-${achievement.color}-300 border-${achievement.color}-500/30`}
                        >
                          {achievement.rank}
                        </Badge>
                      </div>
                      <p className="text-gray-300 mb-3 font-light">
                        {achievement.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {achievement.date}
                      </div>
                    </div>
                  </div>
                </ModernCard>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <GlowButton
            variant="primary"
            size="lg"
            onClick={() =>
              window.open(
                "https://linkedin.com/in/euloge-junior-mabiala",
                "_blank",
              )
            }
          >
            <ExternalLink className="w-5 h-5" />
            Voir les certifications complètes
          </GlowButton>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
