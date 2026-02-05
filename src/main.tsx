import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./App";
import { createAuthGuard } from "./AuthGuard";
import State from "./State";

const SecuredState = createAuthGuard(State);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/secured",
        element: <SecuredState />,
      },
      {
        path: "/vanilla",
        element: <State />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
