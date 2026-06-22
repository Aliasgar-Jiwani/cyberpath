import React, { useState } from 'react';

export default function SignatureVisual() {
  const [tampered, setTampered] = useState(false);
  const [step, setStep] = useState(0);
  const [showHow, setShowHow] = useState(false);

  const signingSteps = [
    { label: 'Original Document', desc: 'Alice has a document to sign', icon: '📄' },
    { label: 'Compute Hash', desc: 'Hash(Document) → abc123...', icon: '🔧' },
    { label: 'Sign with Private Key', desc: 'Encrypt hash with Alice\'s private key → Signature', icon: '🔐' },
    { label: 'Send Document + Signature', desc: 'Both travel to Bob over the network', icon: '📨' },
  ];

  const verifySteps = [
    { label: 'Receive Document + Signature', desc: tampered ? 'Document was MODIFIED in transit!' : 'Bob receives the package', icon: '📥' },
    { label: 'Decrypt Signature', desc: 'Decrypt with Alice\'s PUBLIC key → original hash', icon: '🔓' },
    { label: 'Compute Fresh Hash', desc: tampered ? 'Hash(Tampered Doc) → xyz789...' : 'Hash(Received Doc) → abc123...', icon: '🔧' },
    { label: 'Compare Hashes', desc: tampered ? '❌ abc123... ≠ xyz789... → INVALID!' : '✅ abc123... = abc123... → VALID!', icon: tampered ? '❌' : '✅' },
  ];

  const allSteps = [...signingSteps, ...verifySteps];

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Digital Signature Process</h3>

        {/* Tamper toggle */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-text-secondary">Simulate tampering:</span>
          <button
            onClick={() => { setTampered(!tampered); setStep(0); }}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
              tampered ? 'bg-danger text-white' : 'bg-surface border border-border text-text-secondary'
            }`}
          >
            {tampered ? '🔓 Document Tampered' : '🔒 Document Intact'}
          </button>
        </div>

        {/* Step display */}
        <div className="w-full bg-surface rounded-xl border border-border p-5" key={`${step}-${tampered}`}>
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded font-semibold ${step < 4 ? 'bg-primary-dim text-primary' : 'bg-secondary-dim text-secondary'}`}>
              {step < 4 ? 'SIGNING' : 'VERIFICATION'}
            </span>
            <span className="text-xs text-text-secondary">Step {step + 1} of {allSteps.length}</span>
          </div>
          <div className="text-center py-4 animate-fade-in">
            <span className="text-3xl mb-2 block">{allSteps[step].icon}</span>
            <p className="font-semibold text-base">{allSteps[step].label}</p>
            <p className="text-sm text-text-secondary mt-1">{allSteps[step].desc}</p>
          </div>
        </div>

        {/* Result */}
        {step === allSteps.length - 1 && (
          <div className={`text-center px-6 py-3 rounded-xl font-semibold animate-scale-in ${
            tampered ? 'bg-danger-dim text-danger border border-danger' : 'bg-secondary-dim text-secondary border border-secondary'
          }`}>
            {tampered ? '❌ Signature INVALID — Document was modified!' : '✅ Signature VALID — Document is authentic!'}
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="btn-outline text-sm disabled:opacity-30">← Back</button>
          <div className="flex gap-1">
            {allSteps.map((_, i) => (
              <button key={i} onClick={() => setStep(i)} className={`w-2 h-2 rounded-full transition-all ${i === step ? (i < 4 ? 'bg-primary' : 'bg-secondary') : 'bg-border'}`} />
            ))}
          </div>
          <button onClick={() => setStep(Math.min(allSteps.length - 1, step + 1))} disabled={step === allSteps.length - 1} className="btn-primary text-sm disabled:opacity-30">Next →</button>
        </div>
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p><strong>Signing:</strong> Hash the document, then encrypt the hash with the sender's private key. This encrypted hash IS the digital signature.</p>
            <p className="mt-2"><strong>Verification:</strong> Decrypt the signature using the sender's public key to recover the original hash. Independently hash the received document. If both hashes match — the signature is valid. Toggle "tamper" to see what happens when the document is modified!</p>
          </div>
        )}
      </div>
    </div>
  );
}
