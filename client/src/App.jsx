import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Result from "./components/Result";
import Ho from "./components/Ho";

const App = () => {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Ho />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
};

export default App;
