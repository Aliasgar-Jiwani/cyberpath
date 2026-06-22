import React from 'react';

export default function ProgressBar({ completed, total, color = 'primary', showText = true, height = 'h-2' }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const colorMap = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    danger: 'bg-danger',
    highlight: 'bg-highlight',
  };

  const glowMap = {
    primary: 'shadow-primary/30',
    secondary: 'shadow-secondary/30',
    danger: 'shadow-danger/30',
    highlight: 'shadow-highlight/30',
  };

  const bgColor = colorMap[color] || colorMap.primary;
  const glowColor = glowMap[color] || glowMap.primary;

  return (
    <div className="w-full">
      <div className={`w-full ${height} bg-border/40 rounded-full overflow-hidden`}>
        <div
          className={`${height} ${bgColor} rounded-full transition-all duration-700 ease-out ${percentage > 0 ? `shadow-sm ${glowColor}` : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showText && (
        <p className="text-xs text-text-secondary mt-2 font-medium">
          {completed} / {total} completed ({percentage}%)
        </p>
      )}
    </div>
  );
}
