import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function CaesarCipher() {
  const [input, setInput] = useState('HELLO WORLD');
  const [shift, setShift] = useState(3);
  const [mode, setMode] = useState('encrypt');

  const process = (text, shiftVal, decrypt = false) => {
    const s = decrypt ? (26 - shiftVal) % 26 : shiftVal;
    return text.toUpperCase().split('').map(ch => {
      const idx = alphabet.indexOf(ch);
      if (idx === -1) return ch;
      return alphabet[(idx + s) % 26];
    }).join('');
  };

  const output = process(input, shift, mode === 'decrypt');

  return (
    <div className="widget-container" style={{ overflow: 'hidden' }}>
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="min-w-0">
          <h3 className="font-bold text-base">Caesar Cipher Tool</h3>
          <p className="text-sm text-text-secondary">Encrypt or decrypt text using the Caesar cipher</p>
        </div>
        <button onClick={() => { setInput('HELLO WORLD'); setShift(3); }} className="btn-outline text-xs flex items-center gap-1 flex-shrink-0">
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Mode toggle */}
      <div className="flex items-center gap-2 mb-4">
        <button onClick={() => setMode('encrypt')} className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === 'encrypt' ? 'bg-primary text-white' : 'bg-surface border border-border text-text-secondary'}`}>
          🔒 Encrypt
        </button>
        <button onClick={() => setMode('decrypt')} className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === 'decrypt' ? 'bg-secondary text-bg' : 'bg-surface border border-border text-text-secondary'}`}>
          🔓 Decrypt
        </button>
      </div>

      {/* Input */}
      <div className="space-y-3 mb-4">
        <div>
          <label className="text-xs text-text-secondary mb-1 block">Input Text</label>
          <input type="text" value={input} onChange={e => setInput(e.target.value.toUpperCase())}
            className="w-full bg-bg border border-border rounded-lg px-3 sm:px-4 py-2.5 text-text font-mono text-sm focus:border-primary focus:outline-none" />
        </div>
        <div>
          <label className="text-xs text-text-secondary mb-1 block">Shift Value: <span className="text-primary font-bold">{shift}</span></label>
          <input type="range" min="1" max="25" value={shift} onChange={e => setShift(Number(e.target.value))} className="w-full accent-primary" />
        </div>
      </div>

      {/* Output */}
      <div className="bg-bg rounded-xl border border-border p-3 sm:p-4 mb-4">
        <p className="text-xs text-text-secondary mb-2">{mode === 'encrypt' ? '🔒 Encrypted' : '🔓 Decrypted'} Output:</p>
        <p className="font-mono text-base sm:text-lg tracking-widest text-secondary font-bold break-all">{output}</p>
      </div>

      {/* Alphabet mapping — Mobile: compact grid, Desktop: horizontal rows */}
      {/* Mobile version */}
      <div className="bg-bg rounded-xl border border-border p-3 sm:hidden">
        <p className="text-xs text-text-secondary mb-2">Alphabet Mapping (Shift {shift}):</p>
        <div className="grid grid-cols-9 gap-1">
          {alphabet.split('').map((ch, i) => {
            const shifted = alphabet[(i + shift) % 26];
            return (
              <div key={i} className="flex flex-col items-center rounded py-0.5">
                <span className="text-[10px] font-mono text-text-secondary">{ch}</span>
                <span className="text-[8px] text-primary">↓</span>
                <span className="text-[10px] font-mono text-secondary font-bold">{shifted}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop version */}
      <div className="bg-bg rounded-xl border border-border p-4 overflow-x-auto hidden sm:block">
        <p className="text-xs text-text-secondary mb-2">Alphabet Mapping (Shift {shift}):</p>
        <div className="space-y-1 min-w-[500px]">
          <div className="flex gap-0.5">
            {alphabet.split('').map((ch, i) => (
              <span key={i} className="w-5 h-6 flex items-center justify-center text-[10px] font-mono text-text-secondary">{ch}</span>
            ))}
          </div>
          <div className="flex gap-0.5">
            {alphabet.split('').map((ch, i) => (
              <span key={i} className="w-5 h-6 flex items-center justify-center text-[10px] font-mono text-primary">↓</span>
            ))}
          </div>
          <div className="flex gap-0.5">
            {alphabet.split('').map((ch, i) => (
              <span key={i} className="w-5 h-6 flex items-center justify-center text-[10px] font-mono text-secondary font-bold">
                {alphabet[(i + shift) % 26]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
