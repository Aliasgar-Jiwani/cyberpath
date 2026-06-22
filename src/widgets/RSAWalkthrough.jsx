import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const rsaSteps = [
  { title: 'Step 1: Choose Primes', desc: 'Select two small prime numbers', result: 'p = 3, q = 11', detail: 'In real RSA, these primes are hundreds of digits long!' },
  { title: 'Step 2: Compute n', desc: 'n = p × q', result: 'n = 3 × 11 = 33', detail: 'n is part of both public and private keys' },
  { title: 'Step 3: Compute φ(n)', desc: 'φ(n) = (p-1)(q-1)', result: 'φ(33) = (3-1)(11-1) = 2 × 10 = 20', detail: 'Euler\'s totient function — counts integers coprime to n' },
  { title: 'Step 4: Choose e', desc: 'Choose e such that 1 < e < φ(n) and gcd(e, φ(n)) = 1', result: 'e = 7 (gcd(7, 20) = 1 ✓)', detail: 'e is the public exponent. Common choices: 3, 7, 17, 65537' },
  { title: 'Step 5: Compute d', desc: 'd × e ≡ 1 (mod φ(n))', result: 'd = 3 (because 3 × 7 = 21 ≡ 1 mod 20 ✓)', detail: 'd is the private exponent — the secret!' },
  { title: 'Step 6: Keys Ready!', desc: 'Public Key = (e, n) | Private Key = (d, n)', result: 'Public: (7, 33) | Private: (3, 33)', detail: 'Public key is shared openly. Private key is kept secret.' },
  { title: 'Step 7: Encrypt Message', desc: 'Message M = 2. Ciphertext C = M^e mod n', result: 'C = 2^7 mod 33 = 128 mod 33 = 29', detail: 'Anyone with the public key (7, 33) can encrypt' },
  { title: 'Step 8: Decrypt Message', desc: 'Plaintext M = C^d mod n', result: 'M = 29^3 mod 33 = 24389 mod 33 = 2 ✓', detail: 'Only the holder of the private key (3, 33) can decrypt!' },
];

export default function RSAWalkthrough() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">RSA Step-by-Step Walkthrough</h3>
          <p className="text-sm text-text-secondary">Walk through RSA with toy prime numbers</p>
        </div>
        <button onClick={() => setCurrentStep(0)} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Progress */}
      <div className="flex gap-1 mb-6">
        {rsaSteps.map((_, i) => (
          <div key={i} className={`flex-1 h-1.5 rounded-full transition-all ${i <= currentStep ? 'bg-primary' : 'bg-border'}`} />
        ))}
      </div>

      {/* Current step */}
      <div className="bg-bg rounded-xl border border-border p-5 mb-4" key={currentStep}>
        <div className="animate-fade-in">
          <p className="text-xs text-primary uppercase tracking-wider mb-1">{rsaSteps[currentStep].title}</p>
          <p className="text-sm text-text-secondary mb-3">{rsaSteps[currentStep].desc}</p>
          <div className="bg-surface rounded-lg p-3 font-mono text-sm text-secondary mb-3">
            {rsaSteps[currentStep].result}
          </div>
          <p className="text-xs text-text-secondary italic">💡 {rsaSteps[currentStep].detail}</p>
        </div>
      </div>

      {/* Summary card (always visible) */}
      <div className="bg-surface rounded-xl border border-border p-4 mb-4">
        <p className="text-xs font-semibold text-text-secondary mb-2">Current State:</p>
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          {currentStep >= 0 && <span>p = 3</span>}
          {currentStep >= 0 && <span>q = 11</span>}
          {currentStep >= 1 && <span className="text-primary">n = 33</span>}
          {currentStep >= 2 && <span>φ(n) = 20</span>}
          {currentStep >= 3 && <span className="text-secondary">e = 7</span>}
          {currentStep >= 4 && <span className="text-danger">d = 3</span>}
          {currentStep >= 6 && <span className="text-highlight">M = 2 → C = 29</span>}
          {currentStep >= 7 && <span className="text-secondary">C = 29 → M = 2 ✓</span>}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0} className="btn-outline text-sm disabled:opacity-30">← Previous</button>
        <span className="text-xs text-text-secondary">{currentStep + 1} / {rsaSteps.length}</span>
        <button onClick={() => setCurrentStep(Math.min(rsaSteps.length - 1, currentStep + 1))} disabled={currentStep === rsaSteps.length - 1} className="btn-primary text-sm disabled:opacity-30">Next Step →</button>
      </div>
    </div>
  );
}
