import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const scenarios = [
  { text: 'An attacker silently monitors Wi-Fi traffic at a café to collect unencrypted passwords.', type: 'Passive', subtype: 'Release of Message Contents', explanation: 'Reading data without modification is passive — specifically, reading actual content is "release of message contents."' },
  { text: 'A hacker intercepts an authentication token and replays it to gain unauthorized access.', type: 'Active', subtype: 'Replay', explanation: 'Capturing and re-transmitting data to produce unauthorized effects is a replay attack (active).' },
  { text: 'An attacker floods a web server with millions of fake requests, making it unavailable.', type: 'Active', subtype: 'Denial of Service', explanation: 'Disrupting service availability is a DoS attack — an active attack.' },
  { text: 'An attacker observes encrypted email metadata (sender, receiver, timing) without reading content.', type: 'Passive', subtype: 'Traffic Analysis', explanation: 'Analyzing communication patterns (even encrypted) without altering data is passive traffic analysis.' },
  { text: 'An employee spoofs the CEO\'s email address to trick the finance team into wiring money.', type: 'Active', subtype: 'Masquerade', explanation: 'Pretending to be another entity (the CEO) is a masquerade attack — an active attack.' },
];

export default function AttackIdentifier() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});

  const handleReset = () => { setAnswers({}); setSubmitted({}); };

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">Attack Identifier</h3>
          <p className="text-sm text-text-secondary">Classify each scenario as Passive or Active attack</p>
        </div>
        <button onClick={handleReset} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <div className="space-y-4">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`p-4 rounded-xl border transition-all ${
            submitted[idx] ? (answers[idx] === s.type ? 'border-secondary bg-secondary-dim/30' : 'border-danger bg-danger-dim/30') : 'border-border bg-bg'
          }`}>
            <p className="text-sm mb-3 font-medium">{idx + 1}. {s.text}</p>
            <div className="flex items-center gap-2 flex-wrap">
              {['Passive', 'Active'].map(opt => (
                <button key={opt} onClick={() => { if (!submitted[idx]) setAnswers(p => ({ ...p, [idx]: opt })); }}
                  disabled={submitted[idx]}
                  className={`px-4 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    answers[idx] === opt
                      ? submitted[idx]
                        ? opt === s.type ? 'bg-secondary text-bg border-secondary' : 'bg-danger text-white border-danger'
                        : 'bg-primary text-white border-primary'
                      : 'bg-surface border-border text-text-secondary hover:border-primary'
                  }`}>
                  {opt}
                </button>
              ))}
              {answers[idx] && !submitted[idx] && (
                <button onClick={() => setSubmitted(p => ({ ...p, [idx]: true }))} className="btn-primary text-xs py-1.5 px-3">Check</button>
              )}
            </div>
            {submitted[idx] && (
              <div className={`text-xs mt-2 ${answers[idx] === s.type ? 'text-secondary' : 'text-danger'}`}>
                <p>{answers[idx] === s.type ? '✓ Correct!' : '✗ Incorrect.'} {s.explanation}</p>
                <p className="text-text-secondary mt-1">Sub-type: <span className="text-highlight">{s.subtype}</span></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
