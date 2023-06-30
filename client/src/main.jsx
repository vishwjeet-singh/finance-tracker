import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext";
import axios from "axios";
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Provider } from "react-redux";

axios.defaults.baseURL =
  "https://finance-tracker-59c54-default-rtdb.firebaseio.com/";

const store = createStore(reducer);
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </Provider>
  // </React.StrictMode>
);
