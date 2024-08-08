import React from "react";
// import icons
import { TiArrowRight } from "react-icons/ti";
// import Navigate
import { useNavigate } from "react-router-dom";

export default function UserCard({
  UserId,
  Email,
  FisrtName,
  LastName,
  Avatar,
}) {
  const navigate = useNavigate();
  const handleCardClick = (Id) => {
    navigate(`/UserDetails/${Id}`);
  };
  return (
    <>
      <div
        className="px-4 py-8 rounded-lg dark:bg-zinc-800 bg-slate-200 cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={(e) => handleCardClick(UserId)}
      >
        <div className="flex_row !items-start gap-2">
          <a
            href="/"
            className="w-12 h-12 overflow-hidden rounded-full bg-sky-500
        "
          >
            <img
              src={Avatar}
              alt={`${FisrtName}`}
              className="w-full h-full"
              loading="lazy"
            />
          </a>
          <div className="flex_col space-y-3 items-start">
            <div className="flex_col items-start ">
              <span className="text-lg font-bold text-stone-950 dark:text-zinc-300">
                {`${FisrtName} ${LastName}`}
              </span>
              <a
                href={`mailto:${Email}`}
                className="text-neutral-500 text-sm font-medium   hover:text-gray-800 dark:text-zinc-400 dark:hover:text-white"
              >
                {Email}
              </a>
            </div>
            <p className="flex_row justify-center text-cyan-500 space-x-1 transition-transform hover:translate-x-2 duration-300">
              <span className=" tracking-tight">View All</span>
              <TiArrowRight />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
