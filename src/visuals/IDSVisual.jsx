import React, { useState, useEffect } from 'react';

const fakeEvents = [
  { time: '14:32:05', src: '192.168.1.45', dst: '10.0.0.5', action: 'SSH Login', risk: 'Low', type: 'normal' },
  { time: '14:32:07', src: '10.0.0.12', dst: '10.0.0.1', action: 'HTTPS GET /api/users', risk: 'Low', type: 'normal' },
  { time: '14:32:08', src: '203.0.113.42', dst: '10.0.0.5', action: '⚠ 500 Failed Login Attempts/min', risk: 'HIGH', type: 'alert' },
  { time: '14:32:10', src: '10.0.0.8', dst: '10.0.0.20', action: 'DNS Query google.com', risk: 'Low', type: 'normal' },
  { time: '14:32:11', src: '198.51.100.7', dst: '10.0.0.5', action: 'Port Scan Detected (1-1024)', risk: 'HIGH', type: 'alert' },
  { time: '14:32:12', src: '10.0.0.15', dst: '10.0.0.1', action: 'HTTPS POST /login', risk: 'Med', type: 'normal' },
  { time: '14:32:14', src: '10.0.0.3', dst: '10.0.0.99', action: '⚠ Unusual Data Exfil (2.3GB)', risk: 'HIGH', type: 'alert' },
  { time: '14:32:15', src: '10.0.0.22', dst: '10.0.0.1', action: 'HTTP GET /index.html', risk: 'Low', type: 'normal' },
];

export default function IDSVisual() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [scrollIdx, setScrollIdx] = useState(0);
  const [showHow, setShowHow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIdx(i => (i + 1) % fakeEvents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const visibleEvents = [...fakeEvents.slice(scrollIdx), ...fakeEvents.slice(0, scrollIdx)].slice(0, 6);

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-4">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Network Security Dashboard (NIDS)</h3>

        <div className="w-full bg-bg rounded-xl border border-border overflow-hidden overflow-x-auto -webkit-overflow-scrolling-touch">
          {/* Dashboard header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-surface">
            <span className="text-xs font-mono text-text-secondary">LIVE FEED</span>
            <span className="flex items-center gap-1 text-xs">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Monitoring
            </span>
          </div>

          {/* Event list */}
          <div className="divide-y divide-border/50">
            {visibleEvents.map((event, i) => (
              <button
                key={`${event.time}-${i}`}
                onClick={() => setSelectedEvent(event)}
                className={`w-full text-left px-4 py-2 text-xs hover:bg-surface-hover transition-all ${
                  event.type === 'alert' ? 'bg-danger-dim/30' : ''
                } ${i === 0 ? 'animate-fade-in' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-text-secondary w-16">{event.time}</span>
                  <span className="font-mono text-text-secondary w-24 truncate">{event.src}</span>
                  <span className="text-text-secondary">→</span>
                  <span className="font-mono text-text-secondary w-16 truncate">{event.dst}</span>
                  <span className={`flex-1 truncate ${event.type === 'alert' ? 'text-danger font-semibold' : 'text-text-secondary'}`}>
                    {event.action}
                  </span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    event.risk === 'HIGH' ? 'bg-danger text-white' : event.risk === 'Med' ? 'bg-highlight text-bg' : 'bg-border text-text-secondary'
                  }`}>
                    {event.risk}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        {selectedEvent && (
          <div className="w-full bg-surface rounded-xl border border-border p-4 animate-fade-in">
            <h4 className="text-xs font-semibold text-primary mb-3">Event Details</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div><span className="text-text-secondary">Source IP:</span> <span className="font-mono">{selectedEvent.src}</span></div>
              <div><span className="text-text-secondary">Dest IP:</span> <span className="font-mono">{selectedEvent.dst}</span></div>
              <div><span className="text-text-secondary">Action:</span> <span>{selectedEvent.action}</span></div>
              <div><span className="text-text-secondary">Risk Level:</span> <span className={selectedEvent.risk === 'HIGH' ? 'text-danger font-bold' : ''}>{selectedEvent.risk}</span></div>
            </div>
            {selectedEvent.type === 'alert' && (
              <div className="mt-3 p-2 bg-danger-dim rounded-lg text-xs text-danger">
                ⚠ This event was flagged by the IDS as a potential intrusion attempt.
              </div>
            )}
          </div>
        )}
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p>This simulates a <strong>Network IDS (NIDS)</strong> dashboard showing live network events. Events highlighted in red are potential threats detected by the IDS.</p>
            <p className="mt-2">Click any event to see its details. In a real NIDS, analysts would investigate these alerts to determine if they represent actual attacks or false positives.</p>
          </div>
        )}
      </div>
    </div>
  );
}
