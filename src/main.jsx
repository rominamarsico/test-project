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
import { Vacation } from "./Vacation/Vacation.jsx";
import { Currency } from "./Currency/Currency.jsx";
import { Map } from "./JsMethods/Map.jsx";
import { Filter } from "./JsMethods/Filter.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F18594", // pink
      light: "#F4C7CD", // light pink
      dark: "#B24251", // dark pink
    },
  },
});

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
        path: "/map",
        element: <Map />,
      },
      {
        path: "/filter",
        element: <Filter />,
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
      {
        path: "/vacation",
        element: <Vacation />,
      },
      {
        path: "/currency",
        element: <Currency />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
