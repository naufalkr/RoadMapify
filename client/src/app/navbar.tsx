import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-[85rem] mx-auto">
        <div className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-8 text-[#191919]">
            <p>AIC</p>

            <div className="flex items-center group">
              <div className="pl-2 py-3 border-y-[1px] border-l-[1px] rounded-l-md focus:outline-none group-focus-within:border-black placeholder:text-sm text-sm">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="text"
                className="w-full bg-white border-y-[1px] border-r-[1px] rounded-r-md px-4 py-3 focus:outline-none focus:border-black placeholder:text-sm placeholder:text-gray-500 text-sm"
                placeholder="Cari"
              />
            </div>
            <div className="flex items-center text-sm font-medium ">
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
            </div>
          </div>
          {/* !isLogin */}
          <div className="flex items-center jusitfy-between gap-3 text-sm">
            <Link
              href={"/"}
              className="px-5 py-3 border-[1px] border-[#191919] text-[#191919] bg-white hover:bg-black hover:text-white"
            >
              Masuk
            </Link>
            <Link
              href={"/"}
              className="px-5 py-3 border-[1px] border-[#191919] text-white bg-[#191919] hover:bg-black"
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
