import React from "react";
import {
  ListItem,
  ListItemText,
  Typography,
  Paper,
  List,
  Rating,
  Divider,
  Box,
  Stack,
  Grid2,
  Grid,
  Button,
} from "@mui/material";
import { useBookContext } from "../../context/BookContext";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  thumbnail?: string;
  rating: number;
}

const books: Book[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A novel about racial injustice and the loss of innocence in the American South.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 5,
  },
  {
    id: 2,
    title: "The Linux Command Line",
    author: "William E. Shotts, Jr.",
    description:
      "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
    thumbnail:
      "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    rating: 5,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  },
  {
    id: 3,
    title: "Pride and Prejudice Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail:
      "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    rating: 4,
  },
];

const BookList: React.FC = () => {
  const { setSelectedBook } = useBookContext();
  return (
    <Grid sx={{ flexGrow: 5, justifyContent: "center" }} container spacing={2}>
          {books.map((book) => (
            <Button
              key={book.id}
              component="button"
              onClick={() => setSelectedBook(book)}
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
                <Box>
                  <Typography variant="h6" sx={{ padding: "5px"}}>
                    {book.title}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    {book.author}
                  </Typography>
                  <Rating name="read-only" value={book.rating} readOnly />
                </Box>
              </Paper>
            </Button>
          ))}
    </Grid>
  );
};

export default BookList;
