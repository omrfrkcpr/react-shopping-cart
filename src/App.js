import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};

export default App;
