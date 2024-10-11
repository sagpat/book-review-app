import React from "react";
import { Container, Grid2, Typography } from "@mui/material";
import { BookProvider } from "../context/BookContext";
import BookList from "../components/books/BookList";
import BookDetails from "../components/books/BookDetails";

const BooksPage = () => {
  return (
    <BookProvider>
            <BookList />
            {/* <BookDetails /> */}
    </BookProvider>
  );
};

export default BooksPage;
