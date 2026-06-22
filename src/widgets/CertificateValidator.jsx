import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

const certs = [
  {
    name: 'Certificate A',
    subject: 'www.mybank.com',
    issuer: 'DigiCert Global CA',
    validFrom: '2024-01-01',
    validTo: '2025-12-31',
    domain: 'www.mybank.com',
    trustedCA: true,
    answer: 'VALID',
    reason: 'All checks pass: not expired, trusted CA, domain matches.',
  },
  {
    name: 'Certificate B',
    subject: 'www.shop.com',
    issuer: 'DigiCert Global CA',
    validFrom: '2022-01-01',
    validTo: '2023-12-31',
    domain: 'www.shop.com',
    trustedCA: true,
    answer: 'INVALID',
    reason: 'Certificate expired on 2023-12-31. The validity period has passed.',
  },
  {
    name: 'Certificate C',
    subject: 'www.secure-login.com',
    issuer: 'FreeSSL Self-Signed',
    validFrom: '2024-06-01',
    validTo: '2026-06-01',
    domain: 'www.my-login-page.com',
    trustedCA: false,
    answer: 'INVALID',
    reason: 'Two issues: (1) Issuer "FreeSSL Self-Signed" is not a trusted CA, (2) Subject doesn\'t match the domain being visited.',
  },
];

export default function CertificateValidator() {
  const [currentCert, setCurrentCert] = useState(0);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState({});

  const cert = certs[currentCert];

  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">Certificate Validator</h3>
          <p className="text-sm text-text-secondary">Check if each certificate is valid or invalid</p>
        </div>
        <button onClick={() => { setAnswers({}); setChecked({}); setCurrentCert(0); }} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      {/* Cert tabs */}
      <div className="flex gap-2 mb-4">
        {certs.map((c, i) => (
          <button key={i} onClick={() => setCurrentCert(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${i === currentCert ? 'bg-primary text-white' : 'bg-surface border border-border text-text-secondary'}`}>
            {c.name}
          </button>
        ))}
      </div>

      {/* Certificate display */}
      <div className="bg-bg rounded-xl border border-border p-4 mb-4 space-y-2 text-sm" key={currentCert}>
        <div className="flex justify-between"><span className="text-text-secondary">Subject:</span> <span className="font-mono">{cert.subject}</span></div>
        <div className="flex justify-between"><span className="text-text-secondary">Issuer:</span> <span className="font-mono">{cert.issuer}</span></div>
        <div className="flex justify-between"><span className="text-text-secondary">Valid From:</span> <span className="font-mono">{cert.validFrom}</span></div>
        <div className="flex justify-between"><span className="text-text-secondary">Valid To:</span> <span className="font-mono">{cert.validTo}</span></div>
        <div className="flex justify-between"><span className="text-text-secondary">Browsing To:</span> <span className="font-mono text-highlight">{cert.domain}</span></div>
        <div className="flex justify-between"><span className="text-text-secondary">CA Trusted?</span> <span className={cert.trustedCA ? 'text-secondary' : 'text-danger'}>{cert.trustedCA ? 'Yes ✓' : 'No ✗'}</span></div>
      </div>

      {/* Answer buttons */}
      {!checked[currentCert] && (
        <div className="flex gap-3">
          <button onClick={() => { setAnswers(p => ({...p, [currentCert]: 'VALID'})); setChecked(p => ({...p, [currentCert]: true})); }}
            className="flex-1 py-2 rounded-lg text-sm font-semibold bg-secondary-dim text-secondary border border-secondary hover:bg-secondary hover:text-bg transition-all">
            ✓ VALID
          </button>
          <button onClick={() => { setAnswers(p => ({...p, [currentCert]: 'INVALID'})); setChecked(p => ({...p, [currentCert]: true})); }}
            className="flex-1 py-2 rounded-lg text-sm font-semibold bg-danger-dim text-danger border border-danger hover:bg-danger hover:text-white transition-all">
            ✗ INVALID
          </button>
        </div>
      )}

      {checked[currentCert] && (
        <div className={`p-4 rounded-xl animate-fade-in ${answers[currentCert] === cert.answer ? 'feedback-correct' : 'feedback-incorrect'}`}>
          <p className="font-semibold">{answers[currentCert] === cert.answer ? '✓ Correct!' : '✗ Incorrect.'}</p>
          <p className="text-sm mt-1 opacity-80">{cert.reason}</p>
        </div>
      )}
    </div>
  );
}
