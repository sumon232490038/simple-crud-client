import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Users from "./components/users.jsx";
import Form from "./components/Form.jsx";
import ContextProvider from "./components/ContextProvider.jsx";
import Update from "./components/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/delete",
        element: <Users></Users>,
        loader: () => fetch("http://localhost:3000/usersData"),
      },
      {
        path: "/",
        element: <Form></Form>,
      },
      {
        path: "/usersData/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/usersData/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
