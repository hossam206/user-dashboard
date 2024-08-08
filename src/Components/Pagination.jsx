import React from "react";
// import icons
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";

function Pagination({ Page, TotalPage, onPageChange }) {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(Page - 1)}
        disabled={Page === 1}
        className={`bg-sky-400 dark:bg-zinc-600 hover:bg-sky-500  drak:hover:bg-zinc-400 dark:hover:bg-zinc-700 text-sky-100 text-lg font-bold py-2 px-4 rounded-md  ${
          Page == 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        }`}
      >
        <MdOutlineKeyboardDoubleArrowLeft />
      </button>
      <span className="py-2 px-4 font-medium dark:bg-white">
        {Page} / {TotalPage}
      </span>
      <button
        onClick={() => onPageChange(Page + 1)}
        disabled={Page === TotalPage}
        className={`bg-sky-400 dark:bg-zinc-600 dark:hover:bg-zinc-700  hover:bg-sky-500 text-sky-100 text-lg font-bold py-2 px-4 rounded-md disabled:opacity-50  ${
          Page == TotalPage ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <MdOutlineKeyboardDoubleArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
