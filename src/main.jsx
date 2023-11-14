import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Menu } from "./Menu/Menu.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Elements } from "./Styling-Basics/Elements.jsx";
import { Selectors } from "./Styling-Basics/Selectors.jsx";
import { Units } from "./Styling-Basics/Units.jsx";
import { MarginPadding } from "./Styling-Basics/Margin-Padding.jsx";
import { ZIndex } from "./Styling-Basics/Z-Index.jsx";
import { Flexbox } from "./Styling-Basics/Flexbox.jsx";

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
        path: "/elements",
        element: <Elements />,
      },
      {
        path: "/selectors",
        element: <Selectors />,
      },
      {
        path: "/units",
        element: <Units />,
      },
      {
        path: "/margin-padding",
        element: <MarginPadding />,
      },
      {
        path: "/z-index",
        element: <ZIndex />,
      },
      {
        path: "/flexbox",
        element: <Flexbox />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
