import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const scenarios = [
  { text: 'A hacker reads your emails without changing them.', answer: 'Confidentiality', explanation: 'The emails were accessed without authorization — a breach of Confidentiality.' },
  { text: 'A ransomware attack takes down the hospital\'s patient database.', answer: 'Availability', explanation: 'The database is no longer accessible to authorized staff — Availability is compromised.' },
  { text: 'An attacker modifies a bank transfer amount from ₹1,000 to ₹1,00,000.', answer: 'Integrity', explanation: 'The data was altered without authorization — this violates Integrity.' },
  { text: 'A company\'s trade secrets are leaked to a competitor.', answer: 'Confidentiality', explanation: 'Sensitive information was disclosed to unauthorized parties — Confidentiality breach.' },
  { text: 'A student changes their exam grade in the university database.', answer: 'Integrity', explanation: 'The data was modified without proper authorization — an Integrity violation.' },
];

const options = ['Confidentiality', 'Integrity', 'Availability'];

export default function CIAClassifier() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});

  const handleSelect = (idx, option) => {
    if (submitted[idx]) return;
    setAnswers(prev => ({ ...prev, [idx]: option }));
  };

  const handleCheck = (idx) => {
    setSubmitted(prev => ({ ...prev, [idx]: true }));
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted({});
  };

  const allSubmitted = Object.keys(submitted).length === scenarios.length;
  const correctCount = scenarios.filter((s, i) => submitted[i] && answers[i] === s.answer).length;

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">CIA Triad Classifier</h3>
          <p className="text-sm text-text-secondary">Classify which CIA property is violated in each scenario</p>
        </div>
        <button onClick={handleReset} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <div className="space-y-4">
        {scenarios.map((scenario, idx) => (
          <div key={idx} className={`p-4 rounded-xl border transition-all ${
            submitted[idx]
              ? answers[idx] === scenario.answer ? 'border-secondary bg-secondary-dim/30' : 'border-danger bg-danger-dim/30'
              : 'border-border bg-bg'
          }`}>
            <p className="text-sm mb-3 font-medium">{idx + 1}. {scenario.text}</p>
            <div className="flex items-center gap-2 flex-wrap">
              {options.map(opt => (
                <button
                  key={opt}
                  onClick={() => handleSelect(idx, opt)}
                  disabled={submitted[idx]}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                    answers[idx] === opt
                      ? submitted[idx]
                        ? opt === scenario.answer ? 'bg-secondary text-bg border-secondary' : 'bg-danger text-white border-danger'
                        : 'bg-primary text-white border-primary'
                      : submitted[idx] && opt === scenario.answer
                      ? 'bg-secondary-dim text-secondary border-secondary'
                      : 'bg-surface border-border text-text-secondary hover:border-primary'
                  }`}
                >
                  {opt}
                </button>
              ))}
              {answers[idx] && !submitted[idx] && (
                <button onClick={() => handleCheck(idx)} className="btn-primary text-xs py-1.5 px-3">Check</button>
              )}
            </div>
            {submitted[idx] && (
              <p className={`text-xs mt-2 ${answers[idx] === scenario.answer ? 'text-secondary' : 'text-danger'}`}>
                {answers[idx] === scenario.answer ? '✓ ' : '✗ '}{scenario.explanation}
              </p>
            )}
          </div>
        ))}
      </div>

      {allSubmitted && (
        <div className={`mt-4 p-4 rounded-xl text-center font-semibold ${correctCount === scenarios.length ? 'bg-secondary-dim text-secondary' : 'bg-highlight-dim text-highlight'}`}>
          Score: {correctCount}/{scenarios.length} {correctCount === scenarios.length ? '🎉 Perfect!' : '— Review and try again!'}
        </div>
      )}
    </div>
  );
}
