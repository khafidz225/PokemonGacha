import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collection from "./pages/Collection";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
