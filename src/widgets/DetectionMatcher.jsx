import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';

export default function DetectionMatcher() {
  return (
    <div className="widget-container">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-base">Detection Methods Review</h3>
          <p className="text-sm text-text-secondary">Please refer to the IDS concept page for details.</p>
        </div>
      </div>
      <p className="text-sm text-text-secondary">
        (This is a placeholder widget. For interactive exercises on detection, see the IDS module in Unit 4.)
      </p>
    </div>
  );
}
