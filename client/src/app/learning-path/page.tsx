import { SparklesIcon } from "@heroicons/react/24/outline";

const LearningPathPage = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto mt-10">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-5 items-center">
            <p className="text-5xl font-bold">
              Generate Your <span className="font-extrabold">Path</span>
            </p>
            <p className="max-w-xl text-class-secondary">
              Enter a topic and let the AI generate a roadmap for you
            </p>
          </div>
          <div className="flex gap-3 w-full max-w-xl">
            <input
              type="text"
              className="border-[2px] rounded-xl py-2 px-3 w-full"
            />
            <button className="flex items-center bg-class-primary rounded-xl text-class-tertiary px-5 gap-2">
              <SparklesIcon className="w-4 h-auto" /> Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningPathPage;
