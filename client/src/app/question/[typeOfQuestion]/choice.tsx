"use client";

import { useState } from "react";

const Choice = () => {
  const [isChoosed, setIsChoosed] = useState("");

  return (
    <div className="flex flex-col gap-3 text-class-primary">
      <div className="flex gap-3 items-center">
        <button
          onClick={() => {
            isChoosed == "A" ? setIsChoosed("") : setIsChoosed("A");
          }}
          className={` px-4 py-2 rounded-lg  transition-colors ${isChoosed == "A" ? "bg-class-quaternary text-class-primary hover:bg-lime-400" : "bg-white text-black hover:bg-class-quaternary hover:text-class-primary"}`}
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
          className={` px-4 py-2 rounded-lg  transition-colors ${isChoosed == "B" ? "bg-class-quaternary text-class-primary hover:bg-lime-400" : "bg-white text-black hover:bg-class-quaternary hover:text-class-primary"}`}
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
          className={` px-4 py-2 rounded-lg  transition-colors ${isChoosed == "C" ? "bg-class-quaternary text-class-primary hover:bg-lime-400" : "bg-white text-black hover:bg-class-quaternary hover:text-class-primary"}`}
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
          className={` px-4 py-2 rounded-lg  transition-colors ${isChoosed == "D" ? "bg-class-quaternary text-class-primary hover:bg-lime-400" : "bg-white text-black hover:bg-class-quaternary hover:text-class-primary"}`}
        >
          D
        </button>
        <p className=" text-xl">Testing</p>
      </div>
    </div>
  );
};

export default Choice;
