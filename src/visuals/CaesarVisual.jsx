import React, { useState } from 'react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function CaesarVisual() {
  const [shift, setShift] = useState(3);
  const [step, setStep] = useState(0);
  const [showHow, setShowHow] = useState(false);

  const plaintext = 'HELLO';
  const encrypted = plaintext.split('').map(ch => {
    const idx = alphabet.indexOf(ch);
    return idx >= 0 ? alphabet[(idx + shift) % 26] : ch;
  }).join('');

  const steps = [
    { label: 'Plaintext', value: plaintext, color: '#6c63ff' },
    { label: 'Apply Key (Shift ' + shift + ')', value: `Each letter shifts ${shift} positions`, color: '#f7c948' },
    { label: 'Ciphertext', value: encrypted, color: '#00d4aa' },
  ];

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Caesar Cipher Encryption</h3>

        {/* Shift control */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-text-secondary">Shift:</span>
          <input
            type="range"
            min="1"
            max="25"
            value={shift}
            onChange={(e) => setShift(Number(e.target.value))}
            className="flex-1 accent-primary"
          />
          <span className="font-mono text-primary font-bold w-6 text-center">{shift}</span>
        </div>

        {/* Step-by-step flow */}
        <div className="flex flex-col md:flex-row items-center gap-3 w-full">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="text-2xl text-text-secondary hidden md:block">→</span>}
              {i > 0 && <span className="text-xl text-text-secondary md:hidden">↓</span>}
              <div
                className={`flex-1 w-full p-4 rounded-xl border text-center transition-all cursor-pointer ${
                  step === i ? 'border-primary bg-primary-dim scale-105' : 'border-border bg-surface'
                }`}
                onClick={() => setStep(i)}
              >
                <p className="text-xs text-text-secondary uppercase mb-1">{s.label}</p>
                <p className="font-mono font-bold text-lg tracking-widest" style={{ color: s.color }}>
                  {s.value}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Alphabet visualization */}
        <div className="w-full overflow-x-auto">
          <div className="space-y-2 min-w-[500px]">
            <div className="flex gap-0.5">
              <span className="text-xs text-text-secondary w-14 flex-shrink-0">Plain:</span>
              {alphabet.split('').map((ch, i) => (
                <span key={i} className={`w-6 h-7 flex items-center justify-center text-xs font-mono rounded ${
                  plaintext.includes(ch) ? 'bg-primary-dim text-primary font-bold' : 'text-text-secondary'
                }`}>
                  {ch}
                </span>
              ))}
            </div>
            <div className="flex gap-0.5">
              <span className="text-xs text-text-secondary w-14 flex-shrink-0">Cipher:</span>
              {alphabet.split('').map((ch, i) => {
                const shiftedChar = alphabet[(i + shift) % 26];
                return (
                  <span key={i} className={`w-6 h-7 flex items-center justify-center text-xs font-mono rounded ${
                    encrypted.includes(shiftedChar) && plaintext.includes(ch) ? 'bg-secondary-dim text-secondary font-bold' : 'text-text-secondary'
                  }`}>
                    {shiftedChar}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p>The Caesar Cipher shifts each letter by a fixed amount. With shift 3: A→D, B→E, ..., X→A, Y→B, Z→C. It wraps around at Z.</p>
            <p className="mt-2">Drag the shift slider to see how different shift values produce different ciphertexts. The two alphabet rows show the mapping.</p>
          </div>
        )}
      </div>
    </div>
  );
}
