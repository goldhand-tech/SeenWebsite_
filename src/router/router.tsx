import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/layout";
import { ErrorPage } from "../layout/errorPage";
import { ResetPassword } from "../components/ResetPassword";
import { HomePage } from "../layout/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "passwordReset",
        element: <ResetPassword />,
      },
    ],
  },
]);

export default router;
