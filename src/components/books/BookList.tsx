import React, { useState } from 'react';
import {
    Container,
    Grid2,
    List,
    ListItem,
    ListItemText,
    Typography,
    Paper,
    Card,
    CardContent,
    CardMedia,
  } from '@mui/material';
// import ExpandableText from "../../utils/ExpandableText"


interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  thumbnail?: string;
}

const books: Book[] = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about racial injustice and the loss of innocence in the American South.",
    thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  },
  {
    id: 2,
    title: "The Linux Command Line",
    author: "William E. Shotts, Jr.",
    description: "You've experienced the shiny, point-and-click surface of your Linux computer—now dive below and explore its depths with the power of the command line. The Linux Command Line takes you from your very first terminal keystrokes to writing full programs in Bash, the most popular Linux shell. Along the way you'll learn the timeless skills handed down by generations of gray-bearded, mouse-shunning gurus: file navigation, environment configuration, command chaining, pattern matching with regular expressions, and more. In addition to that practical knowledge, author William Shotts reveals the philosophy behind these tools and the rich heritage that your desktop Linux machine has inherited from Unix supercomputers of yore. As you make your way through the book's short, easily-digestible chapters, you'll learn how to: * Create and delete files, directories, and symlinks * Administer your system, including networking, package installation, and process management * Use standard input and output, redirection, and pipelines * Edit files with Vi, the world’s most popular text editor * Write shell scripts to automate common or boring tasks * Slice and dice text files with cut, paste, grep, patch, and sed Once you overcome your initial \"shell shock,\" you'll find that the command line is a natural and expressive way to communicate with your computer. Just don't be surprised if your mouse starts to gather dust. A featured resource in the Linux Foundation's \"Evolution of a SysAdmin\"",
    thumbnail: "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel of manners set in Georgian England, focusing on the Bennet family and their five unmarried daughters.",
    thumbnail: "http://books.google.com/books/content?id=evuwdDLfAyYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  }
];

const BookList: React.FC = () => {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    return (
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Book Library
        </Typography>
        <Grid2 container spacing={3}>
          <Grid2>
            <Paper elevation={3}>
              <List>
                {books.map((book) => (
                  <ListItem
                    component="li"
                    onClick={() => setSelectedBook(book)}
                  >
                    <ListItemText 
                      primary={book.title} 
                      secondary={book.author} 
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid2>
          <Grid2>
            {selectedBook ? (
              <Card>
                <CardMedia
                  component="img"
                  height="140"
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
                  <Typography variant="body2" color="text.secondary">
                    {selectedBook.description}
                  </Typography>
                </CardContent>
              </Card>
            ) : (
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">Select a book to view details</Typography>
              </Paper>
            )}
          </Grid2>
        </Grid2>
      </Container>
    );
  };

export default BookList;