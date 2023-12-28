import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Introduction from "./intoruction";
import Method1 from "./method-1";
import Method2 from "./method-2";
import Signals from "./singals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "introduction",
    element: <Introduction />,
  },
  {
    path: "method1",
    element: <Method1 />,
  },
  {
    path: "method2",
    element: <Method2 />,
  },
  {
    path: "signals",
    element: <Signals />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
