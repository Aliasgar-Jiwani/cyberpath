// Cheatsheet data for each unit — Key Term | Definition | Example

export const cheatsheets = {
  1: {
    title: 'Introduction to Cyber Security',
    terms: [
      { term: 'CIA Triad', definition: 'Three core principles: Confidentiality, Integrity, Availability', example: 'Encryption (C), Checksums (I), Redundancy (A)' },
      { term: 'Confidentiality', definition: 'Only authorized users can access information', example: 'AES-encrypted database, access controls' },
      { term: 'Integrity', definition: 'Data has not been altered or tampered with', example: 'SHA-256 hash verification of a downloaded file' },
      { term: 'Availability', definition: 'Systems and data are accessible when needed', example: 'Load balancers, backup servers, DDoS protection' },
      { term: 'Passive Attack', definition: 'Eavesdropping without modifying data', example: 'Wiretapping, traffic analysis on Wi-Fi' },
      { term: 'Active Attack', definition: 'Modifying data or creating false data streams', example: 'Man-in-the-middle, replay attack, DoS' },
      { term: 'Masquerade', definition: 'Pretending to be another entity', example: 'IP spoofing, phishing emails from fake addresses' },
      { term: 'Replay Attack', definition: 'Capturing and retransmitting valid data', example: 'Replaying a captured authentication token' },
      { term: 'Symmetric Encryption', definition: 'Same key for encryption and decryption', example: 'AES-256, DES, Caesar Cipher' },
      { term: 'Caesar Cipher', definition: 'Substitution cipher that shifts letters by fixed amount', example: 'Shift 3: HELLO → KHOOR' },
      { term: 'AES', definition: 'Advanced Encryption Standard — current gold standard', example: '128/192/256-bit keys, used in HTTPS, Wi-Fi' },
      { term: 'Key Distribution Problem', definition: 'Challenge of sharing symmetric keys securely', example: 'Solved by public-key cryptography (Diffie-Hellman, RSA)' },
    ]
  },
  2: {
    title: 'Public-Key Cryptography & Message Authentication',
    terms: [
      { term: 'Hash Function', definition: 'One-way function producing fixed-length output', example: 'SHA-256("hello") → e3b0c442...' },
      { term: 'Avalanche Effect', definition: 'Small input change → dramatically different hash', example: 'Changing 1 bit flips ~50% of hash bits' },
      { term: 'HMAC', definition: 'Hash-based Message Authentication Code using secret key', example: 'HMAC-SHA256 in API authentication' },
      { term: 'Public Key', definition: 'Freely shared key for encryption or verification', example: 'RSA public key (e, n) published openly' },
      { term: 'Private Key', definition: 'Secret key for decryption or signing', example: 'RSA private key (d, n) kept by owner' },
      { term: 'RSA', definition: 'Asymmetric algorithm based on factoring difficulty', example: 'C = M^e mod n; M = C^d mod n' },
      { term: 'Digital Signature', definition: 'Hash encrypted with signer\'s private key', example: 'PDF signing, code signing certificates' },
      { term: 'PKI', definition: 'Public Key Infrastructure for managing certificates', example: 'Root CA → Intermediate CA → End certificate' },
      { term: 'Certificate Authority', definition: 'Trusted third party that issues certificates', example: 'Let\'s Encrypt, DigiCert, Comodo' },
      { term: 'Diffie-Hellman', definition: 'Key exchange protocol for shared secrets', example: 'Used in TLS handshake for session keys' },
      { term: 'ECC', definition: 'Elliptic Curve Cryptography — smaller keys, same security', example: '256-bit ECC ≈ 3072-bit RSA security' },
    ]
  },
  3: {
    title: 'Authentication Applications',
    terms: [
      { term: 'Kerberos', definition: 'Network auth protocol using tickets and trusted third party', example: 'Windows Active Directory authentication' },
      { term: 'TGT', definition: 'Ticket-Granting Ticket — issued by AS for SSO', example: 'Allows requesting service tickets without re-login' },
      { term: 'X.509', definition: 'Standard format for digital certificates', example: 'SSL/TLS certificates for HTTPS websites' },
      { term: 'Chain of Trust', definition: 'Root CA → Intermediate CA → End certificate hierarchy', example: 'Browser verifies certificate up to trusted root' },
      { term: 'CRL', definition: 'Certificate Revocation List — list of revoked certs', example: 'CA publishes CRL periodically' },
      { term: 'OCSP', definition: 'Online Certificate Status Protocol — real-time check', example: 'Browser queries OCSP responder for cert status' },
      { term: 'PGP', definition: 'Pretty Good Privacy — email encryption with web of trust', example: 'Sign → Compress → Encrypt → Encode' },
      { term: 'S/MIME', definition: 'Secure email using X.509 certificates', example: 'Enterprise email encryption with CA certs' },
      { term: 'Web of Trust', definition: 'Decentralized trust model via mutual key signing', example: 'PGP users vouch for each other\'s keys' },
      { term: 'OAuth 2.0', definition: 'Authorization framework for delegated access', example: '"Sign in with Google" — app gets access token' },
      { term: 'MFA', definition: 'Multi-Factor Authentication — 2+ factor types', example: 'Password + phone OTP + fingerprint' },
      { term: 'FIDO2', definition: 'Passwordless authentication standard', example: 'Passkeys on Apple/Google devices' },
    ]
  },
  4: {
    title: 'Network Management Security',
    terms: [
      { term: 'SNMP', definition: 'Simple Network Management Protocol for device monitoring', example: 'Router sends trap to manager on port 162' },
      { term: 'MIB', definition: 'Management Information Base — device data structure', example: 'OID tree: 1.3.6.1.2.1.1.1 (system description)' },
      { term: 'Community String', definition: 'SNMPv1/v2c plain-text "password"', example: '"public" (read), "private" (write) — insecure!' },
      { term: 'SNMPv3', definition: 'SNMP with authentication, encryption, access control', example: 'USM with SHA auth + AES encryption' },
      { term: 'IDS', definition: 'Intrusion Detection System — monitors for threats', example: 'Snort (NIDS), OSSEC (HIDS)' },
      { term: 'Signature-based', definition: 'Detection by matching known attack patterns', example: 'Matches packet against database of known exploits' },
      { term: 'Anomaly-based', definition: 'Detection by deviation from normal behavior', example: 'Unusual login time triggers alert' },
      { term: 'NIDS vs HIDS', definition: 'Network-based vs Host-based IDS', example: 'NIDS: monitors traffic; HIDS: monitors host logs' },
      { term: 'Salted Hash', definition: 'Hash with random salt to prevent rainbow table attacks', example: 'bcrypt(salt + "password123") → unique hash' },
      { term: 'IPsec', definition: 'Network-layer security protocol suite', example: 'Site-to-site VPN using ESP tunnel mode' },
      { term: 'TLS', definition: 'Transport Layer Security for encrypted connections', example: 'HTTPS handshake → encrypted web browsing' },
      { term: 'HSTS', definition: 'HTTP Strict Transport Security — force HTTPS', example: 'Browser header preventing HTTP downgrade' },
    ]
  },
  5: {
    title: 'Malicious Software',
    terms: [
      { term: 'Virus', definition: 'Malware that attaches to host files, needs user action', example: 'Melissa virus in Word documents' },
      { term: 'Worm', definition: 'Self-replicating malware, spreads without user action', example: 'WannaCry exploiting SMB vulnerability' },
      { term: 'Trojan Horse', definition: 'Malware disguised as legitimate software', example: 'Free game that installs a keylogger' },
      { term: 'Ransomware', definition: 'Encrypts files, demands payment for decryption', example: 'WannaCry, LockBit, REvil' },
      { term: 'Polymorphic Virus', definition: 'Mutates code on each replication', example: 'Signature changes each copy, evading AV' },
      { term: 'Signature Scanning', definition: 'AV matches files against known malware database', example: 'Detects known viruses but misses zero-days' },
      { term: 'Sandboxing', definition: 'Running suspicious code in isolated environment', example: 'Windows Sandbox, VirusTotal analysis' },
      { term: 'DDoS', definition: 'Distributed Denial of Service — flooding attack', example: 'Botnet sends millions of requests to crash server' },
      { term: 'Botnet', definition: 'Network of compromised devices under attacker control', example: 'Mirai botnet using hacked IoT devices' },
      { term: 'Packet Filter Firewall', definition: 'Examines packet headers (IP, port, protocol)', example: 'Block all incoming traffic on port 23 (Telnet)' },
      { term: 'Proxy Firewall', definition: 'Application-level gateway inspecting content', example: 'Inspects HTTP requests for malicious payloads' },
      { term: 'DMZ', definition: 'Demilitarized Zone between internet and internal network', example: 'Web server in DMZ, database behind internal FW' },
      { term: 'APT', definition: 'Advanced Persistent Threat — sophisticated long-term attack', example: 'SolarWinds supply chain compromise (2020)' },
      { term: 'Common Criteria', definition: 'International standard for security evaluation (EAL)', example: 'EAL4: methodically designed, tested, reviewed' },
    ]
  }
};
