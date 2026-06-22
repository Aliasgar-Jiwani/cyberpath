// CyberPath — Complete Lesson Data for all 5 Units
// Each lesson contains: concept, visual config, tryIt config, and quiz questions

export const units = [
  {
    id: 1,
    title: 'Introduction to Cyber Security',
    icon: 'Shield',
    description: 'Explore the foundations of cybersecurity — the CIA triad, attack types, security mechanisms, and the basics of symmetric encryption.',
    outcomes: [
      'Understand the CIA Triad and OSI Security Architecture',
      'Classify passive vs active attacks and security services',
      'Apply symmetric encryption concepts including Caesar cipher'
    ],
    lessons: [
      {
        id: '1.1',
        unitId: 1,
        title: 'Security Trends & The OSI Security Architecture',
        concept: {
          analogy: 'Think of the CIA triad like a bank vault — Confidential (only you can access it), Integrity (the money inside hasn\'t been tampered with), and Available (the vault opens when you need it).',
          sections: [
            {
              heading: 'What is Cyber Security?',
              content: 'Cyber security is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes. In today\'s interconnected world, cyber security is not just an IT concern — it\'s a fundamental business and national security priority.'
            },
            {
              heading: 'The CIA Triad',
              content: 'The three core principles of information security are known as the <key>CIA Triad</key>:\n\n• <key>Confidentiality</key> — Ensuring that information is accessible only to those authorized to access it. Think encryption, access controls, and authentication.\n\n• <key>Integrity</key> — Safeguarding the accuracy and completeness of information and processing methods. Hash functions and digital signatures help maintain integrity.\n\n• <key>Availability</key> — Ensuring that authorized users have access to information and associated assets when required. Redundancy, backups, and DDoS protection support availability.'
            },
            {
              heading: 'OSI Security Architecture',
              content: 'The <key>OSI Security Architecture</key> (defined in ITU-T X.800) provides a systematic framework for defining security requirements. It focuses on three key aspects:\n\n• <key>Security Attacks</key> — Actions that compromise information security (passive or active)\n\n• <key>Security Mechanisms</key> — Processes or devices designed to detect, prevent, or recover from attacks (e.g., encryption, digital signatures, access controls)\n\n• <key>Security Services</key> — Processing or communication services that enhance security (authentication, access control, data confidentiality, data integrity, non-repudiation)'
            }
          ],
          didYouKnow: 'The term "CIA Triad" has nothing to do with the Central Intelligence Agency! It stands for Confidentiality, Integrity, and Availability — the three pillars that every security professional builds upon.',
          keyTerms: ['CIA Triad', 'Confidentiality', 'Integrity', 'Availability', 'OSI Security Architecture', 'Security Attack', 'Security Mechanism', 'Security Service']
        },
        quiz: [
          {
            question: 'A hospital\'s patient database is encrypted so only authorized doctors can view records. Which CIA property does this primarily protect?',
            options: ['Confidentiality', 'Integrity', 'Availability', 'Non-repudiation'],
            correct: 0,
            explanation: 'Encryption ensures that only authorized users (doctors) can read the data, which is the core function of Confidentiality.'
          },
          {
            question: 'Which of the following is NOT a component of the OSI Security Architecture?',
            options: ['Security Attacks', 'Security Mechanisms', 'Security Protocols', 'Security Services'],
            correct: 2,
            explanation: 'The OSI Security Architecture (X.800) defines three components: Security Attacks, Security Mechanisms, and Security Services. "Security Protocols" is not one of them.'
          },
          {
            question: 'A DDoS attack takes down an online banking website, preventing customers from accessing their accounts. Which CIA property is violated?',
            options: ['Confidentiality', 'Integrity', 'Availability', 'Authentication'],
            correct: 2,
            explanation: 'A DDoS attack prevents legitimate users from accessing the service, which is a direct violation of Availability.'
          }
        ]
      },
      {
        id: '1.2',
        unitId: 1,
        title: 'Security Attacks, Services & Mechanisms',
        concept: {
          analogy: 'Passive attack = someone secretly reading your postcard without you knowing. Active attack = someone intercepting your postcard, rewriting the message, and sending it forward as if nothing happened.',
          sections: [
            {
              heading: 'Passive Attacks',
              content: '<key>Passive attacks</key> involve eavesdropping on or monitoring transmissions without altering data. The goal is to obtain information being transmitted. Two main types:\n\n• <key>Release of Message Contents</key> — An attacker reads the actual content of messages (like reading someone\'s email)\n\n• <key>Traffic Analysis</key> — Even if messages are encrypted, an attacker can observe patterns like frequency, length, and timing of communications to infer useful information'
            },
            {
              heading: 'Active Attacks',
              content: '<key>Active attacks</key> involve modification of the data stream or creation of a false stream. Four categories:\n\n• <key>Masquerade</key> — An entity pretends to be a different entity (identity spoofing)\n\n• <key>Replay</key> — An attacker captures data and retransmits it later to produce an unauthorized effect\n\n• <key>Modification of Messages</key> — A portion of a legitimate message is altered, delayed, or reordered\n\n• <key>Denial of Service (DoS)</key> — Prevents the normal use of communication facilities'
            },
            {
              heading: 'Security Services & Mechanisms',
              content: 'Security services include: <key>Authentication</key> (verifying identity), <key>Access Control</key> (limiting resource access), <key>Data Confidentiality</key> (protecting data from disclosure), <key>Data Integrity</key> (ensuring data hasn\'t been altered), and <key>Non-repudiation</key> (preventing denial of actions).\n\nSecurity mechanisms to implement these include: encryption, digital signatures, access controls, data integrity checks, authentication exchanges, traffic padding, routing control, and notarization.'
            }
          ],
          didYouKnow: 'Passive attacks are much harder to detect than active attacks because they don\'t alter any data. That\'s why prevention (through encryption) is preferred over detection for passive attacks.',
          keyTerms: ['Passive Attack', 'Active Attack', 'Masquerade', 'Replay Attack', 'DoS', 'Traffic Analysis', 'Non-repudiation', 'Authentication']
        },
        quiz: [
          {
            question: 'An attacker monitors the Wi-Fi traffic at a coffee shop but doesn\'t modify any data. This is an example of:',
            options: ['Active attack — Masquerade', 'Passive attack — Traffic Analysis', 'Active attack — Replay', 'Passive attack — Release of message contents'],
            correct: 1,
            explanation: 'Monitoring traffic without modification is a passive attack. Since the attacker is analyzing communication patterns rather than reading message content, it\'s traffic analysis.'
          },
          {
            question: 'An attacker captures a valid login token and sends it again later to gain unauthorized access. This is a:',
            options: ['Masquerade attack', 'Modification attack', 'Replay attack', 'Traffic analysis'],
            correct: 2,
            explanation: 'Capturing data and retransmitting it later to gain unauthorized effect is the definition of a Replay attack.'
          },
          {
            question: 'Which security service ensures that the sender cannot later deny having sent a message?',
            options: ['Authentication', 'Access Control', 'Data Integrity', 'Non-repudiation'],
            correct: 3,
            explanation: 'Non-repudiation prevents an entity from denying a previous action. It proves that a message was indeed sent by the claimed sender.'
          }
        ]
      },
      {
        id: '1.3',
        unitId: 1,
        title: 'Symmetric Encryption & Message Confidentiality',
        concept: {
          analogy: 'Symmetric encryption is like you and your friend both having identical keys to the same diary lock. You lock it, send the diary, and your friend opens it with the same key. The problem? How do you safely share that key without someone stealing it?',
          sections: [
            {
              heading: 'What is Symmetric Encryption?',
              content: '<key>Symmetric encryption</key> (also called secret-key or single-key encryption) uses the same key for both encryption and decryption. Both the sender and receiver must possess the shared secret key. This is the oldest and most widely used type of encryption.\n\nThe basic process: Plaintext → Encryption Algorithm + Key → Ciphertext → Decryption Algorithm + Same Key → Original Plaintext'
            },
            {
              heading: 'Caesar Cipher — The Simplest Example',
              content: 'The <key>Caesar Cipher</key> is one of the earliest known encryption techniques, used by Julius Caesar. It works by shifting each letter in the plaintext by a fixed number of positions in the alphabet.\n\nExample with shift of 3: A→D, B→E, C→F, ..., X→A, Y→B, Z→C\n\nSo "HELLO" becomes "KHOOR"\n\nWhile trivially easy to break (only 25 possible shifts), it demonstrates the core concept of substitution ciphers.'
            },
            {
              heading: 'Modern Symmetric Algorithms',
              content: '<key>DES (Data Encryption Standard)</key> — A block cipher that encrypts 64-bit blocks using a 56-bit key. Once the gold standard, now considered insecure due to short key length.\n\n<key>AES (Advanced Encryption Standard)</key> — The current standard, supporting 128, 192, or 256-bit keys. Used worldwide for securing classified information. AES is fast, efficient, and remains unbroken.\n\nThe <key>Key Distribution Problem</key> is the main challenge: how do two parties securely share a secret key? This problem led to the invention of public-key cryptography.'
            }
          ],
          didYouKnow: 'AES-256 is so strong that even if you could check a billion billion (10^18) keys per second, it would still take about 3 × 10^51 years to try all possible keys — far longer than the age of the universe!',
          keyTerms: ['Symmetric Encryption', 'Caesar Cipher', 'DES', 'AES', 'Key Distribution Problem', 'Plaintext', 'Ciphertext', 'Block Cipher']
        },
        quiz: [
          {
            question: 'What is the fundamental characteristic of symmetric encryption?',
            options: ['Uses two different keys', 'Uses the same key for encryption and decryption', 'Does not require a key', 'Only encrypts numbers'],
            correct: 1,
            explanation: 'Symmetric encryption uses a single shared key for both encryption and decryption — that\'s what makes it "symmetric".'
          },
          {
            question: 'Using a Caesar cipher with a shift of 5, what does "CAT" become?',
            options: ['HFY', 'HAX', 'FDW', 'GCV'],
            correct: 0,
            explanation: 'C+5=H, A+5=F, T+5=Y. So "CAT" encrypted with shift 5 becomes "HFY".'
          },
          {
            question: 'Why was DES replaced by AES?',
            options: ['DES was too slow', 'DES had a patent issue', 'DES\'s 56-bit key was too short for modern security', 'AES uses less memory'],
            correct: 2,
            explanation: 'DES uses only a 56-bit key, which became vulnerable to brute-force attacks with modern computing power. AES supports 128/192/256-bit keys.'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Public-Key Cryptography & Message Authentication',
    icon: 'Lock',
    description: 'Dive into hash functions, public-key cryptography, RSA, digital signatures, and the foundations of key management and PKI.',
    outcomes: [
      'Understand hash functions and the avalanche effect',
      'Explain RSA encryption and the public/private key concept',
      'Describe digital signatures and key management with PKI'
    ],
    lessons: [
      {
        id: '2.1',
        unitId: 2,
        title: 'Message Authentication & Hash Functions',
        concept: {
          analogy: 'A hash is like a fingerprint of your data — it\'s unique to that specific input, you can\'t reverse-engineer the original from the fingerprint, and even the tiniest change produces a completely different fingerprint.',
          sections: [
            {
              heading: 'Why Message Authentication?',
              content: 'Message authentication ensures two critical properties: <key>Integrity</key> (the message hasn\'t been altered) and <key>Origin authentication</key> (the message truly came from the claimed sender). Without message authentication, an attacker could modify data in transit or forge messages pretending to be someone else.'
            },
            {
              heading: 'Hash Functions',
              content: 'A <key>hash function</key> H takes a variable-length input and produces a fixed-length output (the hash value or message digest). Key properties:\n\n• <key>One-way</key> — Given a hash h, it\'s computationally infeasible to find any input x such that H(x) = h\n\n• <key>Deterministic</key> — The same input always produces the same hash\n\n• <key>Avalanche Effect</key> — A tiny change in input (even one bit) causes a dramatically different hash output\n\n• <key>Collision Resistant</key> — It\'s extremely hard to find two different inputs that produce the same hash'
            },
            {
              heading: 'Common Hash Algorithms & HMAC',
              content: '<key>MD5</key> — Produces 128-bit hash. Now considered broken (collisions found). Don\'t use for security.\n\n<key>SHA-1</key> — 160-bit hash. Also deprecated due to collision vulnerabilities.\n\n<key>SHA-256</key> — Part of SHA-2 family. 256-bit hash. Currently the standard for most security applications.\n\n<key>HMAC</key> (Hash-based Message Authentication Code) combines a secret key with the hash function: HMAC(K, M) = H(K ⊕ opad || H(K ⊕ ipad || M)). This provides both integrity AND authentication because only someone with the key can produce or verify the HMAC.'
            }
          ],
          didYouKnow: 'SHA-256 is used in Bitcoin mining! Miners must find a number (nonce) that, when hashed with the block data, produces a hash starting with a certain number of zeros. This is computationally expensive by design.',
          keyTerms: ['Hash Function', 'Message Digest', 'Avalanche Effect', 'Collision Resistance', 'MD5', 'SHA-256', 'HMAC', 'One-way Function']
        },
        quiz: [
          {
            question: 'What does the "avalanche effect" in hash functions mean?',
            options: ['The hash grows larger over time', 'A small input change causes a dramatically different output', 'Multiple inputs always produce the same hash', 'The hash function runs faster with larger inputs'],
            correct: 1,
            explanation: 'The avalanche effect means even a 1-bit change in input produces a completely different hash output — typically about 50% of the output bits change.'
          },
          {
            question: 'Why is MD5 no longer considered secure?',
            options: ['It\'s too slow', 'It produces hashes that are too long', 'Collision attacks have been found against it', 'It requires too much memory'],
            correct: 2,
            explanation: 'Researchers have demonstrated practical collision attacks against MD5, meaning two different inputs can be crafted to produce the same hash.'
          },
          {
            question: 'What additional security property does HMAC provide compared to a plain hash?',
            options: ['Faster computation', 'Authentication of the sender', 'Larger output size', 'Reversibility'],
            correct: 1,
            explanation: 'HMAC uses a secret key combined with the hash, so only someone with the key can produce or verify the MAC — this authenticates the sender.'
          }
        ]
      },
      {
        id: '2.2',
        unitId: 2,
        title: 'Public Key Cryptography Principles & RSA',
        concept: {
          analogy: 'Your public key is like your home address — anyone can know it and send you mail. Your private key is like your mailbox key — only you can open and read the mail that arrives.',
          sections: [
            {
              heading: 'The Key-Pair Concept',
              content: '<key>Public-key cryptography</key> (asymmetric cryptography) uses two mathematically related but different keys:\n\n• <key>Public Key</key> — Freely shared with everyone. Used to encrypt messages or verify signatures.\n\n• <key>Private Key</key> — Kept secret by the owner. Used to decrypt messages or create signatures.\n\nThis solves the <key>key distribution problem</key> of symmetric encryption: you no longer need a secure channel to share keys. Anyone can encrypt a message using your public key, but only you can decrypt it with your private key.'
            },
            {
              heading: 'RSA Algorithm — Conceptual Overview',
              content: 'The <key>RSA algorithm</key> (Rivest-Shamir-Adleman, 1977) is the most widely used public-key system. The concept:\n\n1. Choose two large prime numbers p and q\n2. Compute n = p × q (this is part of both keys)\n3. Compute φ(n) = (p-1)(q-1) — Euler\'s totient\n4. Choose e such that 1 < e < φ(n) and gcd(e, φ(n)) = 1\n5. Compute d such that d × e ≡ 1 (mod φ(n))\n\n<key>Public key</key> = (e, n) | <key>Private key</key> = (d, n)\n\nEncryption: C = M^e mod n\nDecryption: M = C^d mod n\n\nSecurity relies on the difficulty of factoring large numbers.'
            },
            {
              heading: 'Encryption vs Signing',
              content: 'Public-key cryptography enables two fundamental operations:\n\n• <key>Encryption</key>: Sender encrypts with receiver\'s PUBLIC key → only receiver can decrypt with PRIVATE key (provides confidentiality)\n\n• <key>Digital Signing</key>: Sender signs with own PRIVATE key → anyone can verify with sender\'s PUBLIC key (provides authentication and non-repudiation)'
            }
          ],
          didYouKnow: 'RSA key sizes keep growing! In 1991, a 512-bit RSA key was considered strong. Today, 2048-bit is the minimum recommendation, and 4096-bit is used for high-security applications. The largest RSA key ever factored was 829 bits (250 digits) in 2020.',
          keyTerms: ['Public Key', 'Private Key', 'RSA', 'Asymmetric Cryptography', 'Key Pair', 'Euler\'s Totient', 'Modular Exponentiation', 'Factoring Problem']
        },
        quiz: [
          {
            question: 'In RSA, if Alice wants to send a confidential message to Bob, which key does she use to encrypt?',
            options: ['Alice\'s public key', 'Alice\'s private key', 'Bob\'s public key', 'Bob\'s private key'],
            correct: 2,
            explanation: 'To send a confidential message, Alice encrypts with Bob\'s PUBLIC key. Only Bob can decrypt it with his private key.'
          },
          {
            question: 'What mathematical problem makes RSA secure?',
            options: ['Solving linear equations', 'The difficulty of factoring large numbers', 'Computing square roots', 'Finding prime numbers'],
            correct: 1,
            explanation: 'RSA\'s security is based on the computational difficulty of factoring the product of two large prime numbers.'
          },
          {
            question: 'What problem does public-key cryptography solve that symmetric encryption cannot?',
            options: ['Speed of encryption', 'Key distribution problem', 'Data compression', 'Error detection'],
            correct: 1,
            explanation: 'Public-key crypto solves the key distribution problem — you don\'t need a secure channel to share keys because the public key can be shared openly.'
          }
        ]
      },
      {
        id: '2.3',
        unitId: 2,
        title: 'Digital Signatures & Key Management',
        concept: {
          analogy: 'A digital signature is like a wax seal on a royal letter — it proves who sent it (authentication) and that nobody tampered with the contents (integrity). If the seal is broken, you know the message was compromised.',
          sections: [
            {
              heading: 'What Digital Signatures Prove',
              content: 'A <key>digital signature</key> provides three guarantees:\n\n• <key>Authentication</key> — Proves the message came from the claimed sender\n\n• <key>Non-repudiation</key> — The sender cannot deny having signed the message\n\n• <key>Integrity</key> — Proves the message hasn\'t been altered since signing\n\nThe process: Sender hashes the message, then encrypts the hash with their PRIVATE key. The encrypted hash is the digital signature, attached to the message.'
            },
            {
              heading: 'Signing & Verification Process',
              content: '<key>Signing</key>:\n1. Compute hash of the document: h = H(M)\n2. Encrypt hash with sender\'s private key: Signature = h^d mod n\n3. Send (Message + Signature)\n\n<key>Verification</key>:\n1. Receiver decrypts signature with sender\'s PUBLIC key: h\' = Signature^e mod n\n2. Receiver computes own hash of received message: h\'\' = H(M)\n3. Compare: if h\' = h\'\' → Signature is VALID ✓\n   If h\' ≠ h\'\' → Signature is INVALID ✗ (message was tampered)'
            },
            {
              heading: 'Key Management & PKI',
              content: 'Managing cryptographic keys at scale requires infrastructure:\n\n<key>PKI (Public Key Infrastructure)</key> is a framework for creating, storing, distributing, and revoking digital certificates.\n\nKey components:\n• <key>Certificate Authority (CA)</key> — Trusted third party that issues digital certificates\n• <key>Registration Authority (RA)</key> — Verifies identity before certificate issuance\n• <key>Certificate Repository</key> — Database storing issued certificates\n• <key>Certificate Revocation List (CRL)</key> — List of revoked certificates\n\nPKI creates a <key>chain of trust</key>: Root CA → Intermediate CA → End-entity certificate'
            }
          ],
          didYouKnow: 'When you see the padlock icon in your browser\'s address bar (HTTPS), your browser is verifying a chain of digital signatures! The website\'s certificate is signed by an intermediate CA, which is signed by a root CA that your browser trusts.',
          keyTerms: ['Digital Signature', 'Non-repudiation', 'PKI', 'Certificate Authority', 'Chain of Trust', 'CRL', 'Hash-then-Sign', 'Verification']
        },
        quiz: [
          {
            question: 'To create a digital signature, the sender encrypts the message hash with:',
            options: ['Receiver\'s public key', 'Sender\'s public key', 'Receiver\'s private key', 'Sender\'s private key'],
            correct: 3,
            explanation: 'The sender signs (encrypts the hash) with their own PRIVATE key. Anyone can then verify by decrypting with the sender\'s public key.'
          },
          {
            question: 'What happens if a digitally signed document is modified after signing?',
            options: ['The signature automatically updates', 'Verification will fail because hashes won\'t match', 'Nothing — signatures don\'t check integrity', 'The document becomes encrypted'],
            correct: 1,
            explanation: 'The receiver computes a fresh hash of the received document and compares it to the decrypted signature hash. If the document was modified, these hashes won\'t match.'
          },
          {
            question: 'What is the role of a Certificate Authority (CA) in PKI?',
            options: ['Encrypts all messages on the network', 'Issues and signs digital certificates, vouching for identities', 'Stores users\' private keys', 'Manages firewalls'],
            correct: 1,
            explanation: 'A CA is a trusted third party that verifies identities and issues digital certificates, creating a chain of trust.'
          }
        ]
      },
      {
        id: '2.4',
        unitId: 2,
        title: 'Diffie-Hellman Key Exchange',
        concept: {
          analogy: 'Imagine you and a friend each pick a secret paint color. You both start with the same base color (public), mix in your secret color, and exchange the mixtures. Now each of you adds your secret to the other\'s mixture — you both arrive at the same final color, but no one watching could figure it out!',
          sections: [
            {
              heading: 'The Key Exchange Problem',
              content: 'Before symmetric encryption can work, both parties need the same secret key. But how do you establish a shared secret over an insecure channel? <key>Diffie-Hellman Key Exchange</key> (1976) solved this elegantly — it allows two parties to jointly establish a shared secret over a public channel without ever transmitting the secret itself.'
            },
            {
              heading: 'How Diffie-Hellman Works',
              content: 'The protocol uses <key>modular arithmetic</key>:\n\n1. Alice and Bob agree on public values: a prime p and generator g\n2. Alice picks secret a, computes A = g^a mod p, sends A to Bob\n3. Bob picks secret b, computes B = g^b mod p, sends B to Alice\n4. Alice computes shared secret: s = B^a mod p\n5. Bob computes shared secret: s = A^b mod p\n\nBoth arrive at the same value s = g^(ab) mod p — this becomes their shared key!\n\nAn eavesdropper sees only g, p, A, and B, but computing a or b from these is the <key>Discrete Logarithm Problem</key> — computationally infeasible for large numbers.'
            },
            {
              heading: 'Limitations & Man-in-the-Middle',
              content: 'Diffie-Hellman is vulnerable to <key>Man-in-the-Middle (MITM)</key> attacks: an attacker could intercept and establish separate keys with both parties. Solution: combine DH with authentication (digital signatures or certificates). This is exactly what <key>TLS/SSL</key> does in HTTPS connections.'
            }
          ],
          didYouKnow: 'Diffie-Hellman was the first published public-key protocol, predating RSA by a year. Whitfield Diffie and Martin Hellman published it in 1976, but the British intelligence agency GCHQ had actually discovered a similar method in 1969 — kept secret until 1997!',
          keyTerms: ['Diffie-Hellman', 'Key Exchange', 'Discrete Logarithm', 'Man-in-the-Middle', 'Shared Secret', 'Modular Arithmetic', 'Generator', 'TLS']
        },
        quiz: [
          {
            question: 'What mathematical problem makes Diffie-Hellman secure?',
            options: ['Factoring large primes', 'The discrete logarithm problem', 'Matrix multiplication', 'Finding hash collisions'],
            correct: 1,
            explanation: 'DH security relies on the Discrete Logarithm Problem — given g, p, and g^a mod p, finding a is computationally infeasible for large values.'
          },
          {
            question: 'What is the main vulnerability of basic Diffie-Hellman key exchange?',
            options: ['The key is too short', 'Man-in-the-middle attacks', 'It requires a secure channel', 'It only works with small primes'],
            correct: 1,
            explanation: 'Without authentication, an attacker can intercept the exchange and establish separate shared keys with both parties (MITM attack).'
          },
          {
            question: 'After completing the Diffie-Hellman exchange, what do both parties have?',
            options: ['Each other\'s private keys', 'A shared symmetric key', 'A pair of public/private keys', 'An encrypted message'],
            correct: 1,
            explanation: 'Both parties compute the same shared secret value, which they can then use as a symmetric encryption key.'
          }
        ]
      },
      {
        id: '2.5',
        unitId: 2,
        title: 'Elliptic Curve Cryptography (ECC)',
        concept: {
          analogy: 'Imagine bouncing a ball on a curved surface — knowing where it started and how many times it bounced, you can find where it ends up. But if you only see where it ended, figuring out how many bounces occurred is nearly impossible. That\'s the "trapdoor" that makes ECC secure.',
          sections: [
            {
              heading: 'Why ECC?',
              content: '<key>Elliptic Curve Cryptography (ECC)</key> provides equivalent security to RSA but with much smaller key sizes. A 256-bit ECC key offers roughly the same security as a 3072-bit RSA key. This means faster computation, less storage, and less bandwidth — critical for mobile devices and IoT.'
            },
            {
              heading: 'How ECC Works (Conceptually)',
              content: 'ECC is based on the algebraic structure of <key>elliptic curves</key> over finite fields. The key operation is <key>point multiplication</key>: given a point P on the curve and an integer k, computing Q = kP is easy. But given P and Q, finding k is the <key>Elliptic Curve Discrete Logarithm Problem (ECDLP)</key> — computationally infeasible.\n\nThis is analogous to the discrete logarithm problem in Diffie-Hellman, but on elliptic curves instead of modular arithmetic.'
            },
            {
              heading: 'ECC in Practice',
              content: 'ECC is used in:\n• <key>ECDH</key> (Elliptic Curve Diffie-Hellman) — Key exchange\n• <key>ECDSA</key> (Elliptic Curve Digital Signature Algorithm) — Digital signatures\n• Bitcoin and Ethereum use the secp256k1 elliptic curve\n• TLS 1.3 prefers ECDH for key exchange\n• Modern smartphones use ECC for secure communication due to its efficiency'
            }
          ],
          didYouKnow: 'Your WhatsApp end-to-end encryption uses the Curve25519 elliptic curve (designed by Daniel J. Bernstein). Every time you send a message, ECC is working behind the scenes to keep it private!',
          keyTerms: ['ECC', 'Elliptic Curve', 'Point Multiplication', 'ECDLP', 'ECDH', 'ECDSA', 'Key Size Advantage', 'Curve25519']
        },
        quiz: [
          {
            question: 'What is the main advantage of ECC over RSA?',
            options: ['ECC is older and more tested', 'ECC provides the same security with smaller key sizes', 'ECC doesn\'t use mathematics', 'ECC is only used for hashing'],
            correct: 1,
            explanation: 'A 256-bit ECC key provides roughly the same security as a 3072-bit RSA key, making ECC more efficient in computation, storage, and bandwidth.'
          },
          {
            question: 'What mathematical problem underpins ECC\'s security?',
            options: ['Factoring large numbers', 'The elliptic curve discrete logarithm problem', 'Computing square roots', 'Matrix inversion'],
            correct: 1,
            explanation: 'ECC\'s security relies on the ECDLP — given points P and Q = kP on a curve, finding k is computationally infeasible.'
          },
          {
            question: 'Which of these uses ECC in practice?',
            options: ['MD5 hashing', 'Bitcoin transactions', 'Caesar cipher', 'DES encryption'],
            correct: 1,
            explanation: 'Bitcoin uses the secp256k1 elliptic curve for its digital signature scheme (ECDSA) to sign transactions.'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Authentication Applications',
    icon: 'KeyRound',
    description: 'Master real-world authentication systems — Kerberos protocol, X.509 certificates, PKI infrastructure, and email security with PGP and S/MIME.',
    outcomes: [
      'Trace the complete Kerberos authentication flow',
      'Read and validate X.509 certificates and PKI chains',
      'Compare PGP web-of-trust vs S/MIME CA-based email security'
    ],
    lessons: [
      {
        id: '3.1',
        unitId: 3,
        title: 'Kerberos: Principles & Components',
        concept: {
          analogy: 'Kerberos is like a theme park: you show your ID at the main gate (Authentication Server) → get a wristband (TGT) → show wristband at each ride booth (Ticket-Granting Server) → get a ride ticket → enjoy the ride (access the service).',
          sections: [
            {
              heading: 'What Problem Does Kerberos Solve?',
              content: 'In an open network, anyone can claim to be anyone. <key>Kerberos</key> is a network authentication protocol that uses a trusted third party to verify identities. Developed at MIT (named after the three-headed dog guarding the Greek underworld), it allows users to prove their identity to multiple services after logging in just once — <key>Single Sign-On (SSO)</key>.'
            },
            {
              heading: 'The Three Parties',
              content: 'Kerberos involves three main entities:\n\n• <key>Client</key> — The user requesting access to a service\n\n• <key>Authentication Server (AS)</key> — Verifies user identity and issues a Ticket-Granting Ticket (TGT)\n\n• <key>Ticket-Granting Server (TGS)</key> — Issues service tickets based on valid TGTs\n\n• <key>Service Server (SS)</key> — The actual resource the user wants to access\n\nAll entities exist within a <key>Kerberos Realm</key> — a domain of authentication authority.'
            },
            {
              heading: 'The Kerberos Flow',
              content: 'Step-by-step authentication:\n\n1. Client → AS: "I am Alice, I want to access the network"\n2. AS → Client: Returns <key>TGT</key> (encrypted with TGS\'s key) + session key (encrypted with Alice\'s key)\n3. Client → TGS: Presents TGT + request for specific service\n4. TGS → Client: Returns <key>Service Ticket</key> (encrypted with service\'s key) + new session key\n5. Client → Service: Presents Service Ticket\n6. Service → Client: Confirms identity (mutual authentication)\n\nPasswords are NEVER sent over the network — only encrypted tickets and session keys.'
            }
          ],
          didYouKnow: 'Windows Active Directory uses Kerberos as its default authentication protocol! Every time you log into a Windows domain and access shared files or printers, Kerberos is working behind the scenes.',
          keyTerms: ['Kerberos', 'TGT', 'Authentication Server', 'Ticket-Granting Server', 'Service Ticket', 'Session Key', 'Realm', 'SSO']
        },
        quiz: [
          {
            question: 'What is the primary purpose of the Ticket-Granting Ticket (TGT)?',
            options: ['To encrypt all network traffic', 'To allow the user to request service tickets without re-entering credentials', 'To store the user\'s password', 'To directly access services'],
            correct: 1,
            explanation: 'The TGT allows a user to request service tickets from the TGS without having to prove their identity again — this is how SSO works.'
          },
          {
            question: 'In Kerberos, passwords are:',
            options: ['Sent encrypted over the network', 'Never transmitted over the network', 'Stored in plain text on the server', 'Shared between all users'],
            correct: 1,
            explanation: 'Kerberos never sends passwords over the network. Instead, it uses the password to derive encryption keys locally, and only encrypted tickets travel across the network.'
          },
          {
            question: 'Which component issues service tickets in Kerberos?',
            options: ['Authentication Server (AS)', 'Ticket-Granting Server (TGS)', 'Service Server (SS)', 'The Client'],
            correct: 1,
            explanation: 'The TGS issues service tickets after verifying the client\'s TGT. The AS only issues the initial TGT.'
          }
        ]
      },
      {
        id: '3.2',
        unitId: 3,
        title: 'X.509 & Public Key Infrastructure',
        concept: {
          analogy: 'An X.509 certificate is like a government-issued passport — it\'s created by a trusted authority (the government/CA), proves your identity, contains your photo (public key), has an expiry date, and can be revoked if compromised.',
          sections: [
            {
              heading: 'What is a Digital Certificate?',
              content: 'A <key>digital certificate</key> binds a public key to an identity. It answers the question: "How do I know this public key really belongs to who they claim to be?" Without certificates, anyone could publish a public key claiming to be your bank.\n\n<key>X.509</key> is the standard format for digital certificates, used in SSL/TLS (HTTPS), email (S/MIME), VPNs, and code signing.'
            },
            {
              heading: 'X.509 Certificate Structure',
              content: 'An X.509 v3 certificate contains:\n\n• <key>Version</key> — Certificate format version (typically v3)\n• <key>Serial Number</key> — Unique identifier assigned by the CA\n• <key>Signature Algorithm</key> — Algorithm used to sign the certificate\n• <key>Issuer</key> — The CA that issued the certificate\n• <key>Validity Period</key> — Not Before / Not After dates\n• <key>Subject</key> — Entity the certificate identifies (e.g., www.example.com)\n• <key>Subject Public Key</key> — The public key being certified\n• <key>Extensions</key> — Additional info (key usage, alt names)\n• <key>CA Signature</key> — The CA\'s digital signature over all fields above'
            },
            {
              heading: 'Chain of Trust & Revocation',
              content: '<key>Chain of Trust</key>: Root CA → signs Intermediate CA cert → signs End-entity cert. Your browser trusts a pre-installed set of Root CAs. When you visit a website, the browser traces the certificate chain back to a trusted root.\n\nCertificate <key>revocation</key> handles compromised certificates:\n• <key>CRL (Certificate Revocation List)</key> — A periodically published list of revoked certificates\n• <key>OCSP (Online Certificate Status Protocol)</key> — Real-time check of certificate status'
            }
          ],
          didYouKnow: 'Let\'s Encrypt, a free Certificate Authority, has issued over 3 billion certificates since 2015! It automated the certificate issuance process, making HTTPS accessible to everyone — not just large corporations.',
          keyTerms: ['X.509', 'Digital Certificate', 'Certificate Authority', 'Chain of Trust', 'CRL', 'OCSP', 'Root CA', 'Subject', 'Issuer']
        },
        quiz: [
          {
            question: 'What is the primary purpose of a digital certificate?',
            options: ['To encrypt all data on a server', 'To bind a public key to a verified identity', 'To store private keys securely', 'To compress data for transmission'],
            correct: 1,
            explanation: 'A digital certificate binds a public key to an identity, verified by a trusted CA, so you can trust that the key belongs to who it claims.'
          },
          {
            question: 'A website\'s certificate has expired. What should the browser do?',
            options: ['Accept it anyway', 'Display a security warning to the user', 'Contact the website owner', 'Automatically renew the certificate'],
            correct: 1,
            explanation: 'An expired certificate means the CA can no longer vouch for the binding between the public key and the identity. The browser should warn the user.'
          },
          {
            question: 'What is the advantage of OCSP over CRL?',
            options: ['OCSP is more secure', 'OCSP provides real-time certificate status checks', 'OCSP uses less storage', 'OCSP doesn\'t require a CA'],
            correct: 1,
            explanation: 'OCSP checks certificate status in real-time, while CRLs are published periodically and may not reflect the most recent revocations.'
          }
        ]
      },
      {
        id: '3.3',
        unitId: 3,
        title: 'Email Security: PGP & S/MIME',
        concept: {
          analogy: 'PGP is like getting vouched for by friends — trust spreads through your social network ("I trust Alice, Alice trusts Bob, so I\'ll trust Bob"). S/MIME is like needing an official government stamp — you need a certificate from an official authority.',
          sections: [
            {
              heading: 'Why Email is Insecure',
              content: 'Email (SMTP) was designed in the 1980s with zero security considerations. By default:\n• Emails travel in <key>plaintext</key> — anyone on the network path can read them\n• No sender verification — anyone can forge the "From" address\n• No integrity guarantee — emails can be modified in transit\n\nTwo standards emerged to secure email: <key>PGP</key> and <key>S/MIME</key>.'
            },
            {
              heading: 'PGP (Pretty Good Privacy)',
              content: '<key>PGP</key> provides confidentiality, authentication, integrity, and compression for email.\n\nPGP message processing steps:\n1. <key>Sign</key> — Hash the message, encrypt hash with sender\'s private key\n2. <key>Compress</key> — Compress the signed message (ZIP)\n3. <key>Encrypt</key> — Generate a random session key, encrypt message with it (symmetric), then encrypt session key with recipient\'s public key\n4. <key>Encode</key> — Convert to Base64 (radix-64) for email compatibility\n\nPGP uses a <key>Web of Trust</key> model: users sign each other\'s public keys. Trust is decentralized — no central authority needed.'
            },
            {
              heading: 'S/MIME & Comparison',
              content: '<key>S/MIME</key> (Secure/Multipurpose Internet Mail Extensions) provides similar security to PGP but uses X.509 certificates and CAs.\n\nKey differences:\n• <key>PGP</key>: Web of Trust, decentralized, user manages own keys, popular with individuals\n• <key>S/MIME</key>: CA-based trust, centralized, certificates issued by authorities, popular in enterprises\n\nBoth provide: encryption, digital signatures, compression, and compatibility with email systems.'
            }
          ],
          didYouKnow: 'PGP was created by Phil Zimmermann in 1991. The US government investigated him for three years because exporting strong encryption was classified as "exporting munitions"! He eventually prevailed, and PGP became freely available worldwide.',
          keyTerms: ['PGP', 'S/MIME', 'Web of Trust', 'Certificate Authority', 'Radix-64', 'Session Key', 'Digital Envelope', 'Email Encryption']
        },
        quiz: [
          {
            question: 'In PGP, what is the correct order of operations when sending a secure email?',
            options: ['Encrypt → Sign → Compress → Encode', 'Sign → Compress → Encrypt → Encode', 'Compress → Encrypt → Sign → Encode', 'Encode → Sign → Encrypt → Compress'],
            correct: 1,
            explanation: 'PGP follows: Sign (hash + encrypt with private key) → Compress (ZIP) → Encrypt (session key + recipient\'s public key) → Encode (Base64).'
          },
          {
            question: 'How does PGP\'s trust model differ from S/MIME?',
            options: ['PGP uses centralized CAs, S/MIME uses web of trust', 'PGP uses web of trust (decentralized), S/MIME uses CAs (centralized)', 'Both use the same trust model', 'Neither uses a trust model'],
            correct: 1,
            explanation: 'PGP uses a decentralized Web of Trust where users vouch for each other. S/MIME relies on centralized Certificate Authorities.'
          },
          {
            question: 'Why does PGP use a random session key instead of encrypting the entire message with the recipient\'s public key?',
            options: ['Public-key encryption is too slow for large messages', 'Public keys can only encrypt small data', 'Both A and B', 'Session keys are more secure'],
            correct: 2,
            explanation: 'Public-key encryption (RSA) is computationally expensive and can only encrypt data smaller than the key size. PGP uses fast symmetric encryption with a random session key, then encrypts only the small session key with the recipient\'s public key.'
          }
        ]
      },
      {
        id: '3.4',
        unitId: 3,
        title: 'Federated Identity & OAuth',
        concept: {
          analogy: 'OAuth is like a hotel key card system — instead of giving the cleaning staff the master key to your room (your password), the front desk (authorization server) issues a limited key card that only works during specific hours and only for specific rooms.',
          sections: [
            {
              heading: 'Federated Identity',
              content: '<key>Federated Identity</key> allows a user to use the same identity credentials across multiple systems and organizations. Instead of creating separate accounts everywhere, you authenticate once and access multiple services.\n\nExamples you use daily: "Sign in with Google," "Login with Facebook," "Continue with Apple." These use federated identity protocols.'
            },
            {
              heading: 'OAuth 2.0',
              content: '<key>OAuth 2.0</key> is an authorization framework that enables third-party applications to obtain limited access to a user\'s resources without exposing their credentials.\n\nKey roles:\n• <key>Resource Owner</key> — The user\n• <key>Client</key> — The third-party app\n• <key>Authorization Server</key> — Issues access tokens (e.g., Google)\n• <key>Resource Server</key> — Hosts the protected resources\n\nFlow: User clicks "Login with Google" → redirected to Google → grants permission → app receives an <key>access token</key> → uses token to access resources. The app never sees the user\'s password!'
            },
            {
              heading: 'OpenID Connect (OIDC)',
              content: '<key>OpenID Connect</key> is an identity layer built on top of OAuth 2.0. While OAuth handles authorization ("what can you access?"), OIDC adds authentication ("who are you?").\n\nOIDC introduces the <key>ID Token</key> — a JWT (JSON Web Token) containing user identity claims like name, email, and profile picture. This is how "Sign in with Google" works — it\'s OIDC over OAuth 2.0.'
            }
          ],
          didYouKnow: 'Before OAuth, many apps asked users to enter their actual email password to import contacts or access data. This was called "password anti-pattern" — extremely dangerous! OAuth was created specifically to eliminate this practice.',
          keyTerms: ['OAuth 2.0', 'Federated Identity', 'Access Token', 'Authorization Server', 'OpenID Connect', 'ID Token', 'JWT', 'SSO']
        },
        quiz: [
          {
            question: 'What is the main security benefit of OAuth 2.0?',
            options: ['Stronger passwords', 'Users never share their passwords with third-party apps', 'Faster authentication', 'Encrypted connections'],
            correct: 1,
            explanation: 'OAuth allows users to grant access without sharing credentials. The third-party app receives a limited-scope access token instead.'
          },
          {
            question: 'What does OpenID Connect add on top of OAuth 2.0?',
            options: ['Encryption', 'Authentication (identity verification)', 'Data compression', 'Password storage'],
            correct: 1,
            explanation: 'OAuth 2.0 handles authorization. OIDC adds an authentication layer with ID tokens that contain identity claims.'
          },
          {
            question: 'In OAuth 2.0, what does the client application receive after the user grants permission?',
            options: ['The user\'s password', 'An access token', 'The user\'s private key', 'A digital certificate'],
            correct: 1,
            explanation: 'After authorization, the client receives an access token — a credential representing the user\'s permission to access specific resources.'
          }
        ]
      },
      {
        id: '3.5',
        unitId: 3,
        title: 'Multi-Factor Authentication (MFA)',
        concept: {
          analogy: 'MFA is like a bank vault that requires three things to open: a key (something you have), a combination code (something you know), and a fingerprint scan (something you are). Even if a thief steals your key, they can\'t get in without the other factors.',
          sections: [
            {
              heading: 'Authentication Factors',
              content: 'Authentication can be based on one or more <key>factors</key>:\n\n• <key>Something you know</key> — Password, PIN, security question\n• <key>Something you have</key> — Phone, hardware token, smart card\n• <key>Something you are</key> — Fingerprint, face, iris, voice (biometrics)\n\n<key>Multi-Factor Authentication (MFA)</key> requires two or more different factor types. Using two passwords is NOT MFA — both are "something you know."'
            },
            {
              heading: 'MFA Methods in Practice',
              content: 'Common MFA methods:\n\n• <key>SMS OTP</key> — One-time code via text message (weakest — vulnerable to SIM swapping)\n• <key>TOTP</key> — Time-based One-Time Password (Google Authenticator, Authy) — shared secret + timestamp generates a 6-digit code every 30 seconds\n• <key>Push Notification</key> — Approve/deny prompt on your phone\n• <key>Hardware Tokens</key> — Physical devices like YubiKey (FIDO2/U2F)\n• <key>Biometrics</key> — Fingerprint, facial recognition, iris scan'
            },
            {
              heading: 'FIDO2 & Passwordless Future',
              content: '<key>FIDO2</key> is a modern authentication standard that aims to eliminate passwords entirely. It uses public-key cryptography: your device stores the private key, and the service stores only the public key.\n\nBenefits: No passwords to steal, phishing-resistant, no shared secrets on servers.\n\n<key>Passkeys</key> (built on FIDO2) are now supported by Apple, Google, and Microsoft — representing the future of authentication.'
            }
          ],
          didYouKnow: 'Google reported that after requiring hardware security keys for all 85,000+ employees in 2017, they had ZERO successful phishing attacks. Not a single one. Hardware tokens are that effective!',
          keyTerms: ['MFA', 'TOTP', 'FIDO2', 'Biometrics', 'Hardware Token', 'Passkeys', 'SIM Swapping', 'Authentication Factor']
        },
        quiz: [
          {
            question: 'Using a password + PIN is an example of MFA. True or False?',
            options: ['True — it uses two credentials', 'False — both are "something you know"', 'True — any two verifications count', 'False — PINs are not secure enough'],
            correct: 1,
            explanation: 'MFA requires different TYPES of factors. Password and PIN are both "something you know" — this is single-factor authentication with two credentials.'
          },
          {
            question: 'Why is SMS-based OTP considered the weakest form of MFA?',
            options: ['SMS is too slow', 'SMS messages can be intercepted via SIM swapping attacks', 'SMS codes are too long', 'SMS requires internet'],
            correct: 1,
            explanation: 'Attackers can convince phone carriers to transfer a victim\'s number to a new SIM (SIM swapping), intercepting all SMS codes. SMS is also vulnerable to SS7 protocol attacks.'
          },
          {
            question: 'What makes FIDO2/Passkeys resistant to phishing attacks?',
            options: ['They use longer passwords', 'The private key never leaves the user\'s device and is bound to the specific website origin', 'They require biometrics', 'They change every 30 seconds'],
            correct: 1,
            explanation: 'FIDO2 keys are cryptographically bound to the specific website domain. A phishing site on a different domain cannot trigger the authentication — the key simply won\'t work.'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Network Management Security',
    icon: 'Wifi',
    description: 'Understand network management protocols (SNMP), intrusion detection systems, password security, and practical defense mechanisms against network threats.',
    outcomes: [
      'Compare SNMP versions and their security implications',
      'Differentiate between signature-based and anomaly-based IDS',
      'Evaluate password threats and implement defense strategies'
    ],
    lessons: [
      {
        id: '4.1',
        unitId: 4,
        title: 'SNMP & Network Management Basics',
        concept: {
          analogy: 'SNMP is like a hospital monitoring system — a central nurse station (manager) remotely monitors all patient vitals (agents on network devices). Community strings in SNMPv1 are like leaving patient files on the desk unlocked — anyone walking by can read them.',
          sections: [
            {
              heading: 'What is SNMP?',
              content: '<key>SNMP (Simple Network Management Protocol)</key> is the standard protocol for managing devices on IP networks. It allows network administrators to monitor and manage network devices such as routers, switches, servers, printers, and more from a central location.\n\nSNMP operates over UDP:\n• Port <key>161</key> — Agent listens for requests from manager\n• Port <key>162</key> — Manager listens for traps (alerts) from agents'
            },
            {
              heading: 'Manager-Agent Model & MIB',
              content: 'SNMP uses a <key>manager-agent</key> architecture:\n\n• <key>Manager</key> — Central system that polls agents for data and receives alerts\n• <key>Agent</key> — Software running on each managed device that responds to queries and sends traps\n\nThe <key>MIB (Management Information Base)</key> is a database structure that defines what information each device can report. It uses a hierarchical tree of <key>OIDs (Object Identifiers)</key> — like a filesystem of device stats.\n\nOperations: GET (read a value), SET (change a value), TRAP (agent alerts manager of an event).'
            },
            {
              heading: 'SNMP Versions & Security',
              content: '<key>SNMPv1</key> — Uses plain-text <key>community strings</key> for authentication (commonly "public" for read, "private" for write). No encryption. Major security risk!\n\n<key>SNMPv2c</key> — Improved performance and error handling, but STILL uses plain-text community strings. Security unchanged.\n\n<key>SNMPv3</key> — Finally adds real security:\n• <key>Authentication</key> — MD5 or SHA-based (verifies sender identity)\n• <key>Encryption</key> — DES or AES (protects data confidentiality)\n• <key>Access Control</key> — User-based security model (USM)\n\nAlways use SNMPv3 in production environments!'
            }
          ],
          didYouKnow: 'The default community strings "public" and "private" in SNMPv1 are so widely known that they\'re literally the first things attackers try. A Shodan search reveals millions of devices still using default SNMP community strings on the public internet!',
          keyTerms: ['SNMP', 'MIB', 'OID', 'Community String', 'Manager-Agent', 'SNMPv3', 'USM', 'Trap']
        },
        quiz: [
          {
            question: 'What is the major security weakness of SNMPv1?',
            options: ['It uses too much bandwidth', 'Community strings are sent in plain text', 'It doesn\'t support traps', 'It only works on wired networks'],
            correct: 1,
            explanation: 'SNMPv1 community strings (which serve as passwords) are sent in plain text across the network, making them trivially easy to intercept.'
          },
          {
            question: 'What does an SNMP "trap" do?',
            options: ['Blocks unauthorized access', 'Allows the agent to proactively alert the manager of an event', 'Encrypts SNMP data', 'Sets a value on a managed device'],
            correct: 1,
            explanation: 'A trap is an unsolicited notification from an agent to the manager when a significant event occurs (like a link going down).'
          },
          {
            question: 'Which SNMP version should be used in production environments?',
            options: ['SNMPv1 for simplicity', 'SNMPv2c for compatibility', 'SNMPv3 for authentication and encryption', 'Any version works fine'],
            correct: 2,
            explanation: 'SNMPv3 is the only version that provides authentication, encryption, and access control. Previous versions send credentials in plain text.'
          }
        ]
      },
      {
        id: '4.2',
        unitId: 4,
        title: 'Intruders & Intrusion Detection Systems',
        concept: {
          analogy: 'Signature-based IDS = a bouncer with a list of banned faces — if you\'re on the list, you\'re out. Anomaly-based IDS = a bouncer who notices when someone is acting weird, even if they\'re not on any list.',
          sections: [
            {
              heading: 'Types of Intruders',
              content: 'Three categories of intruders:\n\n• <key>Masquerader</key> — An outsider who gains unauthorized access by exploiting a legitimate user\'s account. Not authorized to use the system at all.\n\n• <key>Misfeasor</key> — A legitimate user who exceeds their authorized access privileges. Has legitimate access but misuses it.\n\n• <key>Clandestine User</key> — An individual who gains supervisory control and uses it to evade auditing. Can suppress audit trails.'
            },
            {
              heading: 'Intrusion Detection Approaches',
              content: '<key>Signature-based Detection</key> (Misuse Detection):\n• Matches activity against a database of known attack patterns\n• Very accurate for known attacks (low false positives)\n• Cannot detect new/unknown attacks (zero-day)\n• Requires constant signature updates\n\n<key>Anomaly-based Detection</key>:\n• Builds a profile of "normal" behavior, alerts on deviations\n• Can detect novel attacks\n• Higher false positive rate (legitimate unusual activity triggers alerts)\n• Requires training period to learn what\'s "normal"'
            },
            {
              heading: 'NIDS vs HIDS',
              content: '<key>NIDS (Network-based IDS)</key>:\n• Monitors network traffic at strategic points\n• Analyzes packet headers and payloads\n• Can monitor many hosts simultaneously\n• Cannot see encrypted traffic or host-level events\n\n<key>HIDS (Host-based IDS)</key>:\n• Monitors activity on a single host/server\n• Analyzes system logs, file integrity, process activity\n• Can see decrypted traffic and system-level events\n• More resource-intensive per host\n\nBest practice: Deploy BOTH for defense in depth!'
            }
          ],
          didYouKnow: 'The famous 2013 Target data breach (40 million credit cards stolen) was actually detected by their IDS — but the security team ignored the alerts! Technology alone isn\'t enough; human processes matter too.',
          keyTerms: ['IDS', 'Signature-based', 'Anomaly-based', 'NIDS', 'HIDS', 'Masquerader', 'Misfeasor', 'False Positive', 'Zero-day']
        },
        quiz: [
          {
            question: 'A company employee accesses salary records of other employees they are not authorized to view. This intruder is a:',
            options: ['Masquerader', 'Misfeasor', 'Clandestine user', 'External attacker'],
            correct: 1,
            explanation: 'A misfeasor is a legitimate user who exceeds their authorized access. The employee has valid system access but is viewing data beyond their permission level.'
          },
          {
            question: 'A brand-new malware variant is released. Which IDS type has a better chance of detecting it?',
            options: ['Signature-based IDS', 'Anomaly-based IDS', 'Both would detect it equally', 'Neither can detect new malware'],
            correct: 1,
            explanation: 'Anomaly-based IDS detects deviations from normal behavior, so it can potentially catch unknown attacks. Signature-based IDS only matches known patterns and would miss a new variant.'
          },
          {
            question: 'Which type of IDS can monitor encrypted traffic?',
            options: ['NIDS', 'HIDS', 'Both', 'Neither'],
            correct: 1,
            explanation: 'HIDS runs on the host where traffic is decrypted, so it can inspect the actual content. NIDS only sees encrypted packets on the network.'
          }
        ]
      },
      {
        id: '4.3',
        unitId: 4,
        title: 'Password Management & Threats',
        concept: {
          analogy: 'A salted hash is like adding a secret ingredient to your recipe — even if two chefs make the exact same dish, the results look different in the cookbook because each chef added a different secret ingredient (salt).',
          sections: [
            {
              heading: 'Password Threats',
              content: 'Common attack vectors against passwords:\n\n• <key>Brute Force</key> — Trying every possible combination systematically. Time grows exponentially with password length.\n\n• <key>Dictionary Attack</key> — Trying common words, phrases, and known passwords from leaked databases. Much faster than brute force.\n\n• <key>Phishing</key> — Tricking users into entering credentials on fake websites that mimic legitimate ones.\n\n• <key>Credential Stuffing</key> — Using username/password pairs leaked from one site to try on other sites (exploits password reuse).\n\n• <key>Shoulder Surfing</key> — Physically observing someone typing their password.'
            },
            {
              heading: 'Password Storage: Salted Hashing',
              content: 'Passwords should NEVER be stored in plain text. The proper approach:\n\n1. Generate a random <key>salt</key> (unique per user)\n2. Combine: salt + password\n3. Hash the combination: hash = H(salt + password)\n4. Store: salt + hash (NOT the password)\n\nWhy salt? Without salt, identical passwords produce identical hashes — an attacker with a <key>rainbow table</key> (precomputed hash→password lookup) can crack them instantly. Salt ensures each hash is unique even for identical passwords.\n\nModern algorithms: <key>bcrypt</key>, <key>scrypt</key>, <key>Argon2</key> (deliberately slow to resist brute force).'
            },
            {
              heading: 'Defense Strategies',
              content: 'Layered password defense:\n\n• <key>Password Policies</key> — Minimum length (12+ chars recommended), complexity requirements, no dictionary words\n\n• <key>Account Lockout</key> — Lock account after N failed attempts (beware of DoS via lockout abuse)\n\n• <key>Rate Limiting</key> — Slow down repeated login attempts\n\n• <key>Multi-Factor Authentication</key> — Even if password is compromised, attacker needs second factor\n\n• <key>Password Managers</key> — Generate and store unique strong passwords for each site\n\n• <key>Breach Monitoring</key> — Check if credentials appear in known data breaches (e.g., HaveIBeenPwned)'
            }
          ],
          didYouKnow: 'The most common password in 2024 was still "123456" — used by over 4.5 million people! The second most common? "password". These can be cracked in under 1 second.',
          keyTerms: ['Brute Force', 'Dictionary Attack', 'Phishing', 'Salted Hash', 'Rainbow Table', 'bcrypt', 'Argon2', 'Credential Stuffing']
        },
        quiz: [
          {
            question: 'What is the purpose of adding a "salt" before hashing a password?',
            options: ['To make the password longer', 'To prevent identical passwords from producing the same hash', 'To encrypt the password', 'To speed up the hashing process'],
            correct: 1,
            explanation: 'A unique salt ensures that even if two users have the same password, their stored hashes will be different — defeating rainbow table attacks.'
          },
          {
            question: 'An attacker uses a list of 10 million commonly-used passwords to try logging in. This is a:',
            options: ['Brute force attack', 'Dictionary attack', 'Phishing attack', 'Man-in-the-middle attack'],
            correct: 1,
            explanation: 'A dictionary attack uses a pre-compiled list of common passwords and words rather than trying every possible combination (brute force).'
          },
          {
            question: 'Which password hashing algorithm is specifically designed to be slow and resource-intensive?',
            options: ['MD5', 'SHA-256', 'bcrypt', 'Base64'],
            correct: 2,
            explanation: 'bcrypt (and Argon2, scrypt) are deliberately slow and computationally expensive, making brute-force attacks much harder. MD5 and SHA-256 are designed to be fast — bad for password hashing.'
          }
        ]
      },
      {
        id: '4.4',
        unitId: 4,
        title: 'IP Security (IPsec)',
        concept: {
          analogy: 'IPsec is like a secure armored convoy for your data packets — it can either seal and sign the package (AH mode, ensuring nobody tampered with it) or put the entire package inside an encrypted vault (ESP mode, hiding the contents completely).',
          sections: [
            {
              heading: 'What is IPsec?',
              content: '<key>IPsec (Internet Protocol Security)</key> is a suite of protocols that provides security at the network layer (Layer 3). Unlike TLS which protects individual application connections, IPsec protects ALL traffic between two points — making it ideal for VPNs.\n\nIPsec provides: <key>Confidentiality</key> (encryption), <key>Integrity</key> (hash verification), <key>Authentication</key> (identity verification), and <key>Anti-replay</key> protection.'
            },
            {
              heading: 'AH and ESP',
              content: 'IPsec has two main protocols:\n\n<key>AH (Authentication Header)</key>:\n• Provides integrity and authentication\n• Does NOT provide encryption\n• Protects the entire packet including the IP header\n• Detects any modification to the packet\n\n<key>ESP (Encapsulating Security Payload)</key>:\n• Provides confidentiality (encryption) + integrity + authentication\n• Encrypts the payload (not the outer IP header)\n• More commonly used than AH\n• Can be used alone or combined with AH'
            },
            {
              heading: 'Transport vs Tunnel Mode',
              content: '<key>Transport Mode</key>:\n• Protects only the payload of the IP packet\n• Original IP header remains intact\n• Used for end-to-end communication between hosts\n\n<key>Tunnel Mode</key>:\n• Protects the ENTIRE original IP packet\n• New IP header added on top\n• Used for VPN gateways (site-to-site VPN)\n• The original packet is hidden inside the new encrypted packet\n\n<key>IKE (Internet Key Exchange)</key> handles the negotiation of security associations and key exchange for IPsec.'
            }
          ],
          didYouKnow: 'When you connect to your company\'s VPN from home, you\'re likely using IPsec in tunnel mode! Your entire internet traffic is wrapped inside encrypted IPsec packets that travel to your company\'s VPN gateway before being unwrapped.',
          keyTerms: ['IPsec', 'AH', 'ESP', 'Transport Mode', 'Tunnel Mode', 'Security Association', 'IKE', 'VPN']
        },
        quiz: [
          {
            question: 'Which IPsec protocol provides encryption?',
            options: ['AH (Authentication Header)', 'ESP (Encapsulating Security Payload)', 'Both AH and ESP', 'Neither — IPsec doesn\'t encrypt'],
            correct: 1,
            explanation: 'ESP provides encryption (confidentiality) along with integrity and authentication. AH provides only integrity and authentication without encryption.'
          },
          {
            question: 'A company wants to create a secure VPN tunnel between two office locations. Which IPsec mode should they use?',
            options: ['Transport Mode', 'Tunnel Mode', 'Either mode works equally well', 'IPsec doesn\'t support VPN'],
            correct: 1,
            explanation: 'Tunnel mode encapsulates the entire original IP packet, hiding the internal network addresses — this is the standard mode for site-to-site VPNs.'
          },
          {
            question: 'At which layer of the OSI model does IPsec operate?',
            options: ['Application Layer (Layer 7)', 'Transport Layer (Layer 4)', 'Network Layer (Layer 3)', 'Data Link Layer (Layer 2)'],
            correct: 2,
            explanation: 'IPsec operates at the Network Layer (Layer 3), providing security for all traffic regardless of the application — unlike TLS which works at the Transport/Application layer.'
          }
        ]
      },
      {
        id: '4.5',
        unitId: 4,
        title: 'SSL/TLS & Web Security',
        concept: {
          analogy: 'TLS is like a secure phone line — before you start talking (sending data), both sides verify each other\'s identity (handshake), agree on a secret language (cipher suite), and then all conversation is encrypted. The padlock icon in your browser means this secure line is active.',
          sections: [
            {
              heading: 'SSL/TLS Overview',
              content: '<key>TLS (Transport Layer Security)</key> is the successor to SSL (Secure Sockets Layer). It provides secure communication over the internet by sitting between the application layer and transport layer.\n\nTLS provides:\n• <key>Server Authentication</key> — Verify you\'re talking to the real website\n• <key>Data Encryption</key> — Protect data in transit\n• <key>Data Integrity</key> — Detect any modifications\n• <key>Optional Client Authentication</key> — Server verifies client identity'
            },
            {
              heading: 'The TLS Handshake',
              content: 'The <key>TLS handshake</key> establishes a secure connection:\n\n1. <key>Client Hello</key> — Client sends supported TLS versions, cipher suites, random number\n2. <key>Server Hello</key> — Server selects TLS version, cipher suite, sends its certificate + random number\n3. <key>Certificate Verification</key> — Client verifies server\'s certificate chain against trusted CAs\n4. <key>Key Exchange</key> — Both parties generate a shared secret (using DH or ECDH)\n5. <key>Finished</key> — Both compute session keys from the shared secret and switch to encrypted communication\n\nIn TLS 1.3, this handshake is streamlined to just 1 round trip (1-RTT), down from 2 in TLS 1.2.'
            },
            {
              heading: 'Common Web Vulnerabilities',
              content: 'Even with TLS, web applications face threats:\n\n• <key>MITM (Man-in-the-Middle)</key> — Attacker intercepts communication (TLS prevents this if properly implemented)\n• <key>Certificate Pinning</key> — Apps hardcode expected certificates to prevent fake CA attacks\n• <key>HSTS</key> — HTTP Strict Transport Security forces browsers to use HTTPS only\n• <key>Mixed Content</key> — Loading HTTP resources on HTTPS pages weakens security\n\nAlways check for the padlock icon AND verify the domain name!'
            }
          ],
          didYouKnow: 'TLS 1.3 (released in 2018) removed support for older unsafe algorithms and reduced the handshake from 2 round trips to just 1. This means HTTPS connections are now both MORE secure AND faster than older versions!',
          keyTerms: ['TLS', 'SSL', 'Handshake', 'Cipher Suite', 'Certificate', 'HTTPS', 'HSTS', 'Perfect Forward Secrecy']
        },
        quiz: [
          {
            question: 'What is the purpose of the TLS handshake?',
            options: ['To compress data', 'To establish shared encryption keys and verify identities', 'To test network speed', 'To assign IP addresses'],
            correct: 1,
            explanation: 'The TLS handshake authenticates the server (and optionally the client), negotiates cipher suites, and establishes shared session keys for encryption.'
          },
          {
            question: 'How does TLS 1.3 improve over TLS 1.2?',
            options: ['Larger key sizes only', 'Faster handshake (1-RTT) and removal of unsafe algorithms', 'Support for more protocols', 'Backward compatibility with SSL 2.0'],
            correct: 1,
            explanation: 'TLS 1.3 reduces the handshake to 1 round trip (from 2), removes deprecated cipher suites (RC4, DES, 3DES), and mandates Perfect Forward Secrecy.'
          },
          {
            question: 'What does HSTS (HTTP Strict Transport Security) do?',
            options: ['Encrypts DNS queries', 'Forces browsers to only connect via HTTPS', 'Blocks all HTTP traffic on the server', 'Compresses HTTPS responses'],
            correct: 1,
            explanation: 'HSTS is a response header that tells browsers to always use HTTPS for a domain, preventing protocol downgrade attacks and cookie hijacking.'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'Malicious Software',
    icon: 'Bug',
    description: 'Analyze the full malware landscape — viruses, worms, trojans, ransomware, DDoS attacks, detection techniques, and firewall architectures for defense.',
    outcomes: [
      'Classify malware types and their infection mechanisms',
      'Compare antivirus detection techniques and DDoS mitigation',
      'Design firewall rules and evaluate trusted system concepts'
    ],
    lessons: [
      {
        id: '5.1',
        unitId: 5,
        title: 'Viruses, Malware Types & Infection Mechanisms',
        concept: {
          analogy: 'A virus needs a host file to survive — just like a biological virus needs a living cell. A worm is self-sufficient — it travels alone across networks, spreading autonomously without needing anyone to "open a file."',
          sections: [
            {
              heading: 'Malware Taxonomy',
              content: '<key>Malware</key> (malicious software) is any software designed to harm:\n\n• <key>Virus</key> — Attaches to a host file, replicates when the file is executed. Cannot spread on its own.\n\n• <key>Worm</key> — Self-replicating, spreads across networks without user action or host files.\n\n• <key>Trojan Horse</key> — Disguises itself as legitimate software. Does not self-replicate.\n\n• <key>Ransomware</key> — Encrypts victim\'s files, demands payment for decryption key.\n\n• <key>Spyware</key> — Secretly monitors user activity (keystrokes, browsing, passwords).\n\n• <key>Rootkit</key> — Hides deep in the OS to maintain persistent, undetectable access.\n\n• <key>Keylogger</key> — Records all keystrokes to capture passwords and sensitive data.\n\n• <key>Adware</key> — Displays unwanted advertisements, often bundled with free software.'
            },
            {
              heading: 'Virus vs Worm',
              content: 'Key distinction:\n\n<key>Virus</key>:\n• Needs a host file to attach to\n• Requires user action to spread (opening file, running program)\n• Spreads when infected files are shared\n• Example: Melissa virus (1999) — spread via Word documents\n\n<key>Worm</key>:\n• Standalone — no host file needed\n• Self-propagates automatically across networks\n• Exploits vulnerabilities without user action\n• Example: WannaCry (2017) — exploited Windows SMB vulnerability, infected 200,000+ computers in 150 countries'
            },
            {
              heading: 'Infection Mechanisms',
              content: 'How viruses infect systems:\n\n• <key>File Infection</key> — Virus attaches to executable files (.exe, .com)\n\n• <key>Boot Sector</key> — Infects the Master Boot Record, activates before the OS loads\n\n• <key>Macro Virus</key> — Embeds in documents (Word, Excel) using macro scripting\n\n• <key>Polymorphic Virus</key> — Mutates its code with each replication, making signature detection extremely difficult\n\n• <key>Metamorphic Virus</key> — Completely rewrites itself each time, even more evasive than polymorphic'
            }
          ],
          didYouKnow: 'The ILOVEYOU worm (2000) was one of the most destructive malware ever — it infected over 50 million computers worldwide in just 10 days, causing an estimated $15 billion in damage. It spread via email with the subject line "ILOVEYOU" and an attached "love letter."',
          keyTerms: ['Virus', 'Worm', 'Trojan', 'Ransomware', 'Rootkit', 'Polymorphic', 'Boot Sector', 'Macro Virus']
        },
        quiz: [
          {
            question: 'What is the key difference between a virus and a worm?',
            options: ['Viruses are more dangerous', 'A virus needs a host file; a worm is self-replicating and standalone', 'Worms only affect mobile devices', 'Viruses spread faster than worms'],
            correct: 1,
            explanation: 'A virus attaches to and requires a host file to spread (needs user action). A worm is standalone and self-replicates across networks without user intervention.'
          },
          {
            question: 'A user downloads a free game that secretly installs a keylogger. The game is a:',
            options: ['Virus', 'Worm', 'Trojan Horse', 'Adware'],
            correct: 2,
            explanation: 'A Trojan Horse disguises itself as legitimate software (the game) while carrying a hidden malicious payload (the keylogger). It relies on the user being tricked into installing it.'
          },
          {
            question: 'Why are polymorphic viruses difficult for antivirus software to detect?',
            options: ['They spread too fast', 'They change their code signature with each replication', 'They only infect Mac computers', 'They delete antivirus software'],
            correct: 1,
            explanation: 'Polymorphic viruses mutate their code (while maintaining the same function) each time they replicate, generating a different signature that evades pattern-matching detection.'
          }
        ]
      },
      {
        id: '5.2',
        unitId: 5,
        title: 'Virus Countermeasures & DDoS',
        concept: {
          analogy: 'DDoS is like 10,000 people calling a restaurant simultaneously — no real customers can get through. The restaurant (server) is overwhelmed even though none of the individual calls are "illegal." Rate limiting is like the restaurant hiring a receptionist who recognizes and blocks the fake callers.',
          sections: [
            {
              heading: 'Antivirus Detection Techniques',
              content: 'How antivirus software detects malware:\n\n• <key>Signature Scanning</key> — Compares files against a database of known malware signatures (byte patterns). Fast and accurate for known threats, useless against unknown malware.\n\n• <key>Heuristic Analysis</key> — Examines code structure and behavior patterns to identify "virus-like" characteristics without exact signature matches. Can detect variants.\n\n• <key>Behavioral Detection</key> — Monitors program behavior at runtime (file modifications, registry changes, network connections). Catches active malware regardless of signature.\n\n• <key>Sandboxing</key> — Runs suspicious files in an isolated virtual environment to observe behavior safely before allowing execution on the real system.'
            },
            {
              heading: 'DDoS Attacks',
              content: '<key>DDoS (Distributed Denial of Service)</key> overwhelms a target with massive traffic from many sources:\n\nTypes:\n• <key>Volumetric</key> — Floods bandwidth with massive traffic (UDP flood, DNS amplification). Measured in Gbps.\n\n• <key>Protocol</key> — Exploits protocol weaknesses (SYN flood, Ping of Death). Consumes server resources.\n\n• <key>Application Layer</key> — Targets specific services with seemingly legitimate requests (HTTP flood). Hardest to detect.\n\n<key>Botnets</key> — Networks of compromised "zombie" computers controlled by the attacker to launch DDoS. Modern botnets can consist of millions of IoT devices.'
            },
            {
              heading: 'DDoS Mitigation',
              content: 'Defense strategies:\n\n• <key>Rate Limiting</key> — Limit requests per IP address per time window\n\n• <key>CDN (Content Delivery Network)</key> — Distribute traffic across global edge servers (Cloudflare, Akamai)\n\n• <key>Blackholing</key> — Route attack traffic to a "black hole" (null route). Effective but also drops legitimate traffic.\n\n• <key>Scrubbing Centers</key> — Redirect all traffic through a cleaning service that filters malicious packets and forwards only legitimate ones\n\n• <key>Anycast</key> — Multiple servers share the same IP address, distributing attack traffic across locations'
            }
          ],
          didYouKnow: 'The largest DDoS attack ever recorded (as of 2024) peaked at 3.47 Tbps (terabits per second) — that\'s enough bandwidth to download about 43,000 HD movies per second! It targeted a Microsoft Azure customer and was mitigated within minutes.',
          keyTerms: ['Signature Scanning', 'Heuristic', 'Behavioral Detection', 'Sandboxing', 'DDoS', 'Botnet', 'Rate Limiting', 'CDN']
        },
        quiz: [
          {
            question: 'A virus changes its code with every replication. Which detection method is LEAST effective against it?',
            options: ['Signature scanning', 'Behavioral detection', 'Sandboxing', 'Heuristic analysis'],
            correct: 0,
            explanation: 'A polymorphic virus changes its signature with each copy. Signature scanning relies on exact pattern matching and would miss the mutated versions.'
          },
          {
            question: 'In a SYN flood DDoS attack, the attacker:',
            options: ['Sends massive file downloads', 'Sends many TCP SYN requests without completing the handshake', 'Cracks the server\'s password', 'Injects malware into web pages'],
            correct: 1,
            explanation: 'A SYN flood sends thousands of TCP SYN (connection start) requests without ever completing the 3-way handshake, exhausting the server\'s connection table.'
          },
          {
            question: 'What is the role of a "botnet" in a DDoS attack?',
            options: ['It\'s the target server', 'A network of compromised devices that generate attack traffic', 'It\'s the firewall protecting the server', 'A tool for detecting DDoS attacks'],
            correct: 1,
            explanation: 'A botnet is a network of compromised "zombie" devices controlled by the attacker. Each device sends traffic to the target, creating a distributed attack.'
          }
        ]
      },
      {
        id: '5.3',
        unitId: 5,
        title: 'Firewalls: Design, Trusted Systems & Security Evaluation',
        concept: {
          analogy: 'A packet filter firewall is like a security guard who only checks your ID card (IP address, port). A proxy firewall is like a guard who also reads your messages, approves the content, and personally delivers them to the office — more thorough but slower.',
          sections: [
            {
              heading: 'Firewall Types',
              content: 'Firewalls control traffic between networks:\n\n• <key>Packet Filter</key> — Examines each packet\'s header (source/destination IP, port, protocol). Simple, fast, but can\'t inspect content. Operates at Layer 3-4.\n\n• <key>Stateful Inspection</key> — Tracks the state of network connections. Knows if a packet belongs to an established connection vs. a new request. More intelligent than simple packet filtering.\n\n• <key>Application-Level Gateway (Proxy)</key> — Acts as intermediary. Fully inspects application-layer data (HTTP content, URLs, etc.). Very secure but slower. Operates at Layer 7.\n\n• <key>Circuit-Level Gateway</key> — Monitors TCP handshake to determine if a session is legitimate. Doesn\'t inspect actual data content. Operates at Layer 5.'
            },
            {
              heading: 'DMZ & Network Topology',
              content: 'A <key>DMZ (Demilitarized Zone)</key> is a network segment between the external internet and internal network, hosting public-facing services:\n\nTopology: Internet → <key>External Firewall</key> → DMZ (web server, mail server, DNS) → <key>Internal Firewall</key> → Internal Network (databases, workstations)\n\nThis creates defense in depth — even if an attacker compromises a DMZ server, they still face the internal firewall before reaching sensitive data.\n\n<key>Bastion Host</key> — A specially hardened server in the DMZ designed to withstand attacks.'
            },
            {
              heading: 'Security Evaluation & Trusted Systems',
              content: '<key>Common Criteria (CC)</key> is the international standard (ISO 15408) for evaluating IT security products. It defines <key>Evaluation Assurance Levels (EAL)</key>:\n\n• EAL1 — Functionally tested\n• EAL2 — Structurally tested\n• EAL3 — Methodically tested and checked\n• EAL4 — Methodically designed, tested, and reviewed\n• EAL5 — Semi-formally designed and tested\n• EAL6 — Semi-formally verified design and tested\n• EAL7 — Formally verified design and tested (highest)\n\nThe <key>Trusted Computing Base (TCB)</key> is the set of all hardware, software, and firmware components critical to security. A smaller TCB is easier to verify and more secure.'
            }
          ],
          didYouKnow: 'The Great Firewall of China is the world\'s most sophisticated national firewall system. It combines packet filtering, deep packet inspection, DNS poisoning, and AI-based content analysis to control internet access for over 1 billion users!',
          keyTerms: ['Packet Filter', 'Stateful Inspection', 'Proxy Firewall', 'DMZ', 'Bastion Host', 'Common Criteria', 'EAL', 'TCB']
        },
        quiz: [
          {
            question: 'Which firewall type provides the most thorough traffic inspection?',
            options: ['Packet filter', 'Stateful inspection', 'Application-level gateway (proxy)', 'Circuit-level gateway'],
            correct: 2,
            explanation: 'Application-level gateways inspect the full application-layer content (URLs, HTTP headers, payload), providing the deepest inspection at the cost of performance.'
          },
          {
            question: 'What is the purpose of a DMZ in network architecture?',
            options: ['To provide free internet access', 'To create a buffer zone between the internet and internal network for public-facing services', 'To speed up internal network traffic', 'To store backups'],
            correct: 1,
            explanation: 'A DMZ hosts services that need internet access (web servers, mail) while protecting the internal network behind an additional firewall layer.'
          },
          {
            question: 'In the Common Criteria, what does EAL7 represent?',
            options: ['The lowest level of security', 'The fastest evaluation', 'Formally verified design and testing (highest assurance)', 'Only applicable to firewalls'],
            correct: 2,
            explanation: 'EAL7 is the highest assurance level, requiring formal (mathematical) verification of the security design — extremely rigorous and expensive.'
          }
        ]
      },
      {
        id: '5.4',
        unitId: 5,
        title: 'Advanced Persistent Threats & Incident Response',
        concept: {
          analogy: 'An APT is like a patient burglar who spends months studying your house, finds a tiny unlocked window, sneaks in at night, hides in your attic, and slowly copies your valuables over weeks — rather than smashing through the front door.',
          sections: [
            {
              heading: 'Advanced Persistent Threats (APTs)',
              content: '<key>APTs</key> are sophisticated, long-term cyber attacks typically carried out by well-funded groups (nation-states, organized crime):\n\nCharacteristics:\n• <key>Advanced</key> — Use custom malware, zero-day exploits, social engineering\n• <key>Persistent</key> — Maintain access for months or years, continuously exfiltrating data\n• <key>Threat</key> — Targeted attacks against specific organizations (not random)\n\nAPT lifecycle: Reconnaissance → Initial compromise → Establish foothold → Escalate privileges → Internal reconnaissance → Move laterally → Maintain presence → Complete mission'
            },
            {
              heading: 'Incident Response (IR)',
              content: 'When a security breach occurs, a structured <key>Incident Response</key> process is critical:\n\n1. <key>Preparation</key> — Create IR plan, train team, set up tools before incidents occur\n2. <key>Identification</key> — Detect and confirm the incident (IDS alerts, user reports, anomalies)\n3. <key>Containment</key> — Limit the damage (isolate affected systems, block malicious IPs)\n4. <key>Eradication</key> — Remove the threat (delete malware, patch vulnerabilities, reset credentials)\n5. <key>Recovery</key> — Restore systems to normal operation (rebuild, restore from backups, monitor)\n6. <key>Lessons Learned</key> — Post-incident review to improve defenses and update the IR plan'
            },
            {
              heading: 'Threat Intelligence & SOC',
              content: '<key>Threat Intelligence</key> is evidence-based knowledge about existing or emerging threats that helps organizations make informed security decisions.\n\nA <key>SOC (Security Operations Center)</key> is a centralized team that continuously monitors an organization\'s security:\n• Monitors SIEM (Security Information and Event Management) alerts 24/7\n• Investigates and triages security incidents\n• Coordinates incident response\n• Maintains threat intelligence feeds\n\n<key>MITRE ATT&CK</key> is a globally-accessible knowledge base of adversary tactics and techniques — essentially a playbook of how attackers operate.'
            }
          ],
          didYouKnow: 'The SolarWinds attack (2020) is considered one of the most sophisticated APTs ever. Attackers compromised the SolarWinds Orion software update process, backdooring updates sent to 18,000+ organizations including US government agencies. The attack went undetected for 9 months!',
          keyTerms: ['APT', 'Incident Response', 'SOC', 'SIEM', 'MITRE ATT&CK', 'Kill Chain', 'Lateral Movement', 'Threat Intelligence']
        },
        quiz: [
          {
            question: 'What makes an APT different from a regular cyber attack?',
            options: ['APTs are always automated', 'APTs are targeted, sophisticated, and persistent over long periods', 'APTs only target individuals', 'APTs are always financially motivated'],
            correct: 1,
            explanation: 'APTs are characterized by being Advanced (sophisticated techniques), Persistent (long-term presence), and Targeted (specific organization) — unlike opportunistic attacks.'
          },
          {
            question: 'In incident response, what should happen AFTER containing a security breach?',
            options: ['Preparation', 'Eradication — remove the threat completely', 'Identification', 'Notify the media'],
            correct: 1,
            explanation: 'After containment (limiting damage), the next step is Eradication — removing the threat entirely (malware, compromised accounts, vulnerabilities that were exploited).'
          },
          {
            question: 'What is MITRE ATT&CK?',
            options: ['An antivirus software', 'A knowledge base of adversary tactics and techniques', 'A type of firewall', 'An encryption algorithm'],
            correct: 1,
            explanation: 'MITRE ATT&CK is a comprehensive knowledge base that catalogs adversary tactics, techniques, and procedures (TTPs) based on real-world observations — used by defenders to understand how attackers operate.'
          }
        ]
      }
    ]
  }
];

// Flatten all lessons for easy lookup
export const getAllLessons = () => {
  return units.flatMap(unit => unit.lessons);
};

export const getLessonById = (id) => {
  for (const unit of units) {
    const lesson = unit.lessons.find(l => l.id === id);
    if (lesson) return lesson;
  }
  return null;
};

export const getUnitById = (id) => {
  return units.find(u => u.id === id);
};

export const getTotalLessons = () => {
  return units.reduce((sum, unit) => sum + unit.lessons.length, 0);
};
