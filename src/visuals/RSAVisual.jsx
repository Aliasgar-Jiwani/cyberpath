import React, { useState } from 'react';

const steps = [
  { label: 'Bob generates key pair', icon: '🔑', desc: 'Bob creates a public key (🔓) and private key (🔐)', side: 'bob' },
  { label: 'Bob publishes public key', icon: '🔓', desc: 'Bob shares his public key openly — anyone can have it', side: 'both' },
  { label: 'Alice writes message', icon: '📝', desc: 'Alice has a secret message: "Hello Bob!"', side: 'alice' },
  { label: 'Alice encrypts with Bob\'s public key', icon: '🔒', desc: 'Alice uses Bob\'s public key to encrypt: Plaintext → Ciphertext', side: 'alice' },
  { label: 'Ciphertext sent over network', icon: '📨', desc: 'The encrypted message travels over the (insecure) network', side: 'both' },
  { label: 'Bob decrypts with private key', icon: '🔐', desc: 'Only Bob can decrypt with his private key: Ciphertext → "Hello Bob!"', side: 'bob' },
];

export default function RSAVisual() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showHow, setShowHow] = useState(false);

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">RSA Encryption Flow</h3>

        {/* Alice & Bob */}
        <div className="w-full max-w-lg mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div className={`text-center transition-all ${steps[currentStep].side === 'alice' || steps[currentStep].side === 'both' ? 'opacity-100 scale-110' : 'opacity-50'}`}>
              <div className="w-16 h-16 rounded-2xl bg-primary-dim border-2 border-primary flex items-center justify-center text-2xl mb-1">
                👩
              </div>
              <p className="text-xs font-semibold text-primary">Alice</p>
              <p className="text-[10px] text-text-secondary">Sender</p>
            </div>

            {/* Connection */}
            <div className="flex-1 flex items-center justify-center pt-6">
              <div className="w-full h-0.5 bg-border relative">
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-bg border-2 border-primary flex items-center justify-center text-sm transition-all duration-500"
                  style={{ left: `${(currentStep / (steps.length - 1)) * 80 + 5}%` }}
                >
                  {steps[currentStep].icon}
                </div>
              </div>
            </div>

            <div className={`text-center transition-all ${steps[currentStep].side === 'bob' || steps[currentStep].side === 'both' ? 'opacity-100 scale-110' : 'opacity-50'}`}>
              <div className="w-16 h-16 rounded-2xl bg-secondary-dim border-2 border-secondary flex items-center justify-center text-2xl mb-1">
                👨
              </div>
              <p className="text-xs font-semibold text-secondary">Bob</p>
              <p className="text-[10px] text-text-secondary">Receiver</p>
            </div>
          </div>

          {/* Step info */}
          <div className="bg-surface rounded-xl border border-border p-4 text-center animate-fade-in" key={currentStep}>
            <p className="text-xs text-primary uppercase tracking-wider mb-1">Step {currentStep + 1} of {steps.length}</p>
            <p className="font-semibold text-base mb-1">{steps[currentStep].label}</p>
            <p className="text-sm text-text-secondary">{steps[currentStep].desc}</p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="btn-outline text-sm disabled:opacity-30"
            >
              ← Back
            </button>
            <div className="flex gap-1">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentStep(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentStep ? 'bg-primary scale-125' : 'bg-border'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
              className="btn-primary text-sm disabled:opacity-30"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p>In RSA encryption, Bob generates a key pair. He shares his <strong>public key</strong> openly. Alice uses it to encrypt her message. Only Bob's <strong>private key</strong> can decrypt it.</p>
            <p className="mt-2">Even if an attacker intercepts the ciphertext, they cannot decrypt it without Bob's private key. This is the beauty of asymmetric cryptography!</p>
          </div>
        )}
      </div>
    </div>
  );
}
