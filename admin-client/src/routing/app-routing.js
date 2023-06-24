import { createBrowserRouter, Outlet } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import NotesPage, { getNotes } from "../pages/NotesPage";
import NotePage from "../pages/NotePage";

const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LoginPage/>,
//     errorElement: <ErrorPage/>,
//   },
  {
    path: "/",
    element: <Outlet />,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/",
            element: <NotesPage/>,
            loader: getNotes,
        },
        {
            path: "/new-note",
            element: <NotePage/>,
        },
        {
            path: "/notes/:id",
            element: <NotePage/>,
        }
    ]

  },
  {
    path: "/notes/:id",
    element: <NotePage/>,
    errorElement: <ErrorPage/>,

  }
]);



export default router;