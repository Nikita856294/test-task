import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { createRoot } from 'react-dom/client';
import Page from './components/Page/Page';
import {
  createBrowserRouter,

  RouterProvider,
  // Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
  },
  {
    path: "products",
    element : (<Page title={"Products List"}/>)
  },
  {
    path: "category",
    element: (<Page title={"Category List"} />),
  },

  {
        path: "order",
        element: (<Page title={"Order List"}/>)
  },
    

] 
)
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

