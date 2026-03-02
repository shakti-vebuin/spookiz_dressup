import { createBrowserRouter, Navigate } from "react-router";
import Option1 from "./pages/Option1";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Option1,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);