import React, { useState } from 'react';

const fields = [
  { key: 'version', label: 'Version', value: 'V3', desc: 'Certificate format version. V3 supports extensions like Key Usage and Subject Alternative Names.' },
  { key: 'serial', label: 'Serial Number', value: '04:8A:3F:72:01', desc: 'Unique identifier assigned by the CA. No two certificates from the same CA share a serial number.' },
  { key: 'algorithm', label: 'Signature Algorithm', value: 'SHA256withRSA', desc: 'The algorithm the CA used to sign this certificate. SHA256withRSA means the cert hash was computed with SHA-256 and signed with RSA.' },
  { key: 'issuer', label: 'Issuer (CA)', value: 'CN=DigiCert Global Root G2', desc: 'The Certificate Authority that issued and signed this certificate. Your browser must trust this CA.' },
  { key: 'validFrom', label: 'Valid From', value: '2024-01-15 00:00:00 UTC', desc: 'The certificate is not valid before this date. The browser rejects it if the current time is earlier.' },
  { key: 'validTo', label: 'Valid Until', value: '2025-01-14 23:59:59 UTC', desc: 'The certificate expires after this date. Expired certificates trigger browser security warnings.' },
  { key: 'subject', label: 'Subject', value: 'CN=www.example.com', desc: 'The entity this certificate identifies. For websites, this must match the domain name in the URL.' },
  { key: 'publicKey', label: 'Subject Public Key', value: 'RSA 2048-bit (30:82:01:0a...)', desc: 'The public key being certified. This is the key that clients will use to encrypt data sent to this server.' },
  { key: 'signature', label: 'CA Signature', value: '4f:8a:c2:9b:e1:7d...', desc: 'The CA\'s digital signature over all the above fields. Proves the certificate hasn\'t been tampered with and was truly issued by the CA.' },
];

export default function X509Visual() {
  const [activeField, setActiveField] = useState(null);
  const [showHow, setShowHow] = useState(false);

  return (
    <div className="space-y-6">
      <div className="visual-canvas flex-col gap-6">
        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Interactive X.509 Certificate</h3>

        <div className="w-full max-w-lg mx-auto bg-bg rounded-2xl border-2 border-primary overflow-hidden">
          {/* Certificate header */}
          <div className="bg-primary-dim px-5 py-3 border-b border-primary flex items-center gap-2">
            <span className="text-lg">📜</span>
            <div>
              <p className="text-sm font-bold text-primary">X.509 Digital Certificate</p>
              <p className="text-[10px] text-text-secondary">Click any field to learn more</p>
            </div>
          </div>

          {/* Fields */}
          <div className="divide-y divide-border">
            {fields.map((field) => (
              <button
                key={field.key}
                onClick={() => setActiveField(activeField === field.key ? null : field.key)}
                className={`w-full text-left px-5 py-3 hover:bg-surface-hover transition-all ${
                  activeField === field.key ? 'bg-primary-dim' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold text-highlight w-28 flex-shrink-0">{field.label}</span>
                  <span className="text-xs font-mono text-text-secondary flex-1 truncate">{field.value}</span>
                  <span className="text-xs text-text-secondary">{activeField === field.key ? '▼' : '▶'}</span>
                </div>
                {activeField === field.key && (
                  <p className="text-xs text-text-secondary mt-2 leading-relaxed animate-fade-in pl-28">
                    💡 {field.desc}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <button onClick={() => setShowHow(!showHow)} className="btn-outline text-sm flex items-center gap-2">
          {showHow ? '▼' : '▶'} How it works
        </button>
        {showHow && (
          <div className="mt-3 p-4 bg-surface rounded-xl border border-border animate-fade-in text-sm text-text-secondary leading-relaxed">
            <p>This is an interactive representation of a real X.509 v3 digital certificate. Each field serves a specific purpose in establishing trust between a website and your browser.</p>
            <p className="mt-2">When your browser visits an HTTPS site, it checks: Is the certificate expired? Does the subject match the domain? Is the issuing CA trusted? Is the CA signature valid? If any check fails, you see a security warning.</p>
          </div>
        )}
      </div>
    </div>
  );
}
