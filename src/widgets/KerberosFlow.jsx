import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const correctOrder = [
  'Client sends username to Authentication Server (AS)',
  'AS returns TGT + session key (encrypted with client key)',
  'Client sends TGT + service request to Ticket-Granting Server (TGS)',
  'TGS returns Service Ticket + new session key',
  'Client presents Service Ticket to the Service Server',
  'Service Server confirms identity (mutual authentication)',
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function KerberosFlow() {
  const [items, setItems] = useState(() => shuffle(correctOrder));
  const [checked, setChecked] = useState(false);

  const moveUp = (idx) => {
    if (idx === 0 || checked) return;
    const newItems = [...items];
    [newItems[idx - 1], newItems[idx]] = [newItems[idx], newItems[idx - 1]];
    setItems(newItems);
  };

  const moveDown = (idx) => {
    if (idx === items.length - 1 || checked) return;
    const newItems = [...items];
    [newItems[idx], newItems[idx + 1]] = [newItems[idx + 1], newItems[idx]];
    setItems(newItems);
  };

  const isCorrect = items.every((item, i) => item === correctOrder[i]);

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">Kerberos Flow Ordering</h3>
          <p className="text-sm text-text-secondary">Arrange the 6 steps in the correct order</p>
        </div>
        <button onClick={() => { setItems(shuffle(correctOrder)); setChecked(false); }} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Shuffle
        </button>
      </div>

      <div className="space-y-2 mb-4">
        {items.map((item, idx) => {
          const correctIdx = correctOrder.indexOf(item);
          const isRight = checked && idx === correctIdx;
          const isWrong = checked && idx !== correctIdx;

          return (
            <div key={item} className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
              isRight ? 'border-secondary bg-secondary-dim/30' : isWrong ? 'border-danger bg-danger-dim/30' : 'border-border bg-bg'
            }`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                isRight ? 'bg-secondary text-bg' : isWrong ? 'bg-danger text-white' : 'bg-surface text-text-secondary'
              }`}>
                {idx + 1}
              </span>
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

      <button onClick={() => setChecked(true)} disabled={checked} className="btn-primary w-full disabled:opacity-50">
        Check Order
      </button>

      {checked && (
        <div className={`mt-4 p-4 rounded-xl text-center animate-scale-in ${isCorrect ? 'bg-secondary-dim text-secondary' : 'bg-highlight-dim text-highlight'}`}>
          {isCorrect ? '🎉 Perfect! You got the Kerberos flow right!' : `Keep trying! ${items.filter((item, i) => item === correctOrder[i]).length}/6 in correct position.`}
        </div>
      )}
    </div>
  );
}
