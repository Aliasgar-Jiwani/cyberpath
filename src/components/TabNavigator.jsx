import React from 'react';
import { BookOpen, Palette, Zap, CheckSquare } from 'lucide-react';

const tabs = [
  { id: 'concept', label: 'Concept', icon: BookOpen, emoji: '📖' },
  { id: 'visual', label: 'Visual', icon: Palette, emoji: '🎨' },
  { id: 'tryit', label: 'Try It', icon: Zap, emoji: '⚡' },
  { id: 'quiz', label: 'Quiz', icon: CheckSquare, emoji: '✅' },
];

export default function TabNavigator({ activeTab, onTabChange, visitedTabs }) {
  return (
    <>
      {/* Desktop tabs */}
      <div className="lesson-tabs-desktop flex items-center gap-2 bg-surface/50 backdrop-blur-sm rounded-2xl p-2 border border-border/60 mb-8 shadow-inner">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isVisited = visitedTabs.has(tab.id);
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${
                isActive
                  ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-[1.02]'
                  : isVisited
                  ? 'text-secondary bg-surface hover:bg-secondary/10 border border-transparent hover:border-secondary/20'
                  : 'text-text-secondary bg-surface border border-transparent hover:border-border-hover hover:bg-surface-hover hover:text-text'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
              )}
              <Icon className={`w-4.5 h-4.5 ${isActive ? 'text-white' : isVisited ? 'text-secondary/80' : 'text-text-secondary/70 group-hover:text-primary/70'} transition-colors`} />
              <span>{tab.label}</span>
              {isVisited && !isActive && (
                <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,212,170,0.8)]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Mobile bottom tabs */}
      <div className="lesson-tabs-mobile fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-md border-t border-border/60 z-50 px-2 py-2 items-center justify-around shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isVisited = visitedTabs.has(tab.id);

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-[11px] font-bold transition-all duration-300 relative ${
                isActive
                  ? 'text-primary bg-primary/10'
                  : isVisited
                  ? 'text-secondary hover:bg-secondary/5'
                  : 'text-text-secondary hover:bg-surface-hover hover:text-text'
              }`}
            >
              <span className={`text-xl transition-transform duration-300 ${isActive ? 'scale-110 mb-0.5' : 'grayscale-[50%] opacity-80'}`}>{tab.emoji}</span>
              <span className="tracking-wide uppercase">{tab.label}</span>
              {isVisited && !isActive && (
                <span className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_5px_rgba(0,212,170,0.5)]" />
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}
