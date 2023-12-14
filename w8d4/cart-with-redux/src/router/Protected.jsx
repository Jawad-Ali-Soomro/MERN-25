import React from "react";
import useAuth from "../hooks/useAuth";
import { Outlet } from "react-router-dom";
import UnAuthorized from "../pages/UnAuthorized";
export default function Protected() {
  const isAuthorized = useAuth();
  return isAuthorized === true ? <Outlet /> : <UnAuthorized />;
}
