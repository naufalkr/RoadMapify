import TryItButton from "./button";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <div>
        {/* try and search lerningpath */}
        <div className="max-w-6xl mx-auto px-5 md:p-0 items-center">
          <div className="mt-10 md:grid md:grid-cols-2">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h1 className="text-5xl text-black font-semibold text-start">
                  Know your <br />{" "}
                  <span className="text-yellow-500 font-bold">
                    Learning Path
                  </span>{" "}
                  more <br />{" "}
                  <span className="text-emerald-700 font-bold">Easily</span> and{" "}
                  <span className="text-sky-600 font-bold">Precisely</span>.
                </h1>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Harum eius dignissimos ipsam tempora quia. Laboriosam
                  doloribus laborum maiores dolorum, aut dolore commodi non
                  eaque quis quos voluptatum adipisci consectetur! Et!
                </p>
              </div>
              <div className="w1-/2">
                <TryItButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
