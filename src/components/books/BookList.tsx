import React, { useEffect, useState } from "react";
import {
  Typography,
  Paper,
  Rating,
  Divider,
  Box,
  Grid,
  Button
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { apiRequest } from "../../apis/api";
import AuthContext from "../../context/AuthContext";
import { useAppSelector } from "../../hooks/useAppSelector";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  thumbnail?: string;
  overallRating: number;
}

// Example functions using makeApiRequest

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

const BookList = () => {
  const navigate = useNavigate();
  const authToken =  localStorage.getItem('token')
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const fetchedBooks = await apiRequest('get', '/api/books/getBooks', {}, authToken);
      setBooks(fetchedBooks);
      setError(null);
    } catch (err) {
      setError('Failed to fetch books. Please try again later.');
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading books...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClick = (param: number) => {
    navigate(`/book-details?id=${param}`);
  };

  return (
    <Grid sx={{display: "flex", justifyContent: "center", marginTop: 15 }} container spacing={2}>
      {books.map((book) => (
        <Button
          key={book.id}
          component="button"
          onClick={() => handleClick(book.id)}
          sx={{
            justifyContent: "center",
            outline: "none",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          <Paper
            sx={{
              height: 250,
              width: 300,
            }}
          >
            <Box  sx={{
             padding: "1rem"
            }}>
              <Typography variant="body1" sx={{ padding: "5px" }}>
                {book.title}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                {book.author}
              </Typography>
              <Rating name="read-only" value={book.overallRating} readOnly />
              <Divider orientation="horizontal" sx={{marginBottom: "8px"}}/>
              <Typography variant="body2" sx={{textTransform: "lowercase"}}>
              {truncateText(book.description, 140)}
              </Typography>
            </Box>
          </Paper>
        </Button>
      ))}
    </Grid>
  );
};

export default BookList;
