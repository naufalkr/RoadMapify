import TryItButton from "./button";
import Navbar from "./navbar";

export default function Home() {
  const images = [
    {
      id: "telkomsel",
      link: "https://soerabaja45.co.id/wp-content/uploads/2021/12/logo-telkomsel-baru-e1638845397379.png",
    },
    {
      id: "telkomsel",
      link: "https://soerabaja45.co.id/wp-content/uploads/2021/12/logo-telkomsel-baru-e1638845397379.png",
    },
    {
      id: "telkomsel",
      link: "https://soerabaja45.co.id/wp-content/uploads/2021/12/logo-telkomsel-baru-e1638845397379.png",
    },
    {
      id: "gojek",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/GoTo_logo.png/640px-GoTo_logo.png",
    },
  ];

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <div>
        {/* try and search lerningpath */}
        <div className="max-w-6xl mx-auto px-5 md:p-0 items-center justify-center">
          <div className="mt-20 flex flex-col gap-20 ">
            <div className="md:grid md:grid-cols-2">
              {/* Jumbotron */}
              <div className="flex flex-col gap-5">
                <h1 className="text-5xl text-black font-bold text-start">
                  Know your <br />{" "}
                  <span className="text-yellow-500 font-extrabold">
                    Learning Path
                  </span>{" "}
                  more <br />{" "}
                  <span className="text-emerald-700 font-extrabold">
                    Easily
                  </span>{" "}
                  and{" "}
                  <span className="text-sky-600 font-extrabold">Precisely</span>
                  .
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Harum eius dignissimos ipsam tempora quia. Laboriosam
                  doloribus laborum maiores dolorum, aut dolore commodi non
                  eaque quis quos voluptatum adipisci consectetur! Et!
                </p>
                <div className="w1-/2">
                  <TryItButton />
                </div>
              </div>
            </div>
            <div className="flex border-y-[1px] border-class-secondary px-10 py-5 justify-between">
              {images.map((images: any) => (
                <div key={images.id}>
                  <img
                    src={images.link}
                    alt=""
                    className="h-20 w-auto object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem autem hic itaque adipisci natus praesentium animi
                consequatur dolorum explicabo obcaecati. Hic alias ratione eius!
                Neque molestiae quo itaque deserunt nemo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
}
