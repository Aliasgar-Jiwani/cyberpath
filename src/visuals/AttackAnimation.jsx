import React, { useState, useEffect } from 'react';

export default function AttackAnimation() {
  const [mode, setMode] = useState('passive');
  const [animStep, setAnimStep] = useState(0);
  const [showHow, setShowHow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimStep(s => (s + 1) % 4);
    }, 1200);
    return () => clearInterval(interval);
  }, [mode]);

  const packetX = 30 + animStep * 50;

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-4">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Network Attack Visualization</h3>

        {/* Toggle */}
        <div className="flex items-center gap-2 bg-bg rounded-lg p-1 border border-border">
          <button
            onClick={() => { setMode('passive'); setAnimStep(0); }}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${mode === 'passive' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text'}`}
          >
            Passive Attack
          </button>
          <button
            onClick={() => { setMode('active'); setAnimStep(0); }}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${mode === 'active' ? 'bg-danger text-white' : 'text-text-secondary hover:text-text'}`}
          >
            Active Attack
          </button>
        </div>

        {/* Animation */}
        <div className="relative w-full max-w-lg mx-auto">
          <svg viewBox="0 0 300 160" className="w-full">
            {/* Computers */}
            <rect x="10" y="50" width="40" height="30" rx="4" fill="#1a1d27" stroke="#6c63ff" strokeWidth="1.5" />
            <text x="30" y="70" textAnchor="middle" fill="#e8eaf0" fontSize="8" fontFamily="monospace">Alice</text>

            <rect x="250" y="50" width="40" height="30" rx="4" fill="#1a1d27" stroke="#6c63ff" strokeWidth="1.5" />
            <text x="270" y="70" textAnchor="middle" fill="#e8eaf0" fontSize="8" fontFamily="monospace">Bob</text>

            {/* Connection line */}
            <line x1="50" y1="65" x2="250" y2="65" stroke="#2a2d3e" strokeWidth="2" strokeDasharray="4" />

            {/* Moving packet */}
            <rect x={packetX} y="56" width="20" height="18" rx="3" fill="#6c63ff44" stroke="#6c63ff" strokeWidth="1">
              <animate attributeName="opacity" values="1;0.6;1" dur="0.6s" repeatCount="indefinite" />
            </rect>
            <text x={packetX + 10} y="68" textAnchor="middle" fill="#6c63ff" fontSize="6" fontFamily="monospace">MSG</text>

            {/* Attacker */}
            <g transform="translate(130, 110)">
              <rect x="0" y="0" width="40" height="30" rx="4" fill="#1a1d27" stroke={mode === 'passive' ? '#f7c948' : '#ff4757'} strokeWidth="1.5" />
              <text x="20" y="15" textAnchor="middle" fill={mode === 'passive' ? '#f7c948' : '#ff4757'} fontSize="7" fontFamily="monospace">
                {mode === 'passive' ? '👁 Eve' : '✏ Eve'}
              </text>
              <text x="20" y="25" textAnchor="middle" fill="#8b8fa8" fontSize="5" fontFamily="monospace">Attacker</text>
            </g>

            {/* Eavesdrop line */}
            <line x1="150" y1="74" x2="150" y2="110" stroke={mode === 'passive' ? '#f7c948' : '#ff4757'} strokeWidth="1" strokeDasharray="3" opacity="0.6" />

            {mode === 'passive' && (
              <text x="150" y="100" textAnchor="middle" fill="#f7c948" fontSize="6" fontFamily="monospace">
                copying silently...
              </text>
            )}

            {mode === 'active' && animStep >= 2 && (
              <>
                <rect x={packetX} y="56" width="20" height="18" rx="3" fill="#ff475744" stroke="#ff4757" strokeWidth="1" />
                <text x={packetX + 10} y="68" textAnchor="middle" fill="#ff4757" fontSize="6" fontFamily="monospace">MOD</text>
                <text x="150" y="100" textAnchor="middle" fill="#ff4757" fontSize="6" fontFamily="monospace">
                  modifying message!
                </text>
              </>
            )}
          </svg>
        </div>

        <div className={`text-center text-sm px-4 py-2 rounded-lg ${
          mode === 'passive' ? 'bg-highlight-dim text-highlight' : 'bg-danger-dim text-danger'
        }`}>
          {mode === 'passive'
            ? '👁 Passive: Eve silently reads/copies data without Alice or Bob knowing'
            : '✏ Active: Eve intercepts and modifies the message before forwarding it'}
        </div>
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p><strong>Passive attacks</strong> monitor communications without interfering. The attacker copies data or analyzes traffic patterns. Detection is very difficult because no data is modified.</p>
            <p className="mt-2"><strong>Active attacks</strong> modify data in transit, inject false data, or disrupt services. They are easier to detect but harder to prevent entirely.</p>
          </div>
        )}
      </div>

      <p className="text-xs text-text-secondary text-center">Toggle between passive and active attack modes to see different attacker behaviors</p>
    </div>
  );
}
