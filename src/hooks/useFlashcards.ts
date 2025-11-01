import { useState, useEffect, useCallback } from 'react';
import { Flashcard } from '../types';
import flashcardsData from '../data/flashcards.json';
import { shuffleArray } from '../utils/shuffleArray';

interface UseFlashcardsReturn {
  flashcards: Flashcard[];
  currentIndex: number;
  isFlipped: boolean;
  isLoading: boolean;
  progressPercentage: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  goToNext: () => void;
  goToPrevious: () => void;
  handleFlip: () => void;
  refresh: () => void;
}

/**
 * Custom hook for managing flashcard state and operations
 * @returns Object containing flashcard state and handler functions
 */
export function useFlashcards(): UseFlashcardsReturn {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize and shuffle flashcards on mount
  useEffect(() => {
    const shuffled = shuffleArray(flashcardsData as Flashcard[]);
    setFlashcards(shuffled);
    setIsLoading(false);
  }, []);

  // Handle flip
  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  // Handle navigation
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev < flashcards.length - 1) {
        setIsFlipped(false);
        return prev + 1;
      }
      return prev;
    });
  }, [flashcards.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev > 0) {
        setIsFlipped(false);
        return prev - 1;
      }
      return prev;
    });
  }, []);

  // Handle refresh
  const refresh = useCallback(() => {
    const shuffled = shuffleArray(flashcardsData as Flashcard[]);
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, []);

  // Calculate progress percentage
  const progressPercentage =
    flashcards.length > 0 ? ((currentIndex + 1) / flashcards.length) * 100 : 0;

  // Navigation flags
  const canGoNext = currentIndex < flashcards.length - 1;
  const canGoPrevious = currentIndex > 0;

  return {
    flashcards,
    currentIndex,
    isFlipped,
    isLoading,
    progressPercentage,
    canGoNext,
    canGoPrevious,
    goToNext,
    goToPrevious,
    handleFlip,
    refresh,
  };
}

