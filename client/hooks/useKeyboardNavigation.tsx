import { useEffect, useCallback } from 'react';

interface UseKeyboardNavigationProps {
  sections: string[];
  onNavigate: (section: string) => void;
}

export const useKeyboardNavigation = ({ sections, onNavigate }: UseKeyboardNavigationProps) => {
  const getCurrentSectionIndex = useCallback(() => {
    // Find the currently visible section
    for (let i = 0; i < sections.length; i++) {
      const element = document.getElementById(sections[i]);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          return i;
        }
      }
    }
    return 0;
  }, [sections]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Skip if user is typing in an input
    if (event.target instanceof HTMLInputElement || 
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement) {
      return;
    }

    const currentIndex = getCurrentSectionIndex();

    switch (event.key) {
      case 'ArrowDown':
      case 'j':
        event.preventDefault();
        if (currentIndex < sections.length - 1) {
          onNavigate(sections[currentIndex + 1]);
        }
        break;
      
      case 'ArrowUp':
      case 'k':
        event.preventDefault();
        if (currentIndex > 0) {
          onNavigate(sections[currentIndex - 1]);
        }
        break;
      
      case 'Home':
        event.preventDefault();
        onNavigate(sections[0]);
        break;
      
      case 'End':
        event.preventDefault();
        onNavigate(sections[sections.length - 1]);
        break;
      
      // Quick navigation shortcuts
      case '1':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          onNavigate('about');
        }
        break;
      case '2':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          onNavigate('education');
        }
        break;
      case '3':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          onNavigate('experience');
        }
        break;
      case '4':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          onNavigate('projects');
        }
        break;
      case '5':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          onNavigate('skills');
        }
        break;
      case '6':
        if (event.ctrlKey || event.metaKey) {
          event.preventDefault();
          onNavigate('contact');
        }
        break;
    }
  }, [sections, onNavigate, getCurrentSectionIndex]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Announce keyboard shortcuts to screen readers
  useEffect(() => {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-label', 'Navigation au clavier disponible');
    announcement.className = 'sr-only';
    announcement.textContent = 'Navigation disponible : flèches directionnelles, Ctrl+1-6 pour les sections, j/k pour naviguer';
    document.body.appendChild(announcement);

    return () => {
      if (document.body.contains(announcement)) {
        document.body.removeChild(announcement);
      }
    };
  }, []);
};

export default useKeyboardNavigation;
