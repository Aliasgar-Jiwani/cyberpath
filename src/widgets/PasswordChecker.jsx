import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

export default function PasswordChecker() {
  const [password, setPassword] = useState('');

  const checks = {
    length: password.length >= 12,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    numbers: /[0-9]/.test(password),
    symbols: /[^A-Za-z0-9]/.test(password),
    noCommon: !['password', '123456', 'qwerty', 'admin', 'letmein', 'welcome'].includes(password.toLowerCase()),
  };

  const score = Object.values(checks).filter(Boolean).length;
  const entropy = password.length * Math.log2(
    (checks.lowercase ? 26 : 0) + (checks.uppercase ? 26 : 0) + (checks.numbers ? 10 : 0) + (checks.symbols ? 33 : 0) || 1
  );

  const bruteForceTime = () => {
    if (entropy <= 0) return 'Instant';
    const guessesPerSecond = 1e10;
    const totalGuesses = Math.pow(2, entropy);
    const seconds = totalGuesses / guessesPerSecond;
    if (seconds < 1) return 'Less than a second';
    if (seconds < 60) return `${Math.round(seconds)} seconds`;
    if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
    if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
    if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
    if (seconds < 31536000 * 1000) return `${Math.round(seconds / 31536000)} years`;
    if (seconds < 31536000 * 1e6) return `${Math.round(seconds / (31536000 * 1000))} thousand years`;
    if (seconds < 31536000 * 1e9) return `${Math.round(seconds / (31536000 * 1e6))} million years`;
    return `${(seconds / (31536000 * 1e9)).toExponential(1)} billion years`;
  };

  const strength = score <= 2 ? 'Weak' : score <= 3 ? 'Fair' : score <= 4 ? 'Strong' : 'Very Strong';
  const strengthColor = score <= 2 ? 'text-danger' : score <= 3 ? 'text-highlight' : score <= 4 ? 'text-primary' : 'text-secondary';
  const barColor = score <= 2 ? 'bg-danger' : score <= 3 ? 'bg-highlight' : score <= 4 ? 'bg-primary' : 'bg-secondary';

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">Password Strength Checker</h3>
          <p className="text-sm text-text-secondary">Type a password — all analysis is 100% client-side</p>
        </div>
        <button onClick={() => setPassword('')} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="Type a password..."
        className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-text font-mono text-base focus:border-primary focus:outline-none mb-4" />

      {password.length > 0 && (
        <div className="space-y-4 animate-fade-in">
          {/* Strength meter */}
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm text-text-secondary">Strength:</span>
              <span className={`text-sm font-bold ${strengthColor}`}>{strength}</span>
            </div>
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              <div className={`h-full rounded-full transition-all duration-500 ${barColor}`} style={{ width: `${(score / 6) * 100}%` }} />
            </div>
          </div>

          {/* Checks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              { key: 'length', label: '12+ characters' },
              { key: 'uppercase', label: 'Uppercase (A-Z)' },
              { key: 'lowercase', label: 'Lowercase (a-z)' },
              { key: 'numbers', label: 'Numbers (0-9)' },
              { key: 'symbols', label: 'Symbols (!@#$)' },
              { key: 'noCommon', label: 'Not a common password' },
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center gap-2 text-xs">
                <span className={checks[key] ? 'text-secondary' : 'text-danger'}>{checks[key] ? '✓' : '✗'}</span>
                <span className="text-text-secondary">{label}</span>
              </div>
            ))}
          </div>

          {/* Entropy */}
          <div className="bg-bg rounded-lg border border-border p-3 text-sm">
            <div className="flex justify-between"><span className="text-text-secondary">Entropy:</span><span className="font-mono">{entropy.toFixed(1)} bits</span></div>
            <div className="flex justify-between mt-1"><span className="text-text-secondary">Brute-force time:</span><span className={`font-mono font-bold ${strengthColor}`}>{bruteForceTime()}</span></div>
            <p className="text-[10px] text-text-secondary mt-1">Assuming 10 billion guesses/second</p>
          </div>

          <div className="bg-primary-dim border border-primary rounded-lg p-3 text-xs text-primary">
            🔒 This password never leaves your browser. All analysis is performed client-side.
          </div>
        </div>
      )}
    </div>
  );
}
