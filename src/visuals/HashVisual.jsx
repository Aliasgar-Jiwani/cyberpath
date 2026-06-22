import React, { useState, useEffect } from 'react';

// Simple visual hash for demonstration
function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, '0').toUpperCase();
}

export default function HashVisual() {
  const [input, setInput] = useState('Hello World');
  const [hash, setHash] = useState('');
  const [prevHash, setPrevHash] = useState('');
  const [showHow, setShowHow] = useState(false);
  const [isHashing, setIsHashing] = useState(false);

  useEffect(() => {
    const computeHash = async () => {
      setIsHashing(true);
      setPrevHash(hash);
      try {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        setTimeout(() => {
          setHash(hashHex.toUpperCase());
          setIsHashing(false);
        }, 300);
      } catch {
        setHash(simpleHash(input));
        setIsHashing(false);
      }
    };
    computeHash();
  }, [input]);

  // Count different chars between old and new hash
  const diffCount = prevHash ? hash.split('').filter((ch, i) => prevHash[i] !== ch).length : 0;
  const diffPercent = prevHash ? Math.round((diffCount / hash.length) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Hash Function & Avalanche Effect</h3>

        {/* Input */}
        <div className="w-full max-w-md">
          <label className="text-xs text-text-secondary mb-1 block">Input Text</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-text font-mono text-sm focus:border-primary focus:outline-none transition-colors"
            placeholder="Type anything..."
          />
        </div>

        {/* Hash Machine Animation */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-sm text-text-secondary">↓ Input</div>
          <div className={`px-6 py-3 rounded-xl border-2 font-mono text-sm transition-all ${
            isHashing ? 'border-primary bg-primary-dim animate-pulse' : 'border-border bg-surface'
          }`}>
            🔧 SHA-256 Hash Machine
          </div>
          <div className="text-sm text-text-secondary">↓ Output</div>
        </div>

        {/* Hash Output */}
        <div className="w-full bg-bg rounded-xl border border-border p-4 overflow-x-auto">
          <p className="text-xs text-text-secondary mb-2">SHA-256 Hash:</p>
          <p className="font-mono text-xs md:text-sm tracking-wide break-all leading-relaxed">
            {hash.split('').map((ch, i) => (
              <span
                key={i}
                className={`transition-colors duration-300 ${
                  prevHash && prevHash[i] !== ch ? 'text-danger font-bold' : 'text-secondary'
                }`}
              >
                {ch}
              </span>
            ))}
          </p>
        </div>

        {/* Avalanche indicator */}
        {prevHash && diffCount > 0 && (
          <div className="bg-highlight-dim border border-highlight rounded-lg px-4 py-2 text-sm text-highlight animate-fade-in">
            ⚡ Avalanche Effect: <strong>{diffPercent}%</strong> of hash characters changed ({diffCount}/{hash.length})
          </div>
        )}

        <p className="text-xs text-text-secondary">Try changing just one character and watch the hash completely change!</p>
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p>This visualization uses the real <strong>SHA-256</strong> algorithm (via the browser's Web Crypto API) to hash your input text in real time.</p>
            <p className="mt-2">The <strong>avalanche effect</strong> is highlighted by comparing the new hash to the previous one — characters that changed are shown in red. Even a single character change causes ~50% of the hash to change.</p>
          </div>
        )}
      </div>
    </div>
  );
}
