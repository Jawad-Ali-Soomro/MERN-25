import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN, LOGOUT } from "../redux/actions";

export default function Navbar() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="my-2">
      <div>
        {globalState.user?.loginUser ? (
          <div>
            Hi, {globalState.user?.loginUser.userName}
            <button
              className="bg-slate-300 rounded hover:opacity-80 p-1 my-1 mx-1"
              onClick={() => {
                dispatch({ type: LOGOUT });
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            className="bg-slate-300 rounded hover:opacity-80 p-1 my-1 mx-1"
            to={"/"}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
