import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, BookOpen, ChevronRight, Shield, Lock, KeyRound, Wifi, Bug, FileText, Target } from 'lucide-react';
import { getUnitById } from '../data/lessons';
import { cheatsheets } from '../data/cheatsheets';
import ProgressBar from '../components/ProgressBar';
import CheatsheetModal from '../components/CheatsheetModal';
import Footer from '../components/Footer';

const iconMap = { Shield, Lock, KeyRound, Wifi, Bug };

const unitAccents = {
  1: { iconBg: 'bg-violet-500/15', iconText: 'text-violet-400', label: 'text-violet-400', pillBorder: 'border-violet-500/20' },
  2: { iconBg: 'bg-blue-500/15', iconText: 'text-blue-400', label: 'text-blue-400', pillBorder: 'border-blue-500/20' },
  3: { iconBg: 'bg-emerald-500/15', iconText: 'text-emerald-400', label: 'text-emerald-400', pillBorder: 'border-emerald-500/20' },
  4: { iconBg: 'bg-amber-500/15', iconText: 'text-amber-400', label: 'text-amber-400', pillBorder: 'border-amber-500/20' },
  5: { iconBg: 'bg-rose-500/15', iconText: 'text-rose-400', label: 'text-rose-400', pillBorder: 'border-rose-500/20' },
};

export default function UnitPage({ unitId, onNavigate, completedLessons }) {
  const [showCheatsheet, setShowCheatsheet] = useState(false);
  const unit = getUnitById(unitId);
  if (!unit) return null;

  const Icon = iconMap[unit.icon] || Shield;
  const unitLessons = unit.lessons.map(l => l.id);
  const unitCompleted = unitLessons.filter(id => completedLessons.has(id)).length;
  const cheatsheet = cheatsheets[unitId];
  const accent = unitAccents[unitId] || unitAccents[1];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border/60 backdrop-blur-md bg-bg/80 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>Dashboard</span>
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-10 w-full flex-1">
        {/* Unit Header */}
        <div className="animate-fade-in mb-10">
          <div className="flex items-start gap-5 mb-6">
            <div className={`w-16 h-16 rounded-2xl ${accent.iconBg} flex items-center justify-center flex-shrink-0 border ${accent.pillBorder}`}>
              <Icon className={`w-8 h-8 ${accent.iconText}`} />
            </div>
            <div>
              <span className={`text-xs font-bold ${accent.label} uppercase tracking-widest`}>Unit {unit.id}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1 leading-tight">{unit.title}</h2>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed text-[15px] mb-6 max-w-2xl">{unit.description}</p>

          {/* Outcome pills */}
          <div className="flex flex-wrap gap-2.5 mb-7">
            {unit.outcomes.map((outcome, i) => (
              <span key={i} className={`inline-flex items-center gap-2 text-xs bg-surface border ${accent.pillBorder} rounded-lg px-3.5 py-2 text-text-secondary/90 font-medium`}>
                <CheckCircle className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                {outcome}
              </span>
            ))}
          </div>

          {/* Progress */}
          <div className="bg-surface rounded-xl p-4 border border-border/50">
            <ProgressBar completed={unitCompleted} total={unitLessons.length} color={unitCompleted === unitLessons.length ? 'secondary' : 'primary'} />
          </div>
        </div>

        {/* Lesson List */}
        <div className="space-y-3 stagger-children">
          {unit.lessons.map((lesson, i) => {
            const isCompleted = completedLessons.has(lesson.id);

            return (
              <button
                key={lesson.id}
                onClick={() => onNavigate('lesson', unitId, lesson.id)}
                className="w-full text-left bg-surface rounded-xl p-5 flex items-center gap-5 group border border-border/50 transition-all duration-300 hover:border-border-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Lesson number */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold transition-all duration-300 ${
                  isCompleted
                    ? 'bg-secondary/15 text-secondary border border-secondary/20'
                    : `${accent.iconBg} ${accent.iconText} border ${accent.pillBorder}`
                }`}>
                  {isCompleted ? <CheckCircle className="w-5 h-5" /> : lesson.id}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-[15px] font-semibold text-text group-hover:text-primary transition-colors truncate leading-snug">
                    {lesson.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[10px] font-semibold bg-primary/10 text-primary px-2.5 py-0.5 rounded-md border border-primary/15">Concept</span>
                    <span className="text-[10px] font-semibold bg-highlight/10 text-highlight px-2.5 py-0.5 rounded-md border border-highlight/15">Visual</span>
                    <span className="text-[10px] font-semibold bg-secondary/10 text-secondary px-2.5 py-0.5 rounded-md border border-secondary/15">Try It</span>
                    <span className="text-[10px] font-semibold bg-danger/10 text-danger px-2.5 py-0.5 rounded-md border border-danger/15">Quiz</span>
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-text-secondary/40 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </button>
            );
          })}
        </div>

        {/* Cheatsheet Button */}
        {cheatsheet && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setShowCheatsheet(true)}
              className="btn-outline inline-flex items-center gap-2.5 px-6 py-3 text-sm"
            >
              <FileText className="w-4 h-4" />
              View Unit Cheatsheet
            </button>
          </div>
        )}
      </div>

      {/* Cheatsheet Modal */}
      {showCheatsheet && cheatsheet && (
        <CheatsheetModal
          unitTitle={`Unit ${unitId}: ${unit.title}`}
          terms={cheatsheet.terms}
          onClose={() => setShowCheatsheet(false)}
        />
      )}

      <Footer />
    </div>
  );
}
