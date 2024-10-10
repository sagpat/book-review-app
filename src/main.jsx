import * as React from "react";
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import './index.css'
import Home from './pages/home'
import App from './App'
import Layout from './pages/Layout'
import BookList from './components/books/BookList'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="books" element={<BookList />} />
    </Route>
  ));

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);