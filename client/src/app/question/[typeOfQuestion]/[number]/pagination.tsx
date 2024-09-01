import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPage: number;
};

const Pagination = ({ ...params }: PaginationProps) => {
  return (
    <div className="flex justify-end items-center gap-3">
      <button
        onClick={() => params.setPage(params.page - 1)}
        disabled={params.page === 1}
        className="bg-blue-800 px-3 py-2 rounded-lg text-white"
      >
        <ChevronLeftIcon className="w-6 h-auto" />
      </button>
      <button
        onClick={() => params.setPage(params.page + 1)}
        disabled={params.page === params.totalPage}
        className="bg-blue-800 px-3 py-2 rounded-lg text-white"
      >
        <ChevronRightIcon className="w-6 h-auto" />
      </button>
    </div>
  );
};

export default Pagination;
