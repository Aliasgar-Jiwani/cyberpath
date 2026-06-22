import React, { useState, useEffect } from 'react';

export default function PasswordVisual() {
  const [attackType, setAttackType] = useState('brute');
  const [isRunning, setIsRunning] = useState(false);
  const [attempts, setAttempts] = useState([]);
  const [showHow, setShowHow] = useState(false);

  const brutePasswords = ['aaaa', 'aaab', 'aaac', 'aaad', 'abaa', 'abab', 'abac', 'baba', 'bbbb', 'cccc'];
  const dictPasswords = ['password', '123456', 'admin', 'letmein', 'welcome', 'monkey', 'dragon', 'master', 'qwerty', 'pass123'];

  useEffect(() => {
    if (!isRunning) return;
    const passwords = attackType === 'brute' ? brutePasswords : dictPasswords;
    let i = 0;
    setAttempts([]);
    const interval = setInterval(() => {
      if (i < passwords.length) {
        setAttempts(prev => [...prev, { pwd: passwords[i], status: 'failed' }]);
        i++;
      } else {
        setIsRunning(false);
        clearInterval(interval);
      }
    }, attackType === 'brute' ? 500 : 200);
    return () => clearInterval(interval);
  }, [isRunning, attackType]);

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Password Attack Simulator</h3>

        {/* Attack type selector */}
        <div className="flex items-center gap-2 bg-bg rounded-lg p-1 border border-border flex-wrap">
          {[
            { key: 'brute', label: 'Brute Force' },
            { key: 'dict', label: 'Dictionary' },
            { key: 'phishing', label: 'Phishing' },
          ].map(({ key, label }) => (
            <button key={key} onClick={() => { setAttackType(key); setIsRunning(false); setAttempts([]); }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${attackType === key ? 'bg-danger text-white' : 'text-text-secondary'}`}>
              {label}
            </button>
          ))}
        </div>

        {attackType === 'phishing' ? (
          /* Phishing mockup */
          <div className="w-full max-w-sm mx-auto space-y-3">
            <div className="bg-danger-dim border border-danger rounded-lg p-3 text-xs text-danger">
              ⚠ This is a simulation of a phishing attack!
            </div>
            <div className="bg-bg rounded-xl border border-border p-6">
              <div className="bg-danger-dim rounded-lg px-3 py-1 text-[10px] text-danger mb-3 font-mono">
                🔓 http://bankofamerica.evil-site.com/login
              </div>
              <p className="text-sm font-bold mb-3">Bank of America Login</p>
              <div className="space-y-2">
                <input className="w-full bg-surface border border-border rounded px-3 py-2 text-sm" placeholder="Username" defaultValue="john.doe" readOnly />
                <input className="w-full bg-surface border border-border rounded px-3 py-2 text-sm" type="password" placeholder="Password" defaultValue="MyS3cr3t!" readOnly />
                <div className="bg-danger text-white text-center py-2 rounded text-sm font-semibold">Login</div>
              </div>
              <p className="text-[10px] text-danger mt-2 text-center">⚠ Looks real but the URL is fake! Credentials sent to attacker.</p>
            </div>
          </div>
        ) : (
          /* Brute/Dict attack */
          <div className="w-full max-w-sm mx-auto space-y-3">
            <div className="bg-bg rounded-xl border border-border p-6 text-center">
              <p className="text-sm font-semibold mb-2">🔒 Login Form</p>
              <input className="w-full bg-surface border border-border rounded px-3 py-2 text-sm mb-2 text-center" value="admin" readOnly />
              <input className="w-full bg-surface border border-border rounded px-3 py-2 text-sm mb-3 text-center font-mono" value={attempts.length > 0 ? attempts[attempts.length - 1].pwd : '••••••'} readOnly />
              <button onClick={() => { setAttempts([]); setIsRunning(true); }}
                className={`w-full py-2 rounded text-sm font-semibold transition-all ${isRunning ? 'bg-danger text-white animate-pulse' : 'bg-danger text-white'}`}
                disabled={isRunning}>
                {isRunning ? `Attacking... (${attempts.length} attempts)` : `Launch ${attackType === 'brute' ? 'Brute Force' : 'Dictionary'} Attack`}
              </button>
            </div>

            {/* Attempt log */}
            {attempts.length > 0 && (
              <div className="bg-bg rounded-xl border border-border p-3 max-h-32 overflow-y-auto">
                <p className="text-[10px] font-semibold text-text-secondary mb-1">Attack Log:</p>
                {attempts.map((a, i) => (
                  <div key={i} className="flex justify-between text-[10px] font-mono py-0.5">
                    <span className="text-text-secondary">Try #{i + 1}: "{a.pwd}"</span>
                    <span className="text-danger">✗ Failed</span>
                  </div>
                ))}
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
            <p><strong>Brute Force:</strong> Tries every possible combination systematically. Very slow but guaranteed to find the password eventually.</p>
            <p className="mt-2"><strong>Dictionary Attack:</strong> Uses a list of common passwords. Much faster than brute force but only works if the password is in the list.</p>
            <p className="mt-2"><strong>Phishing:</strong> Creates a fake login page that looks identical to the real one. User unknowingly submits credentials to the attacker.</p>
          </div>
        )}
      </div>
    </div>
  );
}
