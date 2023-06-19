import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/layout";
import { ErrorPage } from "../layout/errorPage";
import { ResetPassword } from "../components/ResetPassword";
import { HomePage } from "../layout/HomePage";
import { PrivacyPolicy } from "../components/PrivacyPolicy";
import { TermsConditions } from "../components/TermsConditions";

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
        path: "termsconditions",
        element: <TermsConditions />,
      },

      {
        path: "privacypolicy",
        element: <PrivacyPolicy />,
      },

      {
        path: "passwordreset",
        element: <ResetPassword />,
      },
    ],
  },
]);

export default router;
