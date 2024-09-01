import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-8 text-[#191919]">
            <Link href={"/"}>AIC</Link>

            {/* <div className="flex items-center text-sm font-medium ">
              <Link
                href="/"
                className="whitespace-nowrap py-3 px-3 hover:bg-gray-100 rounded-sm"
              >
                Learning Path
              </Link>
              <Link
                href="/"
                className="whitespace-nowrap py-3 px-3 hover:bg-gray-100 rounded-sm"
              >
                Program
              </Link>
              <Link
                href="/"
                className="whitespace-nowrap py-3 px-3 hover:bg-gray-100 rounded-sm"
              >
                Lainnya
              </Link>
            </div> */}
          </div>
          {/* !isLogin */}
          <div className="flex items-center jusitfy-between gap-3 text-sm">
            <Link
              href={"/"}
              className="px-5 py-3 border-[1px] border-[#191919] text-[#191919] bg-white hover:bg-black hover:text-white rounded-xl"
            >
              Masuk
            </Link>
            <Link
              href={"/"}
              className="px-5 py-3 border-[1px] border-[#191919] text-white bg-[#191919] hover:bg-black rounded-xl"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
