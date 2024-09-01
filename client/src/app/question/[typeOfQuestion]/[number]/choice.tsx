"use client";

import { useState } from "react";

const Choice = () => {
  const [isChoosed, setIsChoosed] = useState("");

  return (
    <div className="flex flex-col gap-3 text-class-tertiary">
      <div className="flex gap-3 items-center">
        <button
          onClick={() => {
            isChoosed == "A" ? setIsChoosed("") : setIsChoosed("A");
          }}
          className={` px-4 py-2 rounded-lg  transition-colors ${isChoosed == "A" ? "bg-blue-800 text-class-tertiary hover:bg-blue-950" : "bg-white text-black hover:bg-blue-800 hover:text-class-tertiary"}`}
        >
          A
        </button>
        <p className=" text-xl">Testing</p>
      </div>
      <div className="flex gap-3 items-center">
        <button
          onClick={() => {
            isChoosed == "B" ? setIsChoosed("") : setIsChoosed("B");
          }}
          className={` px-4 py-2 rounded-lg  transition-colors ${isChoosed == "B" ? "bg-blue-800 text-class-tertiary hover:bg-blue-950" : "bg-white text-black hover:bg-blue-800 hover:text-class-tertiary"}`}
        >
          B
        </button>
        <p className=" text-xl">Testing</p>
      </div>
      <div className="flex gap-3 items-center">
        <button
          onClick={() => {
            isChoosed == "C" ? setIsChoosed("") : setIsChoosed("C");
          }}
          className={` px-4 py-2 rounded-lg  transition-colors ${isChoosed == "C" ? "bg-blue-800 text-class-tertiary hover:bg-blue-950" : "bg-white text-black hover:bg-blue-800 hover:text-class-tertiary"}`}
        >
          C
        </button>
        <p className=" text-xl">Testing</p>
      </div>
      <div className="flex gap-3 items-center">
        <button
          onClick={() => {
            isChoosed == "D" ? setIsChoosed("") : setIsChoosed("D");
          }}
          className={` px-4 py-2 rounded-lg  transition-colors ${isChoosed == "D" ? "bg-blue-800 text-class-tertiary hover:bg-blue-950" : "bg-white text-black hover:bg-blue-800 hover:text-class-tertiary"}`}
        >
          D
        </button>
        <p className=" text-xl">Testing</p>
      </div>
    </div>
  );
};

export default Choice;
