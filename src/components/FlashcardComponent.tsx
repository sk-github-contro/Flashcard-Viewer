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
      {/* Fixed-height card area */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '380px',
        }}
      >
        {
          !isFlipped ? (
            // FRONT (QUESTION)
            <div
              style={{
                position: 'absolute',
                inset: 0 as unknown as number, // TS-friendly for inline style
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                onClick={onFlip}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '32px',
                  cursor: 'pointer',
                }}
              >
                <h2
                  style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    marginBottom: '12px',
                    textAlign: 'center',
                    color: '#111827',
                  }}
                >
                  {flashcard.front.title}
                </h2>
                <p
                  style={{
                    fontSize: '18px',
                    textAlign: 'center',
                    color: '#374151',
                  }}
                >
                  {flashcard.front.body}
                </p>
              </div>

              {/* Footer with Show Answer button */}
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
                    background: '#111827',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '16px',
                    cursor: 'pointer',
                  }}
                >
                  Show Answer
                </button>
              </div>
            </div>
          ) : (
            // BACK (ANSWER)
            <div
              style={{
                position: 'absolute',
                inset: 0 as unknown as number,
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                onClick={onFlip}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  padding: '24px',
                  cursor: 'pointer',
                }}
              >
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.5,
                    textAlign: 'center',
                    color: '#111827',
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
                        style={{
                          maxWidth: '100%',
                          maxHeight: '220px',
                          objectFit: 'contain',
                          borderRadius: '12px',
                          boxShadow: '0 6px 16px rgba(0,0,0,0.12)'
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
                          boxShadow: '0 6px 16px rgba(0,0,0,0.12)'
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
                    color: '#111827',
                    fontWeight: 700,
                    fontSize: '16px',
                    cursor: 'pointer',
                  }}
                >
                  Show Question
                </button>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default FlashcardComponent;
