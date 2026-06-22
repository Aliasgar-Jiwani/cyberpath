import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const correctOrder = [
  'Sign the message (hash + encrypt with sender\'s private key)',
  'Compress the signed message (ZIP)',
  'Generate a random session key',
  'Encrypt the message with the session key (symmetric)',
  'Encrypt the session key with recipient\'s public key',
  'Encode the result in Base64 (radix-64) for email',
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

export default function PGPSequencer() {
  const [items, setItems] = useState(() => shuffle(correctOrder));
  const [checked, setChecked] = useState(false);

  const moveUp = (idx) => { if (idx === 0 || checked) return; const n = [...items]; [n[idx-1], n[idx]] = [n[idx], n[idx-1]]; setItems(n); };
  const moveDown = (idx) => { if (idx === items.length-1 || checked) return; const n = [...items]; [n[idx], n[idx+1]] = [n[idx+1], n[idx]]; setItems(n); };

  const isCorrect = items.every((item, i) => item === correctOrder[i]);

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">PGP Step Sequencer</h3>
          <p className="text-sm text-text-secondary">Arrange PGP message processing steps in order</p>
        </div>
        <button onClick={() => { setItems(shuffle(correctOrder)); setChecked(false); }} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Shuffle
        </button>
      </div>

      <div className="space-y-2 mb-4">
        {items.map((item, idx) => {
          const isRight = checked && idx === correctOrder.indexOf(item);
          const isWrong = checked && idx !== correctOrder.indexOf(item);
          return (
            <div key={item} className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${isRight ? 'border-secondary bg-secondary-dim/30' : isWrong ? 'border-danger bg-danger-dim/30' : 'border-border bg-bg'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${isRight ? 'bg-secondary text-bg' : isWrong ? 'bg-danger text-white' : 'bg-surface text-text-secondary'}`}>{idx + 1}</span>
              <span className="text-sm flex-1">{item}</span>
              {!checked && (
                <div className="flex flex-col gap-0.5">
                  <button onClick={() => moveUp(idx)} disabled={idx === 0} className="text-xs text-text-secondary hover:text-primary disabled:opacity-20">▲</button>
                  <button onClick={() => moveDown(idx)} disabled={idx === items.length - 1} className="text-xs text-text-secondary hover:text-primary disabled:opacity-20">▼</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button onClick={() => setChecked(true)} disabled={checked} className="btn-primary w-full disabled:opacity-50">Check Order</button>
      {checked && (
        <div className={`mt-4 p-4 rounded-xl text-center animate-scale-in ${isCorrect ? 'bg-secondary-dim text-secondary' : 'bg-highlight-dim text-highlight'}`}>
          {isCorrect ? '🎉 Perfect! You know the PGP flow!' : `${items.filter((item, i) => item === correctOrder[i]).length}/6 correct. Remember: Sign → Compress → Encrypt → Encode`}
        </div>
      )}
    </div>
  );
}
