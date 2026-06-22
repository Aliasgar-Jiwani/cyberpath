import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function Toast({ message, type = 'success' }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-[60] animate-fade-in`}>
      <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border shadow-xl ${
        type === 'success' ? 'bg-secondary-dim border-secondary text-secondary' : 'bg-danger-dim border-danger text-danger'
      }`}>
        {type === 'success' ? <CheckCircle className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}
