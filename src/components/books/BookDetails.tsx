import React from 'react';
import { Card, CardContent, CardMedia, Typography, Paper, Rating } from '@mui/material';
import { useBookContext } from '../../context/BookContext';

const BookDetails: React.FC = () => {
  const { selectedBook } = useBookContext();
  console.log('selectedBook', selectedBook);

  if (!selectedBook) {
    return (
      <Paper elevation={3} sx={{ p: 2, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6">Select a book to view details</Typography>
      </Paper>
    );
  }

  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={selectedBook.thumbnail}
        alt={`Cover of ${selectedBook.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {selectedBook.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          by {selectedBook.author}
        </Typography>
        <Rating name="read-only" value={selectedBook.rating} readOnly />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {selectedBook.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookDetails;