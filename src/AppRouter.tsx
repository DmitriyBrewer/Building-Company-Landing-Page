import React from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./pages/Container";
import Project from "./pages/Project";
import About from "./pages/About";

function AppRouter() {
  return (
    <Routes>
      <Route path="/main" element={<Container />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Container />} />
    </Routes>
  );
}

export default AppRouter;
