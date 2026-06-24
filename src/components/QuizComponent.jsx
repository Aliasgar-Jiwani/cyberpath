import React, { useState } from 'react';
import { CheckCircle, XCircle, Award, RotateCcw } from 'lucide-react';

export default function QuizComponent({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (optionIndex) => {
    if (showFeedback) return;
    setSelectedAnswer(optionIndex);
    setShowFeedback(true);
    const isCorrect = optionIndex === currentQuestion.correct;
    if (isCorrect) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(i => i + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const allCorrect = score === questions.length;
    const mostCorrect = score >= 2;

    return (
      <div className="animate-scale-in text-center py-12 px-6 bg-surface/50 backdrop-blur-sm rounded-3xl border border-border/60 max-w-2xl mx-auto shadow-xl">
        <div className={`mx-auto inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-2xl transition-transform hover:scale-105 duration-300 ${allCorrect ? 'bg-secondary/20 shadow-secondary/20 border border-secondary/30' : 'bg-highlight/20 shadow-highlight/20 border border-highlight/30'}`}>
          <Award className={`w-12 h-12 ${allCorrect ? 'text-secondary' : 'text-highlight'}`} />
        </div>

        <h3 className="text-3xl font-extrabold mb-3 tracking-tight text-text">
          {allCorrect ? '🎉 Perfect Score!' : mostCorrect ? '👏 Good Effort!' : '📚 Keep Learning!'}
        </h3>

        <div className={`inline-block px-8 py-4 rounded-2xl text-2xl font-black mb-6 shadow-inner ${allCorrect ? 'bg-secondary/15 text-secondary border border-secondary/30' : 'bg-highlight/15 text-highlight border border-highlight/30'}`}>
          {score} / {questions.length}
        </div>

        {!allCorrect && (
          <p className="text-text-secondary/80 mb-8 max-w-md mx-auto leading-relaxed">
            Review the <span className="font-semibold text-text">Concept</span> tab to strengthen your understanding, then try again!
          </p>
        )}

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button onClick={handleReset} className="btn-outline flex items-center gap-2.5 px-6 py-3 font-semibold group hover:bg-surface-hover hover:text-text hover:border-border-hover">
            <RotateCcw className="w-4.5 h-4.5 group-hover:-rotate-180 transition-transform duration-500" /> Try Again
          </button>
          <button onClick={() => onComplete(score)} className="btn-primary flex items-center gap-2.5 px-6 py-3 font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
            <CheckCircle className="w-4.5 h-4.5" /> Complete Lesson
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      {/* Progress dots */}
      <div className="flex items-center gap-3 mb-8 bg-surface p-3 rounded-2xl border border-border/50">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-all duration-500 relative overflow-hidden ${
              i < currentIndex ? 'bg-secondary/80' :
              i === currentIndex ? 'bg-primary/80 shadow-[0_0_10px_rgba(108,99,255,0.4)]' : 'bg-border/50'
            }`}
          >
             {i === currentIndex && (
                <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
             )}
          </div>
        ))}
      </div>

      <div className="bg-surface/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-border/60 shadow-lg mb-6 relative overflow-hidden">
         {/* Decorative subtle background element */}
         <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
         
        <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
           Question {currentIndex + 1} of {questions.length}
        </p>

        <h3 className="text-xl md:text-2xl font-bold mb-8 leading-snug text-text">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3.5 relative z-10">
          {currentQuestion.options.map((option, i) => {
            let borderClass = 'border-border/60 hover:border-border-hover';
            let bgClass = 'bg-surface hover:bg-surface-hover';
            let textClass = 'text-text';
            let iconClass = 'text-text-secondary/50';

            if (showFeedback) {
              if (i === currentQuestion.correct) {
                borderClass = 'border-secondary/50';
                bgClass = 'bg-secondary/10';
                textClass = 'text-secondary font-medium';
                iconClass = 'text-secondary';
              } else if (i === selectedAnswer && i !== currentQuestion.correct) {
                borderClass = 'border-danger/50';
                bgClass = 'bg-danger/10';
                textClass = 'text-danger';
                iconClass = 'text-danger';
              } else {
                 // Dim unselected wrong answers
                 bgClass = 'bg-surface/40 opacity-60';
              }
            } else if (selectedAnswer === i) {
              borderClass = 'border-primary/50';
              bgClass = 'bg-primary/10';
              iconClass = 'text-primary';
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={showFeedback}
                className={`w-full text-left px-3 sm:px-5 py-3 sm:py-4 rounded-xl border-2 transition-all duration-300 ${borderClass} ${bgClass} ${
                  showFeedback ? 'cursor-default' : 'cursor-pointer hover:-translate-y-0.5 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-lg border-2 ${showFeedback ? borderClass : 'border-current'} flex items-center justify-center text-sm font-bold font-mono transition-colors ${iconClass}`}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className={`text-[15px] leading-relaxed flex-1 ${textClass}`}>{option}</span>
                  {showFeedback && i === currentQuestion.correct && (
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 animate-scale-in">
                       <CheckCircle className="w-5 h-5 text-secondary" />
                    </div>
                  )}
                  {showFeedback && i === selectedAnswer && i !== currentQuestion.correct && (
                     <div className="w-8 h-8 rounded-full bg-danger/20 flex items-center justify-center flex-shrink-0 animate-scale-in">
                        <XCircle className="w-5 h-5 text-danger" />
                     </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {showFeedback && (
        <div className={`p-5 rounded-2xl border-2 animate-fade-in shadow-lg ${
          selectedAnswer === currentQuestion.correct
            ? 'bg-gradient-to-br from-secondary/10 to-surface border-secondary/30 shadow-secondary/5'
            : 'bg-gradient-to-br from-danger/10 to-surface border-danger/30 shadow-danger/5'
        }`}>
          <div className="flex items-start gap-3">
             <div className="mt-0.5">
                {selectedAnswer === currentQuestion.correct 
                  ? <CheckCircle className="w-5 h-5 text-secondary" />
                  : <XCircle className="w-5 h-5 text-danger" />
                }
             </div>
             <p className="text-[15px] leading-relaxed text-text/90">
               <strong className={selectedAnswer === currentQuestion.correct ? 'text-secondary' : 'text-danger'}>
                  {selectedAnswer === currentQuestion.correct ? 'Correct! ' : 'Incorrect. '}
               </strong>
               {currentQuestion.explanation}
             </p>
          </div>
        </div>
      )}

      {showFeedback && (
        <div className="mt-8 flex justify-end animate-fade-in-up">
          <button onClick={handleNext} className="btn-primary flex items-center gap-2 px-6 py-3 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all">
            {currentIndex + 1 < questions.length ? 'Next Question' : 'See Results'} <span className="text-lg leading-none">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
