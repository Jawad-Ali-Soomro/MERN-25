import React from "react";
import ComponentOne from "../components/ComponentOne";
import ComponentTwo from "../components/ComponentTwo";
import ComponentThree from "../components/ComponentThree";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_NEW_ELEMENT, LOGIN, LOGOUT } from "../redux/actions";
import { Link } from "react-router-dom";

export default function PageOne() {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const [images, setImages] = useState([1, 2, 3]);
  return (
    <div>
      {JSON.stringify(globalState.user)}

      <div>
        <Link to={"/page1"}>Page 1</Link>
        <Link to={"/page2"}>Page 2</Link>
        {globalState.user?.loginUser ? (
          <button
            className="bg-slate-300 rounded hover:opacity-80 p-1 my-1 mx-1"
            onClick={() => {
              dispatch({ type: LOGOUT });
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-slate-300 rounded hover:opacity-80 p-1 my-1 mx-1"
            onClick={() => {
              dispatch({
                type: LOGIN,
                payload: { userName: "Angel", email: "DiMardia@gmail.com" },
              });
            }}
          >
            Login
          </button>
        )}
      </div>
      {JSON.stringify(globalState?.numbers)}
      <button
        className="bg-slate-300"
        onClick={() => {
          dispatch({ type: ADD_NEW_ELEMENT });
        }}
      >
        Change Global State
      </button>

      <div>PageOne</div>

      <div className="flex gap-2 w-full">
        <ComponentOne pageState={images} setPageState={setImages} />
        <ComponentTwo pageState={images} setPageState={setImages} />
        <ComponentThree pageState={images} setPageState={setImages} />
      </div>
    </div>
  );
}
