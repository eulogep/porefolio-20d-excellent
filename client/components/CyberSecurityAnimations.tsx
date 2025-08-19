import React, { useEffect, useRef, useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  Terminal,
  Wifi,
  Zap,
  Binary,
  Code,
  Server,
  Network,
  Globe,
  Bug,
  AlertTriangle,
  Key,
  Database,
  Monitor,
} from "lucide-react";

export const CyberBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
      {/* Binary rain */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-green-400 font-mono text-sm animate-pulse"
          style={{
            left: `${i * 5}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`,
          }}
        >
          {Math.random() > 0.5 ? "1" : "0"}
        </div>
      ))}

      {/* Network nodes */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient
            id="networkGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
          </linearGradient>
        </defs>

        {[...Array(12)].map((_, i) => (
          <g key={i}>
            <circle
              cx={`${20 + (i % 4) * 25}%`}
              cy={`${20 + Math.floor(i / 4) * 30}%`}
              r="2"
              fill="rgba(34, 197, 94, 0.6)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            {i < 11 && (
              <line
                x1={`${20 + (i % 4) * 25}%`}
                y1={`${20 + Math.floor(i / 4) * 30}%`}
                x2={`${20 + ((i + 1) % 4) * 25}%`}
                y2={`${20 + Math.floor((i + 1) / 4) * 30}%`}
                stroke="url(#networkGradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            )}
          </g>
        ))}
      </svg>

      {/* Floating cyber elements */}
      <div className="absolute top-10 left-10 text-4xl font-mono text-green-400 animate-pulse">
        0x1A2B
      </div>
      <div
        className="absolute top-20 right-20 text-3xl font-mono text-blue-400 animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        SSL/TLS
      </div>
      <div
        className="absolute bottom-32 left-16 text-3xl font-mono text-red-400 animate-pulse"
        style={{ animationDelay: "2s" }}
      >
        SHA-256
      </div>
      <div
        className="absolute bottom-20 right-32 text-4xl font-mono text-purple-400 animate-pulse"
        style={{ animationDelay: "3s" }}
      >
        RSA-2048
      </div>
      <div
        className="absolute top-1/2 left-20 text-2xl font-mono text-yellow-400 animate-pulse"
        style={{ animationDelay: "4s" }}
      >
        AES-256
      </div>
      <div
        className="absolute top-1/3 right-1/4 text-3xl font-mono text-cyan-400 animate-pulse"
        style={{ animationDelay: "5s" }}
      >
        MD5
      </div>
    </div>
  );
};

export const NetworkStructure: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Central Hub */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse flex items-center justify-center">
        <Server className="w-8 h-8 text-white" />
      </div>

      {/* Connected Nodes */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            left: `${50 + 30 * Math.cos((i * Math.PI) / 3)}%`,
            top: `${50 + 30 * Math.sin((i * Math.PI) / 3)}%`,
            animationDelay: `${i * 0.3}s`,
          }}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            {i % 3 === 0 && <Monitor className="w-4 h-4 text-white" />}
            {i % 3 === 1 && <Shield className="w-4 h-4 text-white" />}
            {i % 3 === 2 && <Lock className="w-4 h-4 text-white" />}
          </div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            <line
              x1="50%"
              y1="50%"
              x2={`${50 - 30 * Math.cos((i * Math.PI) / 3)}%`}
              y2={`${50 - 30 * Math.sin((i * Math.PI) / 3)}%`}
              stroke="rgba(34, 197, 94, 0.5)"
              strokeWidth="2"
              className="animate-pulse"
            />
          </svg>
        </div>
      ))}

      {/* Firewall Animation */}
      <div className="absolute top-20 right-10 w-20 h-20">
        <div className="relative w-full h-full">
          <Shield className="w-20 h-20 text-red-500 animate-pulse" />
          <div className="absolute inset-0 border-2 border-red-500 rounded-lg animate-ping" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Encryption Process */}
      <div className="absolute bottom-20 left-10 w-32 h-8">
        <div className="flex items-center gap-2">
          <Key
            className="w-6 h-6 text-yellow-400 animate-spin"
            style={{ animationDuration: "3s" }}
          />
          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-green-400 rounded-full animate-pulse"
              style={{ width: "75%" }}
            />
          </div>
          <Lock className="w-6 h-6 text-green-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export const HackingTerminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([
    "$ whoami",
    "euloge@cybersec",
    "$ nmap -sS target.com",
    "Starting Nmap scan...",
    "$ python exploit.py",
    "Payload delivered successfully",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prev) => {
        const newLines = [...prev];
        newLines.push(
          `$ ${Math.random() > 0.5 ? "sudo" : "python"} ${Math.random() > 0.5 ? "scan.py" : "analyze.sh"}`,
        );
        if (newLines.length > 8) newLines.shift();
        return newLines;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-1/3 right-16 w-64 h-32 bg-black/80 rounded-lg border border-green-500/50 p-3 font-mono text-sm overflow-hidden">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-green-400 text-xs">terminal</span>
      </div>
      <div className="space-y-1">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`${line.startsWith("$") ? "text-green-400" : "text-gray-300"} animate-fadeIn`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {line}
          </div>
        ))}
        <div className="text-green-400 animate-pulse">_</div>
      </div>
    </div>
  );
};

