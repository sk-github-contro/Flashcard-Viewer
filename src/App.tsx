import { useState, useEffect, useCallback } from 'react';
import FlashcardComponent from './components/FlashcardComponent';
import { Flashcard } from './types';
import flashcardsData from '../flashcards.json';

function App() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to shuffle array
  const shuffleArray = useCallback((array: Flashcard[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Initialize and shuffle flashcards on mount
  useEffect(() => {
    const shuffled = shuffleArray(flashcardsData as Flashcard[]);
    setFlashcards(shuffled);
  }, [shuffleArray]);

  // Handle flip
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Handle navigation
  const goToNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  // Handle refresh
  const handleRefresh = () => {
    const shuffled = shuffleArray(flashcardsData as Flashcard[]);
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  // Calculate progress percentage
  const progressPercentage = flashcards.length > 0
    ? ((currentIndex + 1) / flashcards.length) * 100
    : 0;

  if (flashcards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading flashcards...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Main content area constrained to leave room for fixed progress bar */}
      <div
        className="flex-1 w-full"
        style={{ height: 'calc(100vh - 112px)' }}
      >
        <div className="h-full max-w-2xl mx-auto px-4 py-4 flex flex-col justify-between items-center">
        {/* Refresh button at top right */}
        <div className="w-full mb-2 flex justify-end">
          <button
            onClick={handleRefresh}
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200 hover:bg-gray-50"
            aria-label="Refresh and shuffle flashcards"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </div>

        {/* Flashcard */}
        <FlashcardComponent
          flashcard={flashcards[currentIndex]}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />

        {/* Navigation buttons */}
        <div className="flex items-center justify-center gap-8 mt-4">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`p-4 rounded-full shadow-lg transition-all duration-200 ${
              currentIndex === 0
                ? 'bg-gray-300 cursor-not-allowed opacity-50'
                : 'bg-white hover:bg-gray-50 hover:shadow-xl'
            }`}
            aria-label="Previous flashcard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex === flashcards.length - 1}
            className={`p-4 rounded-full shadow-lg transition-all duration-200 ${
              currentIndex === flashcards.length - 1
                ? 'bg-gray-300 cursor-not-allowed opacity-50'
                : 'bg-white hover:bg-gray-50 hover:shadow-xl'
            }`}
            aria-label="Next flashcard"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        </div>
      </div>

      {/* Progress bar fixed at bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          {/* Progress text */}
          <div className="text-center mb-3 text-gray-700 font-semibold text-lg">
            {currentIndex + 1} / {flashcards.length}
          </div>
          {/* Progress bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

