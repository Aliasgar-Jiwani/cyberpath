import React, { useState } from 'react';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { getLessonById, getUnitById } from '../data/lessons';
import TabNavigator from '../components/TabNavigator';
import ConceptPage from '../components/ConceptPage';
import QuizComponent from '../components/QuizComponent';
import LessonComplete from '../components/LessonComplete';
import Toast from '../components/Toast';
import Footer from '../components/Footer';

// Visual components
import CIATriad from '../visuals/CIATriad';
import AttackAnimation from '../visuals/AttackAnimation';
import CaesarVisual from '../visuals/CaesarVisual';
import HashVisual from '../visuals/HashVisual';
import RSAVisual from '../visuals/RSAVisual';
import SignatureVisual from '../visuals/SignatureVisual';
import KerberosVisual from '../visuals/KerberosVisual';
import X509Visual from '../visuals/X509Visual';
import PGPVisual from '../visuals/PGPVisual';
import SNMPVisual from '../visuals/SNMPVisual';
import IDSVisual from '../visuals/IDSVisual';
import PasswordVisual from '../visuals/PasswordVisual';
import MalwareVisual from '../visuals/MalwareVisual';
import DDoSVisual from '../visuals/DDoSVisual';
import FirewallVisual from '../visuals/FirewallVisual';
import GenericVisual from '../visuals/GenericVisual';

// Widget components
import CIAClassifier from '../widgets/CIAClassifier';
import AttackIdentifier from '../widgets/AttackIdentifier';
import CaesarCipher from '../widgets/CaesarCipher';
import HashGenerator from '../widgets/HashGenerator';
import RSAWalkthrough from '../widgets/RSAWalkthrough';
import SignatureVerifier from '../widgets/SignatureVerifier';
import KerberosFlow from '../widgets/KerberosFlow';
import CertificateValidator from '../widgets/CertificateValidator';
import PGPSequencer from '../widgets/PGPSequencer';
import SNMPSelector from '../widgets/SNMPSelector';
import IDSClassifier from '../widgets/IDSClassifier';
import PasswordChecker from '../widgets/PasswordChecker';
import MalwareMatcher from '../widgets/MalwareMatcher';
import DetectionMatcher from '../widgets/DetectionMatcher';
import FirewallRuleBuilder from '../widgets/FirewallRuleBuilder';
import GenericWidget from '../widgets/GenericWidget';

const visualMap = {
  '1.1': CIATriad, '1.2': AttackAnimation, '1.3': CaesarVisual,
  '2.1': HashVisual, '2.2': RSAVisual, '2.3': SignatureVisual,
  '2.4': GenericVisual, '2.5': GenericVisual,
  '3.1': KerberosVisual, '3.2': X509Visual, '3.3': PGPVisual,
  '3.4': GenericVisual, '3.5': GenericVisual,
  '4.1': SNMPVisual, '4.2': IDSVisual, '4.3': PasswordVisual,
  '4.4': GenericVisual, '4.5': GenericVisual,
  '5.1': MalwareVisual, '5.2': DDoSVisual, '5.3': FirewallVisual,
  '5.4': GenericVisual,
};

const widgetMap = {
  '1.1': CIAClassifier, '1.2': AttackIdentifier, '1.3': CaesarCipher,
  '2.1': HashGenerator, '2.2': RSAWalkthrough, '2.3': SignatureVerifier,
  '2.4': GenericWidget, '2.5': GenericWidget,
  '3.1': KerberosFlow, '3.2': CertificateValidator, '3.3': PGPSequencer,
  '3.4': GenericWidget, '3.5': GenericWidget,
  '4.1': SNMPSelector, '4.2': IDSClassifier, '4.3': PasswordChecker,
  '4.4': GenericWidget, '4.5': GenericWidget,
  '5.1': MalwareMatcher, '5.2': DetectionMatcher, '5.3': FirewallRuleBuilder,
  '5.4': GenericWidget,
};

export default function LessonPage({ lessonId, unitId, onNavigate, onComplete, visitedTabs, onVisitTab }) {
  const [activeTab, setActiveTab] = useState('concept');
  const [showToast, setShowToast] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const lesson = getLessonById(lessonId);
  const unit = getUnitById(unitId);
  if (!lesson || !unit) return null;

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    onVisitTab(lessonId, tabId);
  };

  const handleQuizComplete = (score) => {
    onComplete(lessonId);
    setShowComplete(true);
  };

  const handleReportError = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  if (showComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LessonComplete onBack={() => onNavigate('unit', unitId)} />
      </div>
    );
  }

  const VisualComponent = visualMap[lessonId] || GenericVisual;
  const WidgetComponent = widgetMap[lessonId] || GenericWidget;

  const currentVisited = visitedTabs[lessonId] || new Set();

  return (
    <div className="min-h-screen pb-20 md:pb-0 flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('unit', unitId)}
            className="flex items-center gap-1 text-text-secondary hover:text-primary transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Unit {unitId}
          </button>
          <button
            onClick={handleReportError}
            className="text-xs text-text-secondary hover:text-highlight transition-colors flex items-center gap-1"
          >
            <AlertTriangle className="w-3 h-3" /> Report Error
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Lesson Title */}
        <div className="mb-6 animate-fade-in">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            Lesson {lessonId}
          </span>
          <h2 className="text-xl md:text-2xl font-extrabold mt-1">{lesson.title}</h2>
        </div>

        {/* Tabs */}
        <TabNavigator
          activeTab={activeTab}
          onTabChange={handleTabChange}
          visitedTabs={currentVisited}
        />

        {/* Tab Content */}
        <div className="mt-2">
          {activeTab === 'concept' && (
            <ConceptPage lesson={lesson} onNextTab={handleTabChange} />
          )}

          {activeTab === 'visual' && (
            <div className="animate-fade-in">
              <VisualComponent lessonId={lessonId} />
              <div className="mt-6 flex justify-end">
                <button onClick={() => handleTabChange('tryit')} className="btn-primary">
                  Next: Try It →
                </button>
              </div>
            </div>
          )}

          {activeTab === 'tryit' && (
            <div className="animate-fade-in">
              <WidgetComponent lessonId={lessonId} />
              <div className="mt-6 flex justify-end">
                <button onClick={() => handleTabChange('quiz')} className="btn-primary">
                  Next: Quiz →
                </button>
              </div>
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="animate-fade-in">
              <QuizComponent
                questions={lesson.quiz}
                onComplete={handleQuizComplete}
              />
            </div>
          )}
        </div>
      </div>

      {showToast && (
        <Toast message="Thank you! Your professor has been notified." type="success" />
      )}

      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
}
