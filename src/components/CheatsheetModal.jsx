import React from 'react';
import { X, BookOpen, Printer } from 'lucide-react';

export default function CheatsheetModal({ unitTitle, terms, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm transition-opacity" />

      {/* Modal */}
      <div
        className="relative bg-surface/90 backdrop-blur-xl border border-border/60 rounded-t-3xl sm:rounded-3xl max-w-4xl w-full max-h-[92vh] sm:max-h-[85vh] overflow-hidden animate-scale-in shadow-2xl flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-border/50 bg-surface/50 flex-shrink-0">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 flex-shrink-0">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-text leading-none">Unit Cheatsheet</h2>
              <p className="text-[12px] sm:text-[13px] text-text-secondary/80 mt-1 font-medium truncate">{unitTitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-surface-hover hover:text-danger transition-colors text-text-secondary flex-shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-3 sm:p-6 custom-scrollbar">
          {/* Desktop Table - hidden on mobile */}
          <div className="hidden sm:block rounded-2xl border border-border/50 overflow-hidden bg-bg/30">
            <table className="w-full text-[15px] text-left border-collapse">
              <thead>
                <tr className="bg-surface/50 border-b border-border/50 text-text-secondary/90">
                  <th className="py-3.5 px-5 font-bold uppercase tracking-wider text-xs w-[25%]">Key Term</th>
                  <th className="py-3.5 px-5 font-bold uppercase tracking-wider text-xs w-[40%]">Definition</th>
                  <th className="py-3.5 px-5 font-bold uppercase tracking-wider text-xs w-[35%]">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {terms.map((row, i) => (
                  <tr key={i} className="hover:bg-surface-hover/50 transition-colors group">
                    <td className="py-4 px-5 align-top">
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-highlight/10 text-highlight font-semibold border border-highlight/20 text-sm group-hover:bg-highlight/15 transition-colors">
                        {row.term}
                      </span>
                    </td>
                    <td className="py-4 px-5 align-top text-text-secondary leading-relaxed">
                      {row.definition}
                    </td>
                    <td className="py-4 px-5 align-top text-text-secondary/80 leading-relaxed font-mono text-[13px] bg-bg/20 rounded-md m-2 block border border-border/20">
                      {row.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards - shown only on mobile */}
          <div className="sm:hidden space-y-3">
            {terms.map((row, i) => (
              <div key={i} className="bg-bg/40 rounded-xl border border-border/40 p-4 space-y-3">
                <div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-highlight/10 text-highlight font-semibold border border-highlight/20 text-sm">
                    {row.term}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-widest mb-1">Definition</p>
                  <p className="text-[13px] text-text-secondary leading-relaxed">{row.definition}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-secondary/60 uppercase tracking-widest mb-1">Example</p>
                  <div className="text-[12px] text-text-secondary/80 leading-relaxed font-mono bg-bg/50 rounded-lg p-2.5 border border-border/30">
                    {row.example}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-t border-border/50 bg-surface/50 flex-shrink-0">
          <p className="hidden sm:flex text-[13px] text-text-secondary/70 items-center gap-2 font-medium">
            <Printer className="w-4 h-4" /> Tip: Use <kbd className="px-1.5 py-0.5 bg-surface-hover rounded border border-border text-[11px] font-mono text-text">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 bg-surface-hover rounded border border-border text-[11px] font-mono text-text">P</kbd> to print this cheatsheet
          </p>
          <p className="sm:hidden text-[11px] text-text-secondary/60 font-medium">
            {terms.length} terms
          </p>
          <button onClick={onClose} className="btn-outline text-sm font-semibold px-5 sm:px-6 py-2 sm:py-2.5 hover:bg-surface-hover border-border hover:border-border-hover hover:text-text">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
