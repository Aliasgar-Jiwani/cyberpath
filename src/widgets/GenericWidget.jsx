import React from 'react';
import { Zap } from 'lucide-react';

export default function GenericWidget({ lessonId }) {
  return (
    <div className="widget-container text-center py-10">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-dim mb-4">
        <Zap className="w-8 h-8 text-primary" />
      </div>
      <h3 className="font-bold text-lg mb-2">Interactive Exercise</h3>
      <p className="text-sm text-text-secondary max-w-md mx-auto mb-6">
        Test your knowledge of the concepts learned in this lesson. Answer the quiz questions on the next tab to complete the lesson!
      </p>
      <p className="text-xs text-text-secondary">Lesson {lessonId}</p>
    </div>
  );
}
