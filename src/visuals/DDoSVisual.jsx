import React, { useState, useEffect } from 'react';

export default function DDoSVisual() {
  const [ddosActive, setDdosActive] = useState(false);
  const [mitigationActive, setMitigationActive] = useState(false);
  const [trafficCount, setTrafficCount] = useState(0);
  const [showHow, setShowHow] = useState(false);

  useEffect(() => {
    if (!ddosActive) { setTrafficCount(0); return; }
    const interval = setInterval(() => {
      setTrafficCount(c => c + (ddosActive ? 50 : 1));
    }, 200);
    return () => clearInterval(interval);
  }, [ddosActive]);

  const serverStatus = !ddosActive ? 'online' : mitigationActive ? 'protected' : 'overloaded';

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">DDoS Attack & Mitigation</h3>

        {/* Visual */}
        <div className="w-full max-w-lg mx-auto">
          <svg viewBox="0 0 400 200" className="w-full">
            {/* Legitimate user */}
            <g transform="translate(20, 80)">
              <rect width="40" height="30" rx="4" fill="#1a1d27" stroke="#00d4aa" strokeWidth="1.5" />
              <text x="20" y="18" textAnchor="middle" fill="#00d4aa" fontSize="7" fontFamily="monospace">User</text>
            </g>

            {/* Botnet nodes */}
            {ddosActive && [
              { x: 10, y: 10 }, { x: 60, y: 5 }, { x: 110, y: 15 },
              { x: 10, y: 160 }, { x: 60, y: 170 }, { x: 110, y: 155 },
            ].map((pos, i) => (
              <g key={i} transform={`translate(${pos.x}, ${pos.y})`}>
                <rect width="25" height="18" rx="3" fill="#ff475722" stroke="#ff4757" strokeWidth="1">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="0.5s" repeatCount="indefinite" />
                </rect>
                <text x="12" y="12" textAnchor="middle" fill="#ff4757" fontSize="5" fontFamily="monospace">BOT</text>
              </g>
            ))}

            {/* Traffic arrows */}
            {ddosActive && !mitigationActive && (
              <g>
                {[30, 60, 90, 120, 150].map((y, i) => (
                  <line key={i} x1="140" y1={y} x2="250" y2="100" stroke="#ff4757" strokeWidth="1.5" opacity="0.5">
                    <animate attributeName="x1" values="140;250" dur={`${0.3 + i * 0.1}s`} repeatCount="indefinite" />
                  </line>
                ))}
              </g>
            )}

            {/* Legitimate traffic */}
            <line x1="60" y1="95" x2="250" y2="100" stroke="#00d4aa" strokeWidth="1.5" strokeDasharray="4">
              {serverStatus === 'overloaded' && <animate attributeName="opacity" values="1;0.1;1" dur="0.5s" repeatCount="indefinite" />}
            </line>

            {/* Mitigation filter */}
            {mitigationActive && ddosActive && (
              <g transform="translate(180, 60)">
                <rect width="40" height="80" rx="6" fill="#00d4aa22" stroke="#00d4aa" strokeWidth="1.5" />
                <text x="20" y="30" textAnchor="middle" fill="#00d4aa" fontSize="6" fontFamily="monospace">FILTER</text>
                <text x="20" y="42" textAnchor="middle" fill="#00d4aa" fontSize="5" fontFamily="monospace">🛡️</text>
                <text x="20" y="55" textAnchor="middle" fill="#ff4757" fontSize="4" fontFamily="monospace">✗ Bad</text>
                <text x="20" y="65" textAnchor="middle" fill="#00d4aa" fontSize="4" fontFamily="monospace">✓ Good</text>
              </g>
            )}

            {/* Server */}
            <g transform="translate(260, 75)">
              <rect width="60" height="50" rx="6" fill="#1a1d27" stroke={
                serverStatus === 'online' ? '#00d4aa' : serverStatus === 'protected' ? '#00d4aa' : '#ff4757'
              } strokeWidth="2">
                {serverStatus === 'overloaded' && <animate attributeName="stroke" values="#ff4757;#ff8800;#ff4757" dur="0.4s" repeatCount="indefinite" />}
              </rect>
              <text x="30" y="25" textAnchor="middle" fill="#e8eaf0" fontSize="14">🖥️</text>
              <text x="30" y="42" textAnchor="middle" fill={serverStatus === 'overloaded' ? '#ff4757' : '#00d4aa'} fontSize="6" fontFamily="monospace">
                {serverStatus === 'online' ? 'ONLINE' : serverStatus === 'protected' ? 'PROTECTED' : 'OVERLOADED'}
              </text>
            </g>

            {/* User message */}
            {serverStatus === 'overloaded' && (
              <text x="40" y="130" fill="#ff4757" fontSize="7" fontFamily="monospace">
                ⚠ Connection Timed Out
              </text>
            )}
          </svg>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-4 text-sm">
          <span>Traffic: <strong className={trafficCount > 1000 && !mitigationActive ? 'text-danger' : 'text-secondary'}>{trafficCount} req/s</strong></span>
          <span>Server: <strong className={serverStatus === 'overloaded' ? 'text-danger' : 'text-secondary'}>{serverStatus.toUpperCase()}</strong></span>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button onClick={() => { setDdosActive(!ddosActive); setMitigationActive(false); }}
            className={ddosActive ? 'btn-outline text-sm' : 'btn-danger text-sm'}>
            {ddosActive ? '⏹ Stop DDoS' : '💥 Launch DDoS'}
          </button>
          {ddosActive && (
            <button onClick={() => setMitigationActive(!mitigationActive)}
              className={mitigationActive ? 'btn-outline text-sm' : 'btn-secondary text-sm'}>
              {mitigationActive ? '🛡️ Mitigation ON' : '🛡️ Enable Mitigation'}
            </button>
          )}
        </div>
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p>Click <strong>"Launch DDoS"</strong> to see botnet nodes flood the server with traffic. The legitimate user gets "Connection Timed Out".</p>
            <p className="mt-2">Then click <strong>"Enable Mitigation"</strong> — a traffic filter appears that blocks malicious traffic and lets legitimate traffic through. The server recovers!</p>
          </div>
        )}
      </div>
    </div>
  );
}
