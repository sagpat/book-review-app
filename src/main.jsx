import * as React from "react";
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import { Provider } from "react-redux";
import './index.css'
import AuthPage from './pages/Auth'
import Layout from './pages/Layout'
import BooksPage from './pages/Books'
import BookDetails from "./components/books/BookDetails";
import store  from "./store/store";
import UserReviews from "./components/user/UserReviews";
import CreateBook from "./components/books/CreateBook";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<AuthPage />} />
      <Route path="books" element={<BooksPage />} />
      <Route path="book-details" element={<BookDetails />} />
      <Route path="users-reviews" element={<UserReviews />} />
      <Route path="/create-book" element={<CreateBook />} />
    </Route>
  ));

createRoot(document.getElementById("root")).render(
  <Provider store={store}> 
    <RouterProvider router={router} /> 
  </Provider>
);