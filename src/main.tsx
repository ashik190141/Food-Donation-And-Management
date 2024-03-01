import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Route/Route";
import { Provider } from "react-redux";
import { persistor, store } from "./Page/Redux/Features/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
      <Toaster />
    </Provider>
  </React.StrictMode>
);
// https://food-donation-and-supply-server.vercel.app
