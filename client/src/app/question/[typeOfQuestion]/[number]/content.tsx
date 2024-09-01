"use client";

import { useState } from "react";
import Choice from "./choice";
import Pagination from "./pagination";

const Content = () => {
  const totalPage = 10;
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="flex flex-col max-w-6xl mx-auto gap-10">
        {/* no. */}
        <p className="text-white text-2xl">{`No. ${page} of ${totalPage}`}</p>
        {/* Pertanyaan */}
        <p className="text-white text-3xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          dignissimos suscipit officiis nemo voluptatibus ipsam sit quidem
          fugiat, minus consequatur quas perspiciatis quam fugit veniam non
          voluptates quibusdam necessitatibus doloremque?
        </p>

        {/* Jawaban */}
        <Choice />

        {/* Next/Prev Page */}
        <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      </div>
    </>
  );
};

export default Content;
