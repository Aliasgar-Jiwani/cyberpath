import React from 'react';
import { Shield, Lock, KeyRound, Wifi, Bug, ChevronRight, BookOpen, Trophy, Sparkles, Play } from 'lucide-react';
import { units, getTotalLessons } from '../data/lessons';
import ProgressBar from '../components/ProgressBar';
import Footer from '../components/Footer';

const iconMap = {
  Shield, Lock, KeyRound, Wifi, Bug
};

const unitAccents = {
  1: { gradient: 'from-violet-500 to-indigo-500', glow: 'shadow-violet-500/20', text: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
  2: { gradient: 'from-blue-500 to-cyan-500', glow: 'shadow-blue-500/20', text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  3: { gradient: 'from-emerald-500 to-teal-500', glow: 'shadow-emerald-500/20', text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  4: { gradient: 'from-amber-500 to-orange-500', glow: 'shadow-amber-500/20', text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
  5: { gradient: 'from-rose-500 to-pink-500', glow: 'shadow-rose-500/20', text: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20' },
};

export default function Dashboard({ onNavigate, completedLessons }) {
  const totalLessons = getTotalLessons();
  const completedCount = completedLessons.size;
  const progressPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-bg">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-violet-500/15 blur-[120px]" style={{ animationDuration: '5s' }} />
      </div>

      {/* Header */}
      <header className="border-b border-white/5 bg-bg/60 backdrop-blur-2xl sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-violet-600 p-[1px] shadow-lg shadow-primary/20">
              <div className="w-full h-full bg-surface/90 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-6 h-6" style={{ stroke: 'url(#primary-gradient)' }} />
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                  <linearGradient id="primary-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop stopColor="#6c63ff" offset="0%" />
                    <stop stopColor="#a78bfa" offset="100%" />
                  </linearGradient>
                </svg>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                CyberPath
              </h1>
              <p className="text-xs text-text-secondary/80 font-bold tracking-widest uppercase mt-0.5">Aliasgar Jiwani</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 bg-white/[0.03] backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10 shadow-xl shadow-black/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-highlight/10 flex items-center justify-center border border-highlight/20">
                <Trophy className="w-4 h-4 text-highlight drop-shadow-md" />
              </div>
              <div className="flex flex-col min-w-[120px]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Course Progress</span>
                  <span className="text-[11px] font-bold text-white">{completedCount}/{totalLessons}</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-highlight to-amber-300 rounded-full shadow-[0_0_10px_rgba(247,201,72,0.5)]" style={{ width: `${progressPercent}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex-1 w-full flex flex-col pt-8 sm:pt-16 pb-24">
        {/* Hero */}
        <section className="text-center mb-12 sm:mb-24 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-text-secondary mb-8 shadow-sm backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="tracking-wide">Interactive Learning Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-5 sm:mb-8 tracking-tight leading-[1.1]">
            Learn. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-indigo-400">Visualize.</span> Practice.
          </h2>
          <p className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium px-2">
            Master cybersecurity concepts through interactive visualisations, real-world scenarios, and hands-on practice.
          </p>
        </section>

        {/* Trail & Nodes */}
        <section className="mb-12 sm:mb-24 relative max-w-4xl mx-auto w-full px-2 sm:px-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="absolute top-1/2 left-0 w-full h-1.5 bg-white/5 -translate-y-1/2 rounded-full hidden sm:block" />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0 relative z-10">
            {units.map((unit, i) => {
              const unitLessons = unit.lessons.map(l => l.id);
              const unitCompleted = unitLessons.filter(id => completedLessons.has(id)).length;
              const allDone = unitCompleted === unitLessons.length;
              const inProgress = unitCompleted > 0 && !allDone;
              const isActive = inProgress || (i === 0 && unitCompleted === 0) || (i > 0 && units[i-1].lessons.every(l => completedLessons.has(l.id)));

              return (
                <div key={unit.id} className="relative group flex flex-col items-center">
                  {/* Connecting Line active fill */}
                  {i > 0 && (
                    <div className="absolute right-[50%] sm:right-[100%] top-[50%] sm:top-1/2 w-[2px] sm:w-[calc(100vw/6)] max-w-[140px] h-16 sm:h-1.5 -translate-y-1/2 -z-10 hidden sm:block">
                      <div className={`h-full transition-all duration-1000 ${allDone ? 'bg-secondary' : inProgress ? 'bg-gradient-to-r from-secondary to-primary w-full shadow-[0_0_15px_rgba(108,99,255,0.4)]' : 'w-0'}`} />
                    </div>
                  )}

                  <button
                    onClick={() => onNavigate('unit', unit.id)}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black text-xl md:text-2xl transition-all duration-500 transform group-hover:scale-110 shadow-2xl relative z-10 ${
                      allDone
                        ? 'bg-gradient-to-br from-secondary to-emerald-500 text-bg shadow-secondary/40 border-2 border-transparent'
                        : isActive
                        ? 'bg-surface border-2 border-primary text-primary shadow-[0_0_30px_rgba(108,99,255,0.3)] ring-4 ring-primary/20'
                        : 'bg-surface border-2 border-white/10 text-text-secondary hover:border-white/30 hover:bg-white/5'
                    }`}
                  >
                    {unit.id}
                  </button>
                  <span className={`absolute top-full mt-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-primary drop-shadow-[0_0_8px_rgba(108,99,255,0.8)]' : 'text-text-secondary/50 group-hover:text-text-secondary'}`}>
                    Unit {unit.id}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Unit Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 stagger-children">
          {units.map((unit) => {
            const Icon = iconMap[unit.icon] || Shield;
            const unitLessons = unit.lessons.map(l => l.id);
            const unitCompleted = unitLessons.filter(id => completedLessons.has(id)).length;
            const allDone = unitCompleted === unitLessons.length;
            const inProgress = unitCompleted > 0 && !allDone;
            const accent = unitAccents[unit.id] || unitAccents[1];
            const progress = (unitCompleted / unitLessons.length) * 100;

            return (
              <div
                key={unit.id}
                onClick={() => onNavigate('unit', unit.id)}
                className={`group relative bg-white/[0.02] backdrop-blur-2xl rounded-3xl cursor-pointer border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] overflow-hidden flex flex-col h-full shadow-2xl ${accent.glow} hover:shadow-2xl`}
              >
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${accent.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />
                
                {/* Top Border Highlight */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="p-5 sm:p-8 flex-1 flex flex-col relative z-10">
                  <div className="flex items-start justify-between mb-5 sm:mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${accent.bg} border ${accent.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                      <Icon className={`w-7 h-7 ${accent.text}`} />
                    </div>
                    <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-all duration-300 group-hover:translate-x-1`}>
                      <ChevronRight className={`w-5 h-5 text-text-secondary group-hover:${accent.text} transition-colors`} />
                    </div>
                  </div>

                  <span className={`text-xs font-black ${accent.text} uppercase tracking-widest mb-3 block`}>Unit {unit.id}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">{unit.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 sm:mb-8 flex-1">{unit.description}</p>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center justify-between text-sm font-medium mb-6">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <BookOpen className="w-4 h-4" />
                        <span>{unit.lessons.length} Lessons</span>
                      </div>
                      {allDone ? (
                        <span className="text-secondary flex items-center gap-1.5 bg-secondary/10 px-3 py-1.5 rounded-lg border border-secondary/20 text-xs font-bold">
                          ✓ Completed
                        </span>
                      ) : inProgress ? (
                        <span className="text-primary flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-lg border border-primary/20 text-xs font-bold">
                          In Progress
                        </span>
                      ) : (
                        <span className="text-text-secondary flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-bold">
                          Not Started
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-5">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2.5">
                           <span className="text-xs font-bold text-text-secondary/70 uppercase tracking-wider">{Math.round(progress)}% Complete</span>
                        </div>
                        <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out ${allDone ? 'bg-secondary' : `bg-gradient-to-r ${accent.gradient}`}`} 
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                      
                      <button className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${allDone ? 'bg-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-bg shadow-secondary/20 group-hover:shadow-secondary/40' : inProgress ? 'bg-primary/20 text-primary group-hover:bg-primary group-hover:text-white shadow-primary/20 group-hover:shadow-primary/40' : 'bg-white/5 text-text-secondary group-hover:bg-white/20 group-hover:text-white'}`}>
                         {allDone ? <Trophy className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Mobile overall progress */}
        <div className="sm:hidden mt-12 w-full">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 text-center shadow-2xl">
            <div className="flex items-center justify-center gap-2 mb-5">
              <Trophy className="w-5 h-5 text-highlight" />
              <span className="text-base font-bold text-white tracking-wide">{completedCount} of {totalLessons} lessons completed</span>
            </div>
            <ProgressBar completed={completedCount} total={totalLessons} showText={false} color="highlight" height="h-3" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

