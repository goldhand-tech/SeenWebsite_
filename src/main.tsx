import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
// import App from "./App.tsx";
const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
  // <App></App>
);
