import React, { useState } from 'react';

const ciaData = {
  C: { label: 'Confidentiality', color: '#6c63ff', description: 'Ensuring information is accessible only to those authorized to access it. Protects against unauthorized disclosure.' },
  I: { label: 'Integrity', color: '#00d4aa', description: 'Safeguarding the accuracy and completeness of information. Protects against unauthorized modification.' },
  A: { label: 'Availability', color: '#f7c948', description: 'Ensuring authorized users can access information and systems when needed. Protects against disruption of service.' },
};

const osiLayers = [
  { num: 7, name: 'Application', concern: 'Authentication, access control, non-repudiation at application level' },
  { num: 6, name: 'Presentation', concern: 'Data encryption/decryption, data compression, format translation' },
  { num: 5, name: 'Session', concern: 'Session management, token-based authentication, session hijacking prevention' },
  { num: 4, name: 'Transport', concern: 'End-to-end encryption (TLS/SSL), port security, connection integrity' },
  { num: 3, name: 'Network', concern: 'IP security (IPsec), firewall filtering, routing attacks prevention' },
  { num: 2, name: 'Data Link', concern: 'MAC address filtering, switch security, ARP spoofing prevention' },
  { num: 1, name: 'Physical', concern: 'Physical access control, cable security, electromagnetic shielding' },
];

export default function CIATriad() {
  const [activeCorner, setActiveCorner] = useState(null);
  const [activeLayer, setActiveLayer] = useState(null);
  const [showHow, setShowHow] = useState(false);

  return (
    <div className="space-y-8">
      {/* CIA Triangle */}
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-2">CIA Triad</h3>
        <div className="relative w-64 h-56 mx-auto">
          {/* Triangle SVG */}
          <svg viewBox="0 0 200 180" className="w-full h-full">
            <polygon points="100,10 10,170 190,170" fill="none" stroke="#2a2d3e" strokeWidth="2" />
            <line x1="100" y1="10" x2="10" y2="170" stroke={activeCorner === 'C' || activeCorner === 'I' ? '#6c63ff44' : '#2a2d3e'} strokeWidth="2" />
            <line x1="100" y1="10" x2="190" y2="170" stroke={activeCorner === 'C' || activeCorner === 'A' ? '#6c63ff44' : '#2a2d3e'} strokeWidth="2" />
            <line x1="10" y1="170" x2="190" y2="170" stroke={activeCorner === 'I' || activeCorner === 'A' ? '#6c63ff44' : '#2a2d3e'} strokeWidth="2" />
          </svg>

          {/* Corner buttons */}
          {[
            { key: 'C', x: 'left-1/2 -translate-x-1/2 top-0', label: 'C' },
            { key: 'I', x: 'left-0 bottom-0', label: 'I' },
            { key: 'A', x: 'right-0 bottom-0', label: 'A' },
          ].map(({ key, x, label }) => (
            <button
              key={key}
              onMouseEnter={() => setActiveCorner(key)}
              onMouseLeave={() => setActiveCorner(null)}
              onClick={() => setActiveCorner(activeCorner === key ? null : key)}
              className={`absolute ${x} w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                activeCorner === key
                  ? 'scale-125 shadow-lg'
                  : 'hover:scale-110'
              }`}
              style={{
                backgroundColor: activeCorner === key ? ciaData[key].color : `${ciaData[key].color}22`,
                borderColor: ciaData[key].color,
                color: activeCorner === key ? '#0f1117' : ciaData[key].color,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Active description */}
        {activeCorner && (
          <div className="animate-fade-in bg-surface rounded-xl p-4 border border-border max-w-md text-center">
            <h4 className="font-bold text-base mb-1" style={{ color: ciaData[activeCorner].color }}>
              {ciaData[activeCorner].label}
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">{ciaData[activeCorner].description}</p>
          </div>
        )}
        {!activeCorner && (
          <p className="text-xs text-text-secondary text-center">Hover or click a corner to learn more</p>
        )}
      </div>

      {/* OSI Layer Stack */}
      <div className="bg-surface rounded-xl border border-border p-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">OSI Security Architecture — Click a layer</h3>
        <div className="space-y-1.5">
          {osiLayers.map((layer) => (
            <button
              key={layer.num}
              onClick={() => setActiveLayer(activeLayer === layer.num ? null : layer.num)}
              className={`w-full text-left px-4 py-2.5 rounded-lg border transition-all duration-200 ${
                activeLayer === layer.num
                  ? 'bg-primary-dim border-primary'
                  : 'bg-bg border-border hover:border-border-hover'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  <span className="font-mono text-primary mr-2">L{layer.num}</span>
                  <span className="font-medium">{layer.name}</span>
                </span>
                <span className="text-xs text-text-secondary">{activeLayer === layer.num ? '▼' : '▶'}</span>
              </div>
              {activeLayer === layer.num && (
                <p className="text-xs text-text-secondary mt-2 leading-relaxed animate-fade-in">
                  🔒 {layer.concern}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p>The <strong>CIA Triad</strong> represents the three fundamental goals of information security. Every security control, mechanism, and policy can be mapped back to protecting one or more of these properties.</p>
            <p className="mt-2">The <strong>OSI Security Architecture</strong> maps security concerns to each layer of the OSI networking model, showing that security must be addressed at every level — from physical cable protection to application-level authentication.</p>
          </div>
        )}
      </div>

      <p className="text-xs text-text-secondary text-center">Interactive CIA Triad and OSI Security Architecture visualization</p>
    </div>
  );
}
