import React from "react";
import { useState } from "react";

export default function ComponentThree({ pageState, setPageState }) {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  return (
    <div className="bg-green-300">
      Component Three
      <div>
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
      </div>
      <button
        className="bg-slate-200"
        onClick={() => {
          setNumbers([...numbers, numbers.length + 1]);
        }}
      >
        {" "}
        Add new number to C-3
      </button>
      <div className="flex flex-wrap ">
        {numbers.map((number, index) => (
          <img
            className="h-16 w-16"
            key={index}
            src={`https://api.dicebear.com/7.x/big-ears/svg?seed=${
              number + "p"
            }`}
            alt="avatar"
          />
        ))}
      </div>
    </div>
  );
}
