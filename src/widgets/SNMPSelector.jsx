import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const scenarios = [
  { text: 'A small home network with 3 devices, no sensitive data, just monitoring uptime.', answer: 'SNMPv1/v2c', explanation: 'Low security risk, simple monitoring needs. SNMPv1/v2c is sufficient for basic home use, though v3 is always preferred.' },
  { text: 'A hospital network managing patient monitoring systems with PHI (Protected Health Information).', answer: 'SNMPv3', explanation: 'Healthcare data requires HIPAA compliance. SNMPv3 with authentication and encryption is mandatory to protect PHI.' },
  { text: 'A bank managing ATM networks across multiple cities with financial transaction data.', answer: 'SNMPv3', explanation: 'Financial networks require the highest security. SNMPv3 with AES encryption and SHA authentication is essential.' },
  { text: 'A university lab monitoring printer status and toner levels on an isolated network.', answer: 'SNMPv1/v2c', explanation: 'Low-risk, isolated environment monitoring non-sensitive data. While v3 is better, v1/v2c is acceptable here.' },
];

export default function SNMPSelector() {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({});

  const handleReset = () => { setAnswers({}); setChecked({}); };

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">SNMP Version Selector</h3>
          <p className="text-sm text-text-secondary">Choose the appropriate SNMP version for each scenario</p>
        </div>
        <button onClick={handleReset} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <div className="space-y-4">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`p-4 rounded-xl border transition-all ${checked[idx] ? (answers[idx] === s.answer ? 'border-secondary bg-secondary-dim/30' : 'border-danger bg-danger-dim/30') : 'border-border bg-bg'}`}>
            <p className="text-sm mb-3 font-medium">{idx + 1}. {s.text}</p>
            <div className="flex items-center gap-2 flex-wrap">
              {['SNMPv1/v2c', 'SNMPv3'].map(opt => (
                <button key={opt} onClick={() => { if (!checked[idx]) setAnswers(p => ({...p, [idx]: opt})); }}
                  disabled={checked[idx]}
                  className={`px-4 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    answers[idx] === opt ? (checked[idx] ? (opt === s.answer ? 'bg-secondary text-bg border-secondary' : 'bg-danger text-white border-danger') : 'bg-primary text-white border-primary')
                    : 'bg-surface border-border text-text-secondary hover:border-primary'}`}>
                  {opt}
                </button>
              ))}
              {answers[idx] && !checked[idx] && (
                <button onClick={() => setChecked(p => ({...p, [idx]: true}))} className="btn-primary text-xs py-1.5 px-3">Check</button>
              )}
            </div>
            {checked[idx] && <p className={`text-xs mt-2 ${answers[idx] === s.answer ? 'text-secondary' : 'text-danger'}`}>{answers[idx] === s.answer ? '✓ ' : '✗ '}{s.explanation}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
