import React from "react";
import { Grid, Paper, Box, Button, Typography, Rating, CardMedia } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const BookDetails = () => {
  const book = {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  };

// REMEMBER: save image in db itself with specific width and height.

  const [searchParams] = useSearchParams();
  const bookId = searchParams.get("id");

  console.log("bookId", bookId);
  return (
        <Paper
        sx={{
            margin: "auto",
            alignItems: "center",
            name: "book-details",
            justifyContent: 'center',
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: "1rem",
              justifyContent: 'center',
            }}
          >
            <CardMedia
              component="img"
              image={book.thumbnail}
              sx={{ width: 400, height: 400, marginRight: "1rem" }}
            />
            <Box>
            <Typography variant="h3" sx={{ padding: "5px" }}>
              {book.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              {book.author}
            </Typography>
            <Rating name="read-only" value={book.rating} readOnly />
            <Typography variant="body2" sx={{textTransform: "lowercase"}}>
              {book.description}
            </Typography>
            </Box>
          </Box>
        </Paper>
  )
}

export default BookDetails;
