import { createBrowserRouter } from "react-router-dom";
import { ResetPassword } from "../components/ResetPassword";
import { HomePage } from "../layout/HomePage";
import { PrivacyPolicy } from "../components/PrivacyPolicy";
import { TermsConditions } from "../components/TermsConditions";
import { StatusResetPasswordPage } from "../components/StatusResetPasswordPage";
import { Layout } from "../layout/Layout";
import { ErrorPage } from "../layout/ErrorPage";
import CheckInAccept from "../components/CheckIn/CheckInAccept";
import { AppStoreLink } from "../components/AppStoreLink";

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
        path: "worked",
        element: <StatusResetPasswordPage />,
      },

      {
        path: "passwordreset",
        element: <ResetPassword />,
      },
      {
        path: "checkins",
        element: <CheckInAccept />,
      },
      {
        path: "link_to_app_store",
        element: <AppStoreLink />,
      },
    ],
  },
]);

export default router;
