export interface Book {
  title: string;
  coverUrl?: string;
  description: string;
  author: string;
  publisher: string;
  ISBN: string;
  releaseYear: number;
  totalPages?: number;
  rating: number;
  notes?: string[];
  reviews?: Review[];
}

export interface Review {
  fullName: string;
  review: string;
}
