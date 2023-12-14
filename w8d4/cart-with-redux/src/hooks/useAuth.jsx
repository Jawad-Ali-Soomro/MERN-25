import React from "react";
import { useSelector } from "react-redux";
export default function useAuth() {
  const globalState = useSelector((state) => state);
  return globalState.user?.loginUser?.userName !== undefined; // true ,false,
}
