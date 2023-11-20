import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="w-full h-full flex-col flex gap-10">
      <div className="sm:gap-2 lg:justify-between sm:flex-col lg:flex-row flex sm:gap-5 gap-10 ">
        <div className="lg:w-5/12 h-24 bg-indigo-500"></div>
        <div className="lg:w-5/12 h-24 bg-indigo-500"></div>
      </div>
      <div className="w-full h-64 bg-sky-500"></div>
      <div className="flex sm:flex-col sm:gap-2 gap-10 lg:flex-row">
        <div className="lg:w-5/12 lg:h-48 h-20 bg-blue-500"></div>
        <div className="lg:w-5/12 lg:h-48 h-20 bg-blue-500"></div>
        <div className="lg:w-5/12 lg:h-48 h-20 bg-blue-500"></div>
      </div>
    </div>
  );
}

export default App;
