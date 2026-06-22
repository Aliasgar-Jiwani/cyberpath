import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const scenarios = [
  { text: 'A known SQL injection pattern "1\' OR \'1\'=\'1" is detected in a web request.', detection: 'Signature-based', ids: 'NIDS', explanation: 'This is a well-known attack pattern that matches a signature in the database. NIDS can detect it in network traffic.' },
  { text: 'An employee who normally works 9-5 is accessing sensitive files at 3 AM from an unusual location.', detection: 'Anomaly-based', ids: 'HIDS', explanation: 'This deviates from the user\'s normal behavior profile. HIDS on the server monitoring file access logs would detect this.' },
  { text: 'Network traffic to a specific server suddenly increases 500% with requests matching a known DDoS tool.', detection: 'Signature-based', ids: 'NIDS', explanation: 'The DDoS tool has a known traffic signature. NIDS monitors network traffic and detects the pattern.' },
  { text: 'A process on a server starts modifying system files and creating new admin accounts.', detection: 'Anomaly-based', ids: 'HIDS', explanation: 'This behavior is abnormal for the system. HIDS monitors host-level activity like file changes and account creation.' },
  { text: 'An attacker uses a brand-new zero-day exploit never seen before, but the affected server shows unusual CPU and memory usage.', detection: 'Anomaly-based', ids: 'HIDS', explanation: 'No signature exists for zero-days. Anomaly detection catches the unusual resource consumption. HIDS monitors host performance.' },
];

export default function IDSClassifier() {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({});

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">IDS Classifier</h3>
          <p className="text-sm text-text-secondary">Select detection method and IDS type for each scenario</p>
        </div>
        <button onClick={() => { setAnswers({}); setChecked({}); }} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <div className="space-y-4">
        {scenarios.map((s, idx) => (
          <div key={idx} className={`p-4 rounded-xl border transition-all ${checked[idx] ? 'border-border' : 'border-border bg-bg'}`}>
            <p className="text-sm mb-3 font-medium">{idx + 1}. {s.text}</p>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <p className="text-[10px] text-text-secondary mb-1">Detection Method:</p>
                <div className="flex gap-1">
                  {['Signature-based', 'Anomaly-based'].map(opt => (
                    <button key={opt} onClick={() => { if (!checked[idx]) setAnswers(p => ({...p, [`${idx}-det`]: opt})); }}
                      disabled={checked[idx]}
                      className={`px-2 py-1 rounded text-[10px] font-medium border transition-all ${
                        answers[`${idx}-det`] === opt ? (checked[idx] ? (opt === s.detection ? 'bg-secondary text-bg border-secondary' : 'bg-danger text-white border-danger') : 'bg-primary text-white border-primary')
                        : 'bg-surface border-border text-text-secondary'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] text-text-secondary mb-1">IDS Type:</p>
                <div className="flex gap-1">
                  {['NIDS', 'HIDS'].map(opt => (
                    <button key={opt} onClick={() => { if (!checked[idx]) setAnswers(p => ({...p, [`${idx}-ids`]: opt})); }}
                      disabled={checked[idx]}
                      className={`px-2 py-1 rounded text-[10px] font-medium border transition-all ${
                        answers[`${idx}-ids`] === opt ? (checked[idx] ? (opt === s.ids ? 'bg-secondary text-bg border-secondary' : 'bg-danger text-white border-danger') : 'bg-primary text-white border-primary')
                        : 'bg-surface border-border text-text-secondary'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {answers[`${idx}-det`] && answers[`${idx}-ids`] && !checked[idx] && (
              <button onClick={() => setChecked(p => ({...p, [idx]: true}))} className="btn-primary text-xs py-1 px-3 mt-1">Check</button>
            )}
            {checked[idx] && <p className="text-xs mt-2 text-text-secondary">💡 {s.explanation}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
