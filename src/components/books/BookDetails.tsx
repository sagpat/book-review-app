import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Box,
  Button,
  Typography,
  Rating,
  CardMedia,
  TextField,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { apiRequest } from "../../apis/api";
import { useAppSelector } from "../../hooks/useAppSelector";
import getFormattedDate from "../../helper/Date";

const BookDetails = () => {
  const reviewDate = getFormattedDate(new Date().toLocaleDateString());
  console.log("reviewDate", reviewDate);
  const [searchParams] = useSearchParams();

  const bookId = searchParams.get("id");
  const username = useAppSelector((state) => state.auth.loggedinUser);

  // State to manage reviews and user input
  const [book, setBookDetails] = useState<any>({});
  const [reviews, setReviews] = useState<
    {
      [x: string]: any; id: number; username: string | null; rating: number; reviewText: string 
}[]
  >([]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState<number | null>(0);
  const authToken = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  // Fetch reviews when the component loads
  useEffect(() => {
    console.log("bookId", bookId);
    if (bookId) {
      const getBookReviews = apiRequest(
        "post",
        "/api/reviews/getBooksReviews",
        { bookId },
        authToken
      );
      getBookReviews.then((data) => setReviews(data));

      const getBookDetails = apiRequest(
        "post",
        "/api/books/getBookDetails",
        { bookId },
        authToken
      );
      getBookDetails.then((data) => setBookDetails(data));
    }
  }, [bookId]);

  // Handle submitting a new review
  const handleSubmitReview = async () => {
    console.log(
      "newRating, newReview, id",
      newRating,
      newReview,
      userId,
      reviewDate
    );
    if (newRating && newReview && userId) {
      const response = await apiRequest(
        "post",
        "/api/reviews/createReview",
        {
          bookId,
          userId,
          rating: newRating,
          reviewText: newReview,
          reviewDate,
        },
        authToken
      );
      console.log("response::", response);
      if (response.suceess) {
        console.log("response2::", response);
        setReviews((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            username,
            rating: newRating,
            reviewText: newReview,
          },
        ]);
        setNewReview("");
        setNewRating(0);
      }
    }
  };

  console.log("reviews::::::", reviews);
  console.log("book:::::", book);

  // TODO: seperate out the components.
  // 1. Book details like image, desc & rating
  // 2. Rating and leave a review
  // 3. User reviews


  return (
    <Paper
      sx={{
        margin: "auto",
        marginTop: "20%",
        alignItems: "center",
        name: "book-details",
        justifyContent: "center",
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
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          image={book.bookCover}
          sx={{ width: 200, height: 300, marginRight: "1rem" }}
        />
        <Box>
          <Typography variant="h3" sx={{ padding: "5px" }}>
            {book.title}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {book.author}
          </Typography>
          <Rating name="read-only" value={book.overallRating} readOnly />
          <Typography variant="body2" sx={{ textTransform: "lowercase" }}>
            {book.description}
          </Typography>
        </Box>
      </Box>

      {/* User review input */}
      <Box sx={{ padding: "1rem" }}>
        <Typography variant="h6">Leave a Review:</Typography>
        <TextField
          label="Review"
          fullWidth
          multiline
          margin="normal"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <Box>
          <Rating
            name="new-rating"
            value={newRating}
            onChange={(event, newValue) => setNewRating(newValue)}
          />
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={handleSubmitReview}
          >
            Submit Review
          </Button>
        </Box>
      </Box>

      {/* Display existing reviews */}
      <Box sx={{ padding: "1rem" }}>
        <Typography variant="h6">Reviews:</Typography>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <Paper key={review.id} sx={{ padding: "1rem", margin: "1rem 0" }}>
              <Typography variant="subtitle1">
                <strong>{review?.User?.username || review.username}</strong> rated:{" "}
                <Rating name="read-only" value={review.rating} readOnly />
              </Typography>
              <Typography variant="body1">{review.reviewText}</Typography>
            </Paper>
          ))
        ) : (
          <Typography>No reviews yet.</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default BookDetails;
