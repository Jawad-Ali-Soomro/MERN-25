import React from "react";
import { Routes, Route } from "react-router-dom";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageOne Two";
import { Link } from "react-router-dom";
export default function Router() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/page2" Component={PageTwo} />
        <Route path="/page1" Component={PageOne} />
        <Route path="/" element={<>This is an element as route</>} />
      </Routes>
    </React.Fragment>
  );
}
