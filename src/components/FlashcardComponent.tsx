import React from 'react';
import { Flashcard } from '../types';

interface FlashcardComponentProps {
  flashcard: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}

const FlashcardComponent: React.FC<FlashcardComponentProps> = ({
  flashcard,
  isFlipped,
  onFlip,
}) => {
  return (
    <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
      {/* Container for 3D flip */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '380px',
          perspective: '1000px',
          cursor: 'pointer',
        }}
        onClick={onFlip}
      >
        {/* Flip card container */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 0.7s ease-in-out',
          }}
        >
          {/* FRONT SIDE (QUESTION) - Black background with white text */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'black',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Question Content */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px',
              }}
            >
              <h2
                style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  marginBottom: '12px',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                {flashcard.front.title}
              </h2>
              <p
                style={{
                  fontSize: '18px',
                  textAlign: 'center',
                  color: '#e5e7eb',
                }}
              >
                {flashcard.front.body}
              </p>
            </div>

            {/* Footer with Show Answer button */}
            <div
              style={{
                padding: '16px 24px 24px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(0,0,0,0.3)',
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onFlip();
                }}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'white',
                  color: 'black',
                  fontWeight: 700,
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                }}
              >
                Show Answer
              </button>
            </div>
          </div>

          {/* BACK SIDE (ANSWER) - White background with black text */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Answer Content */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                padding: '24px',
                overflowY: 'auto',
              }}
            >
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.5,
                  textAlign: 'center',
                  color: 'black',
                }}
              >
                {flashcard.back.answer}
              </p>
              {flashcard.back.media && (
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  {flashcard.back.media.type === 'image' ? (
                    <img
                      src={flashcard.back.media.url}
                      alt="Flashcard visual"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '220px',
                        objectFit: 'contain',
                        borderRadius: '12px',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                      }}
                    />
                  ) : (
                    <video
                      src={flashcard.back.media.url}
                      controls
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '220px',
                        borderRadius: '12px',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.12)',
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
            </div>

            {/* Footer with Show Question button */}
            <div
              style={{
                padding: '16px 24px 24px',
                borderTop: '1px solid #e5e7eb',
                background: '#f9fafb',
              }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onFlip();
                }}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  background: 'white',
                  color: 'black',
                  fontWeight: 700,
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                }}
              >
                Show Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardComponent;
