import React, { useState } from 'react';

const panels = [
  { title: '1. Client → AS', from: '👤 Client', to: '🏛 Auth Server', arrow: 'I am Alice. I need access.', data: 'Username + request for TGT', color: '#6c63ff' },
  { title: '2. AS → Client', from: '🏛 Auth Server', to: '👤 Client', arrow: 'Here\'s your wristband (TGT)', data: 'TGT (encrypted with TGS key) + Session Key (encrypted with Alice\'s key)', color: '#00d4aa' },
  { title: '3. Client → TGS', from: '👤 Client', to: '🎫 Ticket Server', arrow: 'I have a TGT, need access to File Server', data: 'TGT + Authenticator + Service request', color: '#f7c948' },
  { title: '4. TGS → Client', from: '🎫 Ticket Server', to: '👤 Client', arrow: 'Here\'s your service ticket', data: 'Service Ticket (encrypted with service key) + new Session Key', color: '#00d4aa' },
  { title: '5. Client → Service', from: '👤 Client', to: '🖥 Service', arrow: 'Here\'s my ticket, let me in!', data: 'Service Ticket + Authenticator', color: '#6c63ff' },
  { title: '6. Service → Client', from: '🖥 Service', to: '👤 Client', arrow: 'Welcome, Alice! Access granted.', data: 'Server Authenticator (mutual authentication confirmed)', color: '#00d4aa' },
];

export default function KerberosVisual() {
  const [activePanel, setActivePanel] = useState(0);
  const [showHow, setShowHow] = useState(false);

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Kerberos Authentication Flow</h3>

        {/* Panel */}
        <div className="w-full max-w-lg mx-auto bg-surface rounded-xl border border-border overflow-hidden" key={activePanel}>
          <div className="p-3 border-b border-border bg-bg">
            <span className="text-xs font-semibold" style={{ color: panels[activePanel].color }}>
              {panels[activePanel].title}
            </span>
          </div>
          <div className="p-5 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <span className="text-2xl block">{panels[activePanel].from.split(' ')[0]}</span>
                <span className="text-xs text-text-secondary">{panels[activePanel].from.split(' ').slice(1).join(' ')}</span>
              </div>
              <div className="flex-1 mx-4 text-center">
                <div className="text-xs text-text-secondary italic mb-1">"{panels[activePanel].arrow}"</div>
                <div className="h-0.5 bg-border relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-t-4 border-b-4 border-l-primary border-t-transparent border-b-transparent" />
                </div>
              </div>
              <div className="text-center">
                <span className="text-2xl block">{panels[activePanel].to.split(' ')[0]}</span>
                <span className="text-xs text-text-secondary">{panels[activePanel].to.split(' ').slice(1).join(' ')}</span>
              </div>
            </div>
            <div className="bg-bg rounded-lg p-3 text-xs font-mono text-text-secondary">
              📦 {panels[activePanel].data}
            </div>
          </div>
        </div>

        {/* Step buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {panels.map((_, i) => (
            <button
              key={i}
              onClick={() => setActivePanel(i)}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                i === activePanel ? 'bg-primary text-white' : 'bg-surface border border-border text-text-secondary hover:border-primary'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p>Kerberos authentication has 6 steps across 3 exchanges. The client first authenticates with the AS to get a TGT (like a wristband). Then uses the TGT to request service-specific tickets from the TGS. Finally, presents the service ticket to access the actual service.</p>
            <p className="mt-2">Notice that <strong>passwords are never sent over the network</strong> — only encrypted tickets and session keys!</p>
          </div>
        )}
      </div>
    </div>
  );
}
