import React, { useEffect, useRef, useState } from 'react';
import { Atom, FlaskConical, Microscope, Dna, Zap } from 'lucide-react';

export const MolecularStructure: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Benzene Ring Animation */}
      <div className="absolute top-20 left-10 w-32 h-32 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon 
            points="50,15 85,35 85,65 50,85 15,65 15,35" 
            fill="none" 
            stroke="rgba(59, 130, 246, 0.3)" 
            strokeWidth="2"
          />
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle
              key={i}
              cx={50 + 35 * Math.cos((i * Math.PI) / 3 - Math.PI / 2)}
              cy={50 + 35 * Math.sin((i * Math.PI) / 3 - Math.PI / 2)}
              r="3"
              fill={`hsl(${220 + i * 20}, 70%, 60%)`}
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>

      {/* DNA Double Helix */}
      <div className="absolute top-1/3 right-16 w-8 h-48">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full animate-pulse"
            style={{
              left: `${50 + 40 * Math.sin((i * Math.PI) / 6)}%`,
              top: `${(i * 8)}%`,
              backgroundColor: i % 2 === 0 ? '#3B82F6' : '#8B5CF6',
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={i + 12}
            className="absolute w-3 h-3 rounded-full animate-pulse"
            style={{
              left: `${50 - 40 * Math.sin((i * Math.PI) / 6)}%`,
              top: `${(i * 8)}%`,
              backgroundColor: i % 2 === 0 ? '#10B981' : '#F59E0B',
              animationDelay: `${i * 0.1 + 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Protein Folding Animation */}
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40">
        <svg viewBox="0 0 160 160" className="w-full h-full">
          <path
            d="M20,80 Q40,20 80,40 T140,80 Q120,140 80,120 T20,80"
            fill="none"
            stroke="rgba(139, 92, 246, 0.4)"
            strokeWidth="3"
            className="animate-pulse"
          />
          <path
            d="M30,70 Q60,30 90,50 T130,90 Q100,130 70,110 T30,70"
            fill="none"
            stroke="rgba(16, 185, 129, 0.4)"
            strokeWidth="2"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      {/* Floating Chemical Elements */}
      {['C', 'H', 'O', 'N', 'S', 'P'].map((element, index) => (
        <div
          key={element}
          className="absolute animate-float text-2xl font-bold opacity-20 text-blue-400"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + (index % 3) * 25}%`,
            animationDelay: `${index * 0.8}s`,
            animationDuration: `${4 + index}s`
          }}
        >
          {element}
        </div>
      ))}
    </div>
  );
};

export const ChemicalReactionEffect: React.FC = () => {
  const [reaction, setReaction] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setReaction(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getReactionColor = () => {
    switch (reaction) {
      case 0: return 'from-blue-500 to-cyan-400';
      case 1: return 'from-purple-500 to-pink-400';
      case 2: return 'from-green-500 to-teal-400';
      default: return 'from-blue-500 to-cyan-400';
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getReactionColor()} animate-ping`} />
    </div>
  );
};

export const PeriodicTableElements: React.FC = () => {
  const elements = [
    { symbol: 'C', name: 'Carbone', number: 6, color: 'blue' },
    { symbol: 'H', name: 'Hydrogène', number: 1, color: 'purple' },
    { symbol: 'O', name: 'Oxygène', number: 8, color: 'green' },
    { symbol: 'N', name: 'Azote', number: 7, color: 'pink' },
    { symbol: 'Ca', name: 'Calcium', number: 20, color: 'orange' },
    { symbol: 'Fe', name: 'Fer', number: 26, color: 'red' }
  ];

  return (
    <div className="flex justify-center gap-4 flex-wrap mb-12">
      {elements.map((element, index) => (
        <div
          key={element.symbol}
          className={`
            relative w-16 h-16 bg-gradient-to-br from-${element.color}-500 to-${element.color}-600
            rounded-xl text-white text-center cursor-pointer
            transition-all duration-500 hover:scale-125 hover:rotate-12
            shadow-xl hover:shadow-2xl hover:shadow-${element.color}-500/50
            group animate-float
          `}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 p-1 h-full flex flex-col justify-center">
            <div className="text-xs font-bold opacity-80">{element.number}</div>
            <div className="text-lg font-bold">{element.symbol}</div>
            <div className="text-xs truncate opacity-80">{element.name}</div>
          </div>
          
          {/* Electron orbits */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-1 border border-white/30 rounded-full animate-spin" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-2 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export const LabEquipmentAnimation: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-8 py-8">
      {/* Beaker with bubbling effect */}
      <div className="relative">
        <FlaskConical className="w-12 h-12 text-blue-400 animate-pulse" />
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-bounce"
              style={{
                left: `${-2 + i * 2}px`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Microscope with scanning effect */}
      <div className="relative">
        <Microscope className="w-12 h-12 text-purple-400 animate-pulse" />
        <div className="absolute inset-0 bg-purple-400/20 rounded-full animate-ping" />
      </div>

      {/* Atom with electron orbits */}
      <div className="relative w-12 h-12">
        <Atom className="w-12 h-12 text-green-400 animate-spin" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-green-400/50 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
      </div>

      {/* DNA with helix animation */}
      <div className="relative">
        <Dna className="w-12 h-12 text-pink-400 animate-pulse" />
        <div className="absolute inset-0">
          {[0, 1].map((i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-pink-400 rounded-full animate-ping"
              style={{
                top: `${25 + i * 25}%`,
                left: `${25 + i * 25}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Energy/Lightning with spark effect */}
      <div className="relative">
        <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
        <div className="absolute inset-0 bg-yellow-400/30 blur-sm animate-pulse" />
      </div>
    </div>
  );
};

export const CVDownloadButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://cdn.builder.io/o/assets%2Fb763a074828b443491d7e3e64f46617d%2F47287234873f49ab847d2226b07f61bd?alt=media&token=f27fa724-81cb-4afc-ae12-b3b076812654&apiKey=b763a074828b443491d7e3e64f46617d';
    link.download = 'CV_Excellent_Chadrak_Gedeon.pdf';
    link.target = '_blank';
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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    </button>
  );
};

export const ChemistryBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
      {/* Chemical formulas */}
      <div className="absolute top-10 left-10 text-6xl font-thin text-blue-400 animate-pulse">H₂O</div>
      <div className="absolute top-20 right-20 text-5xl font-thin text-purple-400 animate-pulse" style={{ animationDelay: '1s' }}>CO₂</div>
      <div className="absolute bottom-32 left-16 text-4xl font-thin text-green-400 animate-pulse" style={{ animationDelay: '2s' }}>CH₄</div>
      <div className="absolute bottom-20 right-32 text-5xl font-thin text-pink-400 animate-pulse" style={{ animationDelay: '3s' }}>NaCl</div>
      <div className="absolute top-1/2 left-20 text-3xl font-thin text-yellow-400 animate-pulse" style={{ animationDelay: '4s' }}>C₆H₁₂O₆</div>
      <div className="absolute top-1/3 right-1/4 text-4xl font-thin text-cyan-400 animate-pulse" style={{ animationDelay: '5s' }}>NH₃</div>
      
      {/* Molecular bonds */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="bondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
          </linearGradient>
        </defs>
        
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="url(#bondGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
      </svg>
    </div>
  );
};
