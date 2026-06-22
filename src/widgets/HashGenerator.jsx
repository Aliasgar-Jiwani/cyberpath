import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

export default function HashGenerator() {
  const [input, setInput] = useState('Hello World');
  const [hash, setHash] = useState('');

  useEffect(() => {
    const compute = async () => {
      try {
        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        setHash(hashArray.map(b => b.toString(16).padStart(2, '0')).join(''));
      } catch {
        let h = 0;
        for (let i = 0; i < input.length; i++) { h = ((h << 5) - h) + input.charCodeAt(i); h &= h; }
        setHash(Math.abs(h).toString(16).padStart(16, '0'));
      }
    };
    compute();
  }, [input]);

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">Live SHA-256 Hash Generator</h3>
          <p className="text-sm text-text-secondary">Type text and watch the hash change in real time</p>
        </div>
        <button onClick={() => setInput('Hello World')} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs text-text-secondary mb-1 block">Input Text</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} rows={3}
            className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-text font-mono text-sm focus:border-primary focus:outline-none resize-none" />
        </div>

        <div className="bg-bg rounded-xl border border-border p-4">
          <p className="text-xs text-text-secondary mb-2">SHA-256 Hash Output:</p>
          <p className="font-mono text-xs text-secondary break-all leading-relaxed">{hash}</p>
          <p className="text-xs text-text-secondary mt-2">Length: {hash.length} hex chars = {hash.length * 4} bits</p>
        </div>

        <div className="bg-highlight-dim border border-highlight rounded-lg p-3 text-sm text-highlight">
          💡 Try changing just ONE letter and see how the entire hash changes completely! This is the <strong>avalanche effect</strong>.
        </div>
      </div>
    </div>
  );
}