export const SecurityMetrics: React.FC = () => {
  const metrics = [
    { label: "Threats Blocked", value: "99.9%", color: "green" },
    { label: "System Integrity", value: "100%", color: "blue" },
    { label: "Encryption Level", value: "AES-256", color: "purple" },
    { label: "Firewall Status", value: "Active", color: "red" },
  ];

  return (
    <div className="flex justify-center gap-6 flex-wrap mb-12">
      {metrics.map((metric, index) => (
        <div
          key={metric.label}
          className={`
            relative w-20 h-20 bg-gradient-to-br from-${metric.color}-500 to-${metric.color}-600
            rounded-xl text-white text-center cursor-pointer
            transition-all duration-500 hover:scale-125 hover:rotate-12
            shadow-xl hover:shadow-2xl hover:shadow-${metric.color}-500/50
            group animate-float
          `}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 p-2 h-full flex flex-col justify-center">
            <div className="text-xs font-bold mb-1">{metric.label}</div>
            <div className="text-sm font-bold">{metric.value}</div>
          </div>

          {/* Scanning effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-1 border border-white/30 rounded-xl animate-ping"
              style={{ animationDuration: "2s" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const CyberToolsAnimation: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-8 py-8">
      {/* Penetration Testing */}
      <div className="relative">
        <Bug className="w-12 h-12 text-red-400 animate-pulse" />
        <div className="absolute inset-0 bg-red-400/20 rounded-full animate-ping" />
      </div>

      {/* Network Analysis */}
      <div className="relative">
        <Network className="w-12 h-12 text-blue-400 animate-pulse" />
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-bounce"
              style={{
                left: `${-2 + i * 2}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Security Shield */}
      <div className="relative w-12 h-12">
        <Shield className="w-12 h-12 text-green-400 animate-pulse" />
        <div
          className="absolute top-1/2 left-1/2 w-8 h-8 border border-green-400/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin"
          style={{ animationDuration: "2s" }}
        />
      </div>

      {/* Database Security */}
      <div className="relative">
        <Database className="w-12 h-12 text-purple-400 animate-pulse" />
        <div className="absolute inset-0">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping"
              style={{
                top: `${25 + i * 25}%`,
                left: `${25 + i * 25}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Terminal/Code */}
      <div className="relative">
        <Terminal className="w-12 h-12 text-yellow-400 animate-pulse" />
        <div className="absolute inset-0 bg-yellow-400/30 blur-sm animate-pulse" />
      </div>
    </div>
  );
};

export const CVDownloadButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "#"; // Will be replaced with actual CV link
    link.download = "CV_Euloge_Junior_Mabiala.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full font-medium tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
    >
      <span className="relative z-10 flex items-center gap-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Télécharger CV
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </button>
  );
};

export const VulnerabilityScanner: React.FC = () => {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanning((prev) => !prev);
      if (scanning) {
        setProgress((prev) => (prev + 10) % 100);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [scanning]);

  return (
    <div className="absolute bottom-1/4 left-1/4 w-48 h-24 bg-gray-900/80 rounded-lg border border-red-500/50 p-3">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="w-4 h-4 text-red-400" />
        <span className="text-red-400 text-sm font-mono">
          Vulnerability Scanner
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-300">
          <span>Scanning...</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-red-500 to-yellow-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xs text-gray-400">
          {scanning ? "Active scan in progress..." : "Scan complete"}
        </div>
      </div>
    </div>
  );
};

export const EncryptionAnimation: React.FC = () => {
  const [encrypted, setEncrypted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setEncrypted((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-1/4 left-1/4 flex items-center gap-4">
      <div className="text-center">
        <div className="text-sm text-gray-300 mb-2">Plain Text</div>
        <div className="px-4 py-2 bg-gray-800 rounded font-mono text-green-400">
          {encrypted ? "************" : "secret_data"}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Key
          className={`w-8 h-8 text-yellow-400 transition-transform duration-500 ${encrypted ? "rotate-180" : ""}`}
        />
        <div className="text-xs text-yellow-400 mt-1">
          {encrypted ? "Encrypted" : "Encrypting"}
        </div>
      </div>

      <div className="text-center">
        <div className="text-sm text-gray-300 mb-2">Cipher Text</div>
        <div className="px-4 py-2 bg-gray-800 rounded font-mono text-red-400">
          {encrypted ? "A3F7B9C2" : "........"}
        </div>
      </div>
    </div>
  );
};
