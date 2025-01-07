import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { sections } from "./resources/sections";

const mainRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: sections
      .map((section) => {
        return { path: section.route, element: section.component }
      })
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={mainRouter} />
);
