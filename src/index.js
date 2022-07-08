import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NumberOne from "./Page/NumberOne";
import NumberTwo from "./Page/NumberTwo";
import NumberThree from "./Page/NumberThree";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/one" element={<NumberOne />} />
          <Route path="/two" element={<NumberTwo />} />
          <Route path="/three" element={<NumberThree />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
