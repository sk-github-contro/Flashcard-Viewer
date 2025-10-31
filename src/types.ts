export interface Media {
  url: string;
  type: 'image' | 'video';
}

export interface Flashcard {
  id: string;
  front: {
    title: string;
    body: string;
  };
  back: {
    answer: string;
    media: Media | null;
  };
}

