import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
};

const Pagination = ({ ...params }: PaginationProps) => {
  const router = useRouter();

  return (
    <div className="flex justify-end items-center gap-3">
      <button
        onClick={() => params.setPage(params.page - 1)}
        disabled={params.page === 1}
        className="bg-class-quaternary px-3 py-2 rounded-xl text-class-primary disabled:invisible visible hover:bg-lime-400"
      >
        <ChevronLeftIcon className="w-6 h-auto" />
      </button>
      <button
        onClick={() => params.setPage(params.page + 1)}
        disabled={params.page === params.totalPage}
        className="bg-class-quaternary px-3 py-2 rounded-xl text-class-primary disabled:hidden visible hover:bg-lime-400"
      >
        <ChevronRightIcon className="w-6 h-auto" />
      </button>

      {params.page === params.totalPage ? (
        <button
          onClick={() => router.back()}
          className="bg-class-quaternary px-3 py-2 rounded-xl text-class-primary hover:bg-lime-400"
        >
          Finish Quiz
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
