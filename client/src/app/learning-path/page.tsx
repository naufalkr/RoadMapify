import { SparklesIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import Navbar from "../navbar";
import Link from "next/link";

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

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className=" min-h-[80vh] flex items-center justify-center bg-class-tertiary">
        <div className="max-w-6xl mx-auto mt-10">
          <div className="flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-5xl font-bold">
                Generate Your{" "}
                <span className="font-extrabold text-class-quaternary">
                  Path
                </span>
              </p>
              <p className="max-w-xl text-class-primary">
                Enter a topic and let the AI generate a roadmap for you
              </p>
            </div>
            <div className="flex gap-3 w-full max-w-xl">
              <input
                type="text"
                className="border-[2px] rounded-xl py-2 px-3 w-full border-class-primary"
              />
              <button className="flex items-center bg-class-primary rounded-xl text-class-tertiary px-5 gap-2">
                <SparklesIcon className="w-4 h-auto" /> Generate
              </button>
            </div>
            {/* <div className="grid grid-cols-3 gap-x-3 gap-y-5">
              {paths.map((path, index: number) => (
                <div
                  key={index}
                  className="shadow-md bg-class-primary text-class-tertiary flex items-center gap-2 px-6 py-4 rounded-md"
                >
                  <p>{path.title}</p>
                </div>
              ))}
            </div> */}
            <div className="flex gap-3 items-center">
              <Link
                href={"/question"}
                className="shadow-md bg-class-primary text-class-tertiary flex items-center gap-2 px-6 py-4 rounded-md w-[143px] justify-center hover:-translate-y-1 transition-all ease-in-out"
              >
                <BookOpenIcon className="w-6 h-auto" />
                <p>Basic</p>
              </Link>
              <Link
                href={"/question"}
                className="shadow-md bg-class-primary text-class-tertiary flex items-center gap-2 px-6 py-4 rounded-md w-[143px] justify-center hover:-translate-y-1 transition-all ease-in-out"
              >
                <AcademicCapIcon className="w-5 h-auto" />
                <p>Advance</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningPathPage;
