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
      <div className="visual-canvas flex-col gap-6" style={{ overflow: 'hidden' }}>
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Caesar Cipher Encryption</h3>

        {/* Shift control */}
        <div className="flex items-center gap-3 w-full">
          <span className="text-sm text-text-secondary flex-shrink-0">Shift:</span>
          <input
            type="range"
            min="1"
            max="25"
            value={shift}
            onChange={(e) => setShift(Number(e.target.value))}
            className="flex-1 accent-primary min-w-0"
          />
          <span className="font-mono text-primary font-bold w-6 text-center flex-shrink-0">{shift}</span>
        </div>

        {/* Step-by-step flow */}
        <div className="flex flex-col items-center gap-3 w-full">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="text-xl text-text-secondary">↓</span>}
              <div
                className={`w-full p-3 sm:p-4 rounded-xl border text-center transition-all cursor-pointer ${
                  step === i ? 'border-primary bg-primary-dim scale-[1.02]' : 'border-border bg-surface'
                }`}
                onClick={() => setStep(i)}
              >
                <p className="text-xs text-text-secondary uppercase mb-1">{s.label}</p>
                <p className="font-mono font-bold text-base sm:text-lg tracking-widest break-all" style={{ color: s.color }}>
                  {s.value}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Alphabet visualization — Mobile: two-row grid, Desktop: full row */}
        {/* Mobile version: compact grid */}
        <div className="w-full sm:hidden">
          <p className="text-xs text-text-secondary mb-2 text-center">Alphabet Mapping (Shift {shift})</p>
          <div className="grid grid-cols-9 gap-1">
            {alphabet.split('').map((ch, i) => {
              const shiftedChar = alphabet[(i + shift) % 26];
              const isHighlightPlain = plaintext.includes(ch);
              const isHighlightCipher = encrypted.includes(shiftedChar) && isHighlightPlain;
              return (
                <div key={i} className={`flex flex-col items-center rounded-md py-1 ${isHighlightPlain ? 'bg-surface border border-border' : ''}`}>
                  <span className={`text-[10px] font-mono ${isHighlightPlain ? 'text-primary font-bold' : 'text-text-secondary/60'}`}>{ch}</span>
                  <span className="text-[8px] text-text-secondary/40">↓</span>
                  <span className={`text-[10px] font-mono ${isHighlightCipher ? 'text-secondary font-bold' : 'text-text-secondary/60'}`}>{shiftedChar}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop version: full horizontal rows */}
        <div className="w-full hidden sm:block overflow-x-auto">
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
