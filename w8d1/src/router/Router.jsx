import React from "react";
import { Routes, Route } from "react-router-dom";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageOne Two";
export default function Router() {
  return (
    <Routes>
      <Route path="/page2" Component={PageTwo} />

      <Route path="/page1" Component={PageOne} />
      <Route path="/" element={<>This is an element as route</>} />
    </Routes>
  );
}
