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
import Layout from './pages/Layout'
import BooksPage from './pages/Books'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="books" element={<BooksPage />} />
    </Route>
  ));

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);