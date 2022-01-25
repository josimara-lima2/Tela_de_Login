import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import { ThemeProvider } from "./context/themeContext";
import AuthProvider from "./context/userContext";
import store from "./store";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ReduxProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
