import React from "react";
import { Routes, Route } from "react-router-dom";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageOne Two";
import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Navbar from "../components/Navbar";
import NotFound from "../pages/NotFound";
import UnAuthorized from "../pages/UnAuthorized";
import { Outlet } from "react-router-dom";
import Protected from "./Protected";
export default function Router() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/page2" Component={PageTwo} />
        <Route path="/page1" Component={PageOne} />
        {/* <Route path="/login" Component={PageOne} /> */}

        <Route path="/products" Component={Protected}>
          <Route path="" element={<Products />} />
        </Route>

        <Route path="/" element={<Login />} />
        <Route path="/unAuthorized" element={<UnAuthorized />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/parent"
          element={
            <React.Fragment>
              we will display the components
              <div className="border-[2px] border-red-200">
                this is the area for the child route
                <span className="border-[2px] border-green-200">
                  <Outlet />
                </span>
              </div>
            </React.Fragment>
          }
        >
          <Route
            path=""
            element={<React.Fragment>I am Default Child</React.Fragment>}
          ></Route>
          <Route
            path="c1"
            element={<React.Fragment>I am Child One</React.Fragment>}
          ></Route>
          <Route
            path="c2"
            element={<React.Fragment>I am Child Two</React.Fragment>}
          ></Route>
          <Route
            path="*"
            element={<React.Fragment>Child Not found</React.Fragment>}
          ></Route>
        </Route>
      </Routes>
    </React.Fragment>
  );
}
