import React from "react";
import { useState } from "react";

export default function ComponentOne({ pageState, setPageState }) {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  return (
    <div className="bg-orange-300">
      <div>Component One</div>
      <div>
        <div> Parent State</div>
        <div className="flex flex-wrap ">
          {pageState.map((number, index) => (
            <img
              className="h-16 w-16"
              key={index}
              src={`https://api.dicebear.com/7.x/icons/svg?seed=${
                number + "a"
              }`}
              alt="avatar"
            />
          ))}
        </div>
      </div>

      <div>
        <button
          className="bg-slate-200"
          onClick={() => {
            setNumbers([...numbers, numbers.length + 1]);
          }}
        >
          {" "}
          Add new number to C-1
        </button>
        <div className="flex flex-wrap ">
          {numbers.map((number, index) => (
            <img
              className="h-16 w-16"
              key={index}
              src={`https://api.dicebear.com/7.x/bottts/svg?seed=${
                number + "i"
              }`}
              alt="avatar"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
