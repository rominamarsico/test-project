import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Menu } from "./Menu.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/hello",
        element: <div>Hello world!</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
