import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

export default function SignatureVerifier() {
  const [tampered, setTampered] = useState(false);
  const [verified, setVerified] = useState(null);

  const document = tampered
    ? 'Transfer ₹1,00,000 to Account #7890 (MODIFIED!)'
    : 'Transfer ₹10,000 to Account #1234';
  const signature = 'a4f8c2e91b...';

  const handleVerify = () => {
    setVerified(tampered ? 'invalid' : 'valid');
  };

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">Signature Verifier</h3>
          <p className="text-sm text-text-secondary">Verify a digital signature, then try tampering!</p>
        </div>
        <button onClick={() => { setTampered(false); setVerified(null); }} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Document */}
      <div className={`p-4 rounded-xl border mb-4 ${tampered ? 'border-danger bg-danger-dim/30' : 'border-border bg-bg'}`}>
        <p className="text-xs text-text-secondary mb-1">📄 Document:</p>
        <p className={`font-mono text-sm ${tampered ? 'text-danger' : 'text-text'}`}>{document}</p>
      </div>

      {/* Signature */}
      <div className="p-4 rounded-xl border border-border bg-bg mb-4">
        <p className="text-xs text-text-secondary mb-1">🔏 Digital Signature:</p>
        <p className="font-mono text-sm text-primary">{signature}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 flex-wrap mb-4">
        <button onClick={() => { setTampered(!tampered); setVerified(null); }}
          className={`text-sm font-medium px-4 py-2 rounded-lg transition-all ${tampered ? 'bg-danger text-white' : 'bg-surface border border-border text-text-secondary hover:border-danger'}`}>
          {tampered ? '🔓 Document Tampered!' : '✏️ Tamper with Document'}
        </button>
        <button onClick={handleVerify} className="btn-primary text-sm">🔍 Verify Signature</button>
      </div>

      {/* Result */}
      {verified && (
        <div className={`p-4 rounded-xl animate-scale-in ${verified === 'valid' ? 'feedback-correct' : 'feedback-incorrect'}`}>
          {verified === 'valid' ? (
            <p className="font-semibold">✅ Signature VALID — Document is authentic and unmodified.</p>
          ) : (
            <div>
              <p className="font-semibold">❌ Signature INVALID — Document has been tampered with!</p>
              <p className="text-sm mt-1 opacity-80">Hash of received document doesn't match the hash in the signature. The document was modified after signing.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
