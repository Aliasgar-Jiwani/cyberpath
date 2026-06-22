import React from 'react';
import { Eye } from 'lucide-react';

export default function GenericVisual({ lessonId }) {
  return (
    <div className="visual-canvas flex-col gap-4">
      <Eye className="w-12 h-12 text-primary opacity-40" />
      <h3 className="text-lg font-semibold text-text-secondary">Visual Exploration</h3>
      <p className="text-sm text-text-secondary text-center max-w-md leading-relaxed">
        Review the concept tab for detailed content on this topic. The visual elements for this lesson are integrated into the concept explanations and Try It activities.
      </p>
      <p className="text-xs text-text-secondary">Lesson {lessonId}</p>
    </div>
  );
}
