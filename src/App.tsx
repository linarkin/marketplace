import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NotFoundPage from "views/notFoundPage";
import HomePage from "views/homePage/homePage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
