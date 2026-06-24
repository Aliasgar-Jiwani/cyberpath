import React, { useState } from 'react';

const topology = [
  { id: 'internet', label: 'Internet', emoji: '🌐', x: 0 },
  { id: 'ext-fw', label: 'External Firewall', emoji: '🛡️', x: 1 },
  { id: 'dmz', label: 'DMZ (Web Server)', emoji: '🖥️', x: 2 },
  { id: 'int-fw', label: 'Internal Firewall', emoji: '🔒', x: 3 },
  { id: 'internal', label: 'Internal Network', emoji: '🏢', x: 4 },
];

const rules = [
  { name: 'HTTP to Web Server', from: 'External', port: 80, action: 'ALLOW through external FW to DMZ' },
  { name: 'SSH from Internal', from: 'Internal', port: 22, action: 'ALLOW through internal FW to DMZ' },
  { name: 'Database Access', from: 'DMZ', port: 3306, action: 'ALLOW DMZ web server to internal DB' },
  { name: 'Direct Internet to Internal', from: 'External', port: 'any', action: 'BLOCK — must go through DMZ' },
];

export default function FirewallVisual() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [packetStep, setPacketStep] = useState(-1);
  const [showHow, setShowHow] = useState(false);

  const sendPacket = () => {
    setPacketStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= topology.length) {
        clearInterval(interval);
        setTimeout(() => setPacketStep(-1), 1000);
      } else {
        setPacketStep(step);
      }
    }, 800);
  };

  const componentInfo = {
    'internet': 'The public internet — untrusted zone. All external traffic originates here.',
    'ext-fw': 'External (perimeter) firewall. Filters incoming traffic from the internet. Allows only specific ports (80, 443) to DMZ.',
    'dmz': 'Demilitarized Zone — hosts public-facing services (web server, mail server). Compromising a DMZ server doesn\'t give direct internal access.',
    'int-fw': 'Internal firewall. Protects the internal network from DMZ. Only allows specific, necessary connections (e.g., database queries).',
    'internal': 'Internal network — databases, workstations, sensitive systems. Most protected zone.',
  };

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Firewall Network Topology</h3>

        {/* Topology */}
        <div className="grid grid-cols-3 sm:flex sm:items-center sm:justify-between w-full max-w-xl mx-auto gap-2 sm:gap-0">
          {topology.map((comp, i) => (
            <React.Fragment key={comp.id}>
              {i > 0 && <span className="text-text-secondary text-lg hidden sm:block">→</span>}
              <button
                onClick={() => setSelectedComponent(selectedComponent === comp.id ? null : comp.id)}
                className={`flex flex-col items-center p-3 rounded-xl border transition-all hover:scale-105 ${
                  selectedComponent === comp.id ? 'border-primary bg-primary-dim' :
                  packetStep === i ? 'border-secondary bg-secondary-dim animate-pulse' : 'border-border bg-surface'
                }`}
              >
                <span className="text-2xl mb-1">{comp.emoji}</span>
                <span className="text-[10px] font-medium text-text-secondary text-center">{comp.label}</span>
              </button>
            </React.Fragment>
          ))}
        </div>

        {/* Component info */}
        {selectedComponent && (
          <div className="bg-surface rounded-xl border border-border p-4 animate-fade-in max-w-lg mx-auto">
            <p className="text-sm text-text-secondary leading-relaxed">
              💡 {componentInfo[selectedComponent]}
            </p>
          </div>
        )}

        {/* Simulate packet */}
        <button onClick={sendPacket} disabled={packetStep >= 0} className="btn-primary text-sm disabled:opacity-50">
          {packetStep >= 0 ? `📦 Packet at: ${topology[packetStep]?.label || '...'}` : '📦 Simulate Packet Flow'}
        </button>

        {/* Firewall rules */}
        <div className="w-full max-w-lg mx-auto bg-bg rounded-xl border border-border overflow-hidden">
          <div className="px-4 py-2 border-b border-border bg-surface">
            <span className="text-xs font-semibold text-text-secondary">Sample Firewall Rules</span>
          </div>
          {rules.map((rule, i) => (
            <div key={i} className="px-4 py-2 border-b border-border/50 last:border-0 text-xs flex items-center gap-3">
              <span className={`px-1.5 py-0.5 rounded font-bold ${rule.action.startsWith('ALLOW') ? 'bg-secondary-dim text-secondary' : 'bg-danger-dim text-danger'}`}>
                {rule.action.startsWith('ALLOW') ? '✓' : '✗'}
              </span>
              <span className="text-text-secondary">{rule.name} — {rule.action}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p>This shows a typical <strong>two-firewall DMZ architecture</strong>. Click each component to learn its role. The "Simulate Packet" button shows a packet flowing from the Internet through each checkpoint.</p>
            <p className="mt-2">The external firewall allows only web traffic to the DMZ. The internal firewall restricts DMZ-to-internal communication to only necessary services (like database queries). Direct internet-to-internal traffic is always blocked.</p>
          </div>
        )}
      </div>
    </div>
  );
}
