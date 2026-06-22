import React, { useEffect, useState } from 'react';
import { CheckCircle, Trophy, ArrowRight } from 'lucide-react';

export default function LessonComplete({ onBack }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className={`text-center py-16 px-6 max-w-lg mx-auto bg-surface/50 backdrop-blur-md rounded-3xl border border-border/60 shadow-2xl transition-all duration-700 ease-out relative overflow-hidden ${show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
      
      {/* Decorative background elements */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-secondary/15 mb-8 shadow-[0_0_40px_rgba(0,212,170,0.3)] border-2 border-secondary/30 relative animate-[float_4s_ease-in-out_infinite]">
          <div className="absolute inset-0 rounded-full border border-secondary/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
          <Trophy className="w-12 h-12 text-secondary drop-shadow-[0_0_10px_rgba(0,212,170,0.5)]" />
        </div>
        
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-text via-text to-secondary">
          Lesson Complete!
        </h2>
        
        <p className="text-text-secondary/90 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
          Great job! You've successfully mastered this topic. Keep up the momentum.
        </p>
        
        <button 
          onClick={onBack} 
          className="btn-secondary group text-base px-8 py-3.5 font-bold shadow-lg shadow-secondary/20 hover:shadow-secondary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
        >
          Return to Unit <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
