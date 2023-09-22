import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";
import { RouterProvider, Route, createMemoryRouter } from "react-router-dom";
import Settings from "./pages/Settings";

const router = createMemoryRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
