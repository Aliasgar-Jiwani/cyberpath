import React, { useState, useEffect } from 'react';
import Dashboard from './views/Dashboard';
import UnitPage from './views/UnitPage';
import LessonPage from './views/LessonPage';
import './App.css'; // Just in case, but index.css handles tailwind

export default function App() {
  // State for navigation
  const [currentView, setCurrentView] = useState('dashboard'); // dashboard, unit, lesson
  const [currentUnit, setCurrentUnit] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);

  // State for progress
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [visitedTabs, setVisitedTabs] = useState({}); // { lessonId: Set(['concept', 'visual']) }

  // Load progress from localStorage on mount + set up browser history
  useEffect(() => {
    try {
      const savedCompleted = localStorage.getItem('cyberpath_completed_lessons');
      if (savedCompleted) {
        setCompletedLessons(new Set(JSON.parse(savedCompleted)));
      }

      const savedTabs = localStorage.getItem('cyberpath_visited_tabs');
      if (savedTabs) {
        const parsed = JSON.parse(savedTabs);
        const restored = {};
        for (const [key, value] of Object.entries(parsed)) {
          restored[key] = new Set(value);
        }
        setVisitedTabs(restored);
      }
    } catch (e) {
      console.error('Error loading progress from localStorage:', e);
    }

    // Replace the initial history entry with the dashboard state so
    // the very first back press doesn't leave the site with no state.
    window.history.replaceState(
      { view: 'dashboard', unitId: null, lessonId: null },
      ''
    );
  }, []);

  // Listen for browser back / forward button (popstate)
  useEffect(() => {
    const handlePopState = (event) => {
      const state = event.state;
      if (state) {
        window.scrollTo(0, 0);
        setCurrentView(state.view);
        setCurrentUnit(state.unitId);
        setCurrentLesson(state.lessonId);
      } else {
        // No state means we're at the very beginning — show dashboard
        window.scrollTo(0, 0);
        setCurrentView('dashboard');
        setCurrentUnit(null);
        setCurrentLesson(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Save completed lessons to localStorage when it changes
  const saveCompletedLessons = (newCompleted) => {
    setCompletedLessons(newCompleted);
    try {
      localStorage.setItem('cyberpath_completed_lessons', JSON.stringify(Array.from(newCompleted)));
    } catch (e) {
      console.error('Error saving progress to localStorage:', e);
    }
  };

  // Save visited tabs to localStorage when it changes
  const saveVisitedTabs = (newTabs) => {
    setVisitedTabs(newTabs);
    try {
      const serializable = {};
      for (const [key, value] of Object.entries(newTabs)) {
        serializable[key] = Array.from(value);
      }
      localStorage.setItem('cyberpath_visited_tabs', JSON.stringify(serializable));
    } catch (e) {
      console.error('Error saving tabs to localStorage:', e);
    }
  };

  // Handlers — push a history entry for every in-app navigation
  const handleNavigate = (view, unitId = null, lessonId = null) => {
    window.scrollTo(0, 0);
    setCurrentView(view);
    if (unitId) setCurrentUnit(unitId);
    if (lessonId) setCurrentLesson(lessonId);

    // Push new entry so the browser back button can return here
    window.history.pushState(
      { view, unitId, lessonId },
      ''
    );
  };

  const handleLessonComplete = (lessonId) => {
    const newCompleted = new Set(completedLessons);
    newCompleted.add(lessonId);
    saveCompletedLessons(newCompleted);
  };

  const handleVisitTab = (lessonId, tabId) => {
    const newTabs = { ...visitedTabs };
    if (!newTabs[lessonId]) {
      newTabs[lessonId] = new Set();
    }
    const updatedSet = new Set(newTabs[lessonId]);
    updatedSet.add(tabId);
    newTabs[lessonId] = updatedSet;
    saveVisitedTabs(newTabs);
  };

  return (
    <div className="app-container min-h-screen text-text selection:bg-primary/30 selection:text-white">
      {currentView === 'dashboard' && (
        <Dashboard
          onNavigate={handleNavigate}
          completedLessons={completedLessons}
        />
      )}

      {currentView === 'unit' && currentUnit && (
        <UnitPage
          unitId={currentUnit}
          onNavigate={handleNavigate}
          completedLessons={completedLessons}
        />
      )}

      {currentView === 'lesson' && currentLesson && currentUnit && (
        <LessonPage
          lessonId={currentLesson}
          unitId={currentUnit}
          onNavigate={handleNavigate}
          onComplete={handleLessonComplete}
          visitedTabs={visitedTabs}
          onVisitTab={handleVisitTab}
        />
      )}
    </div>
  );
}
