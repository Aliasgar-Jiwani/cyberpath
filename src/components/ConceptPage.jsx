import React from 'react';
import { Lightbulb, Info, Sparkles, BookOpen } from 'lucide-react';

export default function ConceptPage({ lesson, onNextTab }) {
  // Parse content to render key terms as highlighted pills
  const renderContent = (text) => {
    if (!text) return null;
    const parts = text.split(/(<key>.*?<\/key>)/g);
    return parts.map((part, i) => {
      const match = part.match(/<key>(.*?)<\/key>/);
      if (match) {
        return <span key={i} className="inline-flex items-center px-1.5 py-0.5 mx-0.5 rounded-md bg-highlight/15 text-highlight font-semibold border border-highlight/20 text-[0.95em] transition-colors hover:bg-highlight/25 cursor-default">{match[1]}</span>;
      }
      // Handle newlines
      return part.split('\n').map((line, j) => (
        <React.Fragment key={`${i}-${j}`}>
          {j > 0 && <div className="h-4" />}
          {line}
        </React.Fragment>
      ));
    });
  };

  const { concept } = lesson;

  return (
    <div className="animate-fade-in max-w-3xl mx-auto pb-8">
      {/* Analogy Box */}
      <div className="relative mb-6 sm:mb-10 overflow-hidden rounded-xl sm:rounded-2xl border border-highlight/30 bg-gradient-to-br from-highlight/10 to-highlight/5 p-4 sm:p-6 shadow-lg shadow-highlight/5 group transition-all duration-300 hover:shadow-highlight/10">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-highlight group-hover:w-2 transition-all duration-300" />
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="p-2 sm:p-3 bg-highlight/20 rounded-lg sm:rounded-xl flex-shrink-0">
            <Lightbulb className="w-6 h-6 text-highlight" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-highlight uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Real-World Analogy
            </p>
            <p className="text-text leading-relaxed text-[15px]">{concept.analogy}</p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-6 sm:space-y-10">
        {concept.sections.map((section, i) => (
          <div key={i} className="animate-fade-in-up bg-surface/30 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/40" style={{ animationDelay: `${i * 0.1}s` }}>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-text flex items-center gap-2 sm:gap-3">
              <span className="w-1.5 h-6 bg-primary rounded-full shadow-[0_0_10px_rgba(108,99,255,0.5)]" />
              {section.heading}
            </h3>
            <div className="text-text-secondary/90 leading-[1.8] text-[14px] sm:text-[15px] pl-2 sm:pl-4">
              {renderContent(section.content)}
            </div>
          </div>
        ))}
      </div>

      {/* Did You Know Box */}
      {concept.didYouKnow && (
        <div className="relative mt-6 sm:mt-10 overflow-hidden rounded-xl sm:rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 p-4 sm:p-6 shadow-lg shadow-primary/5 group transition-all duration-300 hover:shadow-primary/10">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary group-hover:w-2 transition-all duration-300" />
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="p-2 sm:p-3 bg-primary/20 rounded-lg sm:rounded-xl flex-shrink-0">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-primary uppercase tracking-widest mb-1.5">Did You Know?</p>
              <p className="text-text leading-relaxed text-[15px]">{concept.didYouKnow}</p>
            </div>
          </div>
        </div>
      )}

      {/* Key Terms Summary */}
      {concept.keyTerms && concept.keyTerms.length > 0 && (
        <div className="mt-6 sm:mt-10 p-4 sm:p-6 bg-surface/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-border/60 shadow-sm">
          <p className="text-xs font-bold text-text-secondary uppercase tracking-widest mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Key Terms in This Lesson
          </p>
          <div className="flex flex-wrap gap-2.5">
            {concept.keyTerms.map((term, i) => (
              <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-surface-hover border border-border text-text text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default">
                {term}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Next Button */}
      <div className="mt-12 flex justify-end">
        <button onClick={() => onNextTab('visual')} className="btn-primary group flex items-center gap-2 px-6 py-3 text-base">
          Next: Visual 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
}
