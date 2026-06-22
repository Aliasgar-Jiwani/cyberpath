import React, { useState } from 'react';

const pgpSteps = [
  { label: 'Alice writes email', icon: '✉️', desc: 'Plaintext email message to Bob' },
  { label: 'Sign with Alice\'s Private Key', icon: '🔐', desc: 'Hash the message, encrypt hash with private key → Signature attached' },
  { label: 'Compress (ZIP)', icon: '📦', desc: 'Compress signed message for efficiency' },
  { label: 'Encrypt with Session Key', icon: '🔑', desc: 'Generate random session key, encrypt message with AES' },
  { label: 'Encrypt Session Key with Bob\'s Public Key', icon: '🔒', desc: 'Session key encrypted with Bob\'s public key (only Bob can get it)' },
  { label: 'Base64 Encode', icon: '📝', desc: 'Convert binary to ASCII (radix-64) for email compatibility' },
  { label: 'Send encrypted email', icon: '📨', desc: 'Encrypted package sent over SMTP' },
  { label: 'Bob receives & reverses', icon: '📥', desc: 'Decode → Decrypt session key with private key → Decrypt message → Decompress → Verify signature' },
];

export default function PGPVisual() {
  const [step, setStep] = useState(0);
  const [showHow, setShowHow] = useState(false);

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">PGP Email Encryption Flow</h3>

        {/* Envelope visualization */}
        <div className="w-full max-w-md mx-auto relative">
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <span className="text-2xl">👩</span>
              <p className="text-xs text-primary font-semibold">Alice</p>
            </div>
            <div className="flex-1 h-0.5 mx-4 bg-border relative">
              <div
                className="absolute top-1/2 -translate-y-1/2 transition-all duration-500"
                style={{ left: `${(step / (pgpSteps.length - 1)) * 85}%` }}
              >
                <span className="text-xl">{pgpSteps[step].icon}</span>
              </div>
            </div>
            <div className="text-center">
              <span className="text-2xl">👨</span>
              <p className="text-xs text-secondary font-semibold">Bob</p>
            </div>
          </div>

          <div className="bg-surface rounded-xl border border-border p-5 text-center animate-fade-in" key={step}>
            <p className="text-xs uppercase tracking-wider text-text-secondary mb-1">
              Step {step + 1} of {pgpSteps.length}
            </p>
            <p className="text-3xl mb-2">{pgpSteps[step].icon}</p>
            <p className="font-semibold text-base">{pgpSteps[step].label}</p>
            <p className="text-sm text-text-secondary mt-1">{pgpSteps[step].desc}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex gap-1 max-w-md mx-auto w-full">
          {pgpSteps.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              className={`flex-1 h-1.5 rounded-full transition-all ${
                i <= step ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="btn-outline text-sm disabled:opacity-30">← Back</button>
          <button onClick={() => setStep(Math.min(pgpSteps.length - 1, step + 1))} disabled={step === pgpSteps.length - 1} className="btn-primary text-sm disabled:opacity-30">Next →</button>
        </div>
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p>PGP combines symmetric and asymmetric encryption for efficiency. The message is encrypted with a fast symmetric algorithm (AES), and only the small session key is encrypted with the slower RSA/public-key algorithm.</p>
            <p className="mt-2">The order matters: Sign → Compress → Encrypt → Encode. Signing before encryption means Bob can verify the signature is Alice's without needing to decrypt first (in some implementations).</p>
          </div>
        )}
      </div>
    </div>
  );
}
