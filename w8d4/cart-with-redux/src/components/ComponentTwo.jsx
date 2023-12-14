import React from "react";
import { useState } from "react";

export default function ComponentTwo({ pageState, setPageState }) {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  return (
    <div className="bg-yellow-300 ">
      Component Two
      <div>
        <div>
          <div> Parent State</div>
          <button
            onClick={() => {
              setPageState([...pageState, pageState.length + 1]);
            }}
            className="bg-black p-1 text-white rounded-lg hover:opacity-80 "
          >
            Change Parent State
          </button>
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
        Add new number to C-2
      </button>
      <div className="flex flex-wrap ">
        {numbers.map((number, index) => (
          <img
            className="h-16 w-16"
            key={index}
            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${
              number + "h"
            }`}
            alt="avatar"
          />
        ))}
      </div>
    </div>
  );
}
