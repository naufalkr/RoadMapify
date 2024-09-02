"use client";

import { SparklesIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import Navbar from "../navbar";
import Link from "next/link";
import { useState } from "react";
import { Graph } from "./graph";

const LearningPathPage = () => {
  const paths = [
    {
      title: "Software Engineer",
    },
    {
      title: "Data Engineer",
    },
    {
      title: "Frontend Engineer",
    },
    {
      title: "Backend Engineer",
    },
    {
      title: "Cybersec Engineer",
    },
  ];

  const [isGenerated, setIsGenerated] = useState(false);
  const generateHandler = () => {};

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="mt-10 mb-20 flex flex-col gap-20">
        <div className="flex items-center justify-center bg-class-tertiary">
          <div className="max-w-6xl mx-auto mt-10">
            <div className="flex flex-col gap-10 items-center">
              <div className="flex flex-col gap-2 items-center">
                <p className="bg-class-quaternary px-1 text-5xl font-bold">
                  Generate Your Path
                </p>
              </div>
              <div className="flex gap-3 w-full max-w-xl">
                <input
                  type="text"
                  className="border-[1px] rounded-xl py-2 px-3 w-full border-class-primary"
                  placeholder="Enter a topic"
                />
                <button className="flex items-center bg-class-primary rounded-xl text-class-tertiary px-5 gap-2">
                  <SparklesIcon className="w-4 h-auto" /> Generate
                </button>
              </div>
              <div className="flex flex-col">
                {/* Revisi text */}
                {/* <p>or generate Roadmap based on test below</p> */}
                <div className="flex gap-3 items-center">
                  <Link
                    href={"/question/basic"}
                    className="shadow-md bg-class-primary text-class-tertiary flex items-center gap-2 px-6 py-4 rounded-3xl w-[143px] justify-center"
                  >
                    <BookOpenIcon className="w-6 h-auto" />
                    <p>Basic</p>
                  </Link>
                  <Link
                    href={"/question/advance"}
                    className="shadow-md bg-class-primary text-class-tertiary flex items-center gap-2 px-6 py-4 rounded-3xl w-[143px] justify-center"
                  >
                    <AcademicCapIcon className="w-5 h-auto" />
                    <p>Advance</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Roadmap */}
        <div className="flex flex-col lg:px-0 sm:px-10 px-5 items-center gap-10">
          <div className="max-w-6xl mx-auto">
            <div className="w-1/2 gap-3">
              {/* nama prodi yang di generate */}
              <p className="inline-block text-3xl text-class-primary bg-class-quaternary font-semibold px-1 ">
                Data Engineer
              </p>
              <p className="text-class-primary mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates ullam animi rerum aliquam corrupti deserunt
                provident, ducimus quis
              </p>
            </div>
          </div>
          <Graph />
        </div>
      </div>
    </>
  );
};

export default LearningPathPage;
