import React, { useState } from 'react';

const devices = [
  { id: 1, name: 'Router', x: 100, y: 30, emoji: '📡' },
  { id: 2, name: 'Switch', x: 220, y: 30, emoji: '🔀' },
  { id: 3, name: 'Server', x: 40, y: 130, emoji: '🖥️' },
  { id: 4, name: 'Printer', x: 280, y: 130, emoji: '🖨️' },
  { id: 5, name: 'Firewall', x: 160, y: 130, emoji: '🛡️' },
];

const mibData = {
  1: { sysName: 'core-router-01', uptime: '45d 12h', interfaces: 24, traffic: '1.2 Gbps' },
  2: { sysName: 'dist-switch-03', uptime: '128d 4h', interfaces: 48, traffic: '680 Mbps' },
  3: { sysName: 'web-server-01', uptime: '12d 8h', interfaces: 4, traffic: '320 Mbps' },
  4: { sysName: 'office-printer', uptime: '3d 1h', interfaces: 1, traffic: '2 Mbps' },
  5: { sysName: 'perimeter-fw', uptime: '90d 0h', interfaces: 8, traffic: '890 Mbps' },
};

export default function SNMPVisual() {
  const [version, setVersion] = useState('v1');
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [showHow, setShowHow] = useState(false);

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">SNMP Network Management</h3>

        {/* Version toggle */}
        <div className="flex items-center gap-2 bg-bg rounded-lg p-1 border border-border">
          <button onClick={() => setVersion('v1')} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${version === 'v1' ? 'bg-danger text-white' : 'text-text-secondary'}`}>
            SNMPv1 (Insecure)
          </button>
          <button onClick={() => setVersion('v3')} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${version === 'v3' ? 'bg-secondary text-bg' : 'text-text-secondary'}`}>
            SNMPv3 (Secure)
          </button>
        </div>

        {/* Network diagram */}
        <div className="relative w-full max-w-sm mx-auto aspect-[3/2]">
          {/* Manager in center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-primary-dim border-2 border-primary flex flex-col items-center justify-center z-10">
            <span className="text-lg">🖥️</span>
            <span className="text-[8px] font-bold text-primary">Manager</span>
          </div>

          {/* Devices */}
          {devices.map((device) => (
            <button
              key={device.id}
              onClick={() => setSelectedDevice(selectedDevice === device.id ? null : device.id)}
              className={`absolute w-14 h-14 rounded-xl flex flex-col items-center justify-center transition-all hover:scale-110 ${
                selectedDevice === device.id ? 'bg-primary-dim border-2 border-primary scale-110' : 'bg-surface border border-border'
              }`}
              style={{ left: `${device.x / 3.2}%`, top: `${device.y / 1.6}%` }}
            >
              <span className="text-base">{device.emoji}</span>
              <span className="text-[7px] text-text-secondary">{device.name}</span>
            </button>
          ))}

          {/* Security indicator */}
          <div className={`absolute bottom-0 left-0 right-0 text-center py-1 rounded-b-xl text-xs font-semibold ${
            version === 'v1' ? 'bg-danger-dim text-danger' : 'bg-secondary-dim text-secondary'
          }`}>
            {version === 'v1' ? '⚠️ community = "public" (PLAINTEXT!)' : '🔒 Authenticated + Encrypted (USM)'}
          </div>
        </div>

        {/* MIB data panel */}
        {selectedDevice && (
          <div className="w-full max-w-sm mx-auto bg-bg rounded-xl border border-border p-4 animate-fade-in">
            <p className="text-xs font-semibold text-primary mb-2">📊 MIB Data — {devices.find(d => d.id === selectedDevice)?.name}</p>
            {Object.entries(mibData[selectedDevice]).map(([key, val]) => (
              <div key={key} className="flex justify-between py-1 text-xs border-b border-border/50 last:border-0">
                <span className="text-text-secondary font-mono">{key}</span>
                <span className="text-text font-mono">{val}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p>The central <strong>Manager</strong> polls each <strong>Agent</strong> device for status information via SNMP GET requests. Click any device to see its MIB data.</p>
            <p className="mt-2">Toggle between SNMPv1 (insecure — community strings in plaintext) and SNMPv3 (secure — authentication + encryption with USM) to see the security difference.</p>
          </div>
        )}
      </div>
    </div>
  );
}
