import React from "react";
import ComponentOne from "../components/ComponentOne";
import ComponentTwo from "../components/ComponentTwo";
import ComponentThree from "../components/ComponentThree";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_NEW_ELEMENT } from "../redux/actions";
import { Link } from "react-router-dom";

export default function PageTwo() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [images, setImages] = useState([1, 2, 3]);
  return (
    <div>
      <div>
        <Link to={"/page1"}>Page 1</Link>
        <Link to={"/page2"}>Page 2</Link>
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

      <div>PageTwo </div>
      <div className="flex gap-2 w-full">
        <ComponentOne pageState={images} setPageState={setImages} />
        <ComponentTwo pageState={images} setPageState={setImages} />
        <ComponentThree pageState={images} setPageState={setImages} />
      </div>
    </div>
  );
}
