import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  thumbnail?: string;
  rating: number;
}

interface BookContextType {
  selectedBook: Book | null;
  setSelectedBook: (book: Book | null) => void;
}

interface BookProviderProps {
    children: ReactNode;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: BookProviderProps) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  return (
    <BookContext.Provider value={{ selectedBook, setSelectedBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error('useBookContext must be used within a BookProvider');
  }
  return context;
};