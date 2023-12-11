import React from "react";
import ComponentOne from "../components/ComponentOne";
import ComponentTwo from "../components/ComponentTwo";
import ComponentThree from "../components/ComponentThree";
import { useState } from "react";

export default function PageTwo() {
  const [images, setImages] = useState([1, 2, 3]);
  return (
    <div>
      <div>PageOne</div>
      <div className="flex gap-2 w-full">
        <ComponentOne pageState={images} setPageState={setImages} />
        <ComponentTwo pageState={images} setPageState={setImages} />
        <ComponentThree pageState={images} setPageState={setImages} />
      </div>
    </div>
  );
}
