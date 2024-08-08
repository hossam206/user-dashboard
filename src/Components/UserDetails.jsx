import React, { useEffect, useState } from "react";
import { work_arr } from "../Constans";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

export default function UserDetails() {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  // get User id
  const { id } = useParams();
  //  fetch user Details
  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`);
      const data = await response.json();

      setUser(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.error("Error fetching user details:", error);
    }
  };
  // handle choose between About or work
  const [toggle, settoggle] = useState(1);
  const handlemenuToggle = (index) => {
    settoggle(toggle === index ? null : index);
  };
  useEffect(() => {
    setLoading(true);
    fetchUserDetails();
  }, [id]);
  // handle naviaget to main user list.
  const BackButton = () => {
    Navigate("/");
  };
  return (
    <>
      {loading && <Loader />}
      <div className=" bg-slate-50 dark:bg-zinc-950 h-screen px-3">
        <div className="container">
          <button
            onClick={BackButton}
            className="mt-6 px-7 py-1 rounded-md text-white bg-blue-500
           hover:bg-blue-800 hover:shadow-md transition-all duration-300"
          >
            Back
          </button>
          {user && (
            <div className="mt-20 md:mt-6 py-10 px-2 md:p-4 mx-auto max-w-96 dark:bg-zinc-900 bg-slate-200 rounded-lg ">
              <div className="w-40 h-40 p-2  bg-white dark:bg-zinc-800 rounded-full overflow-hidden  mx-auto">
                <img
                  src={user.avatar}
                  alt="User_Img"
                  loading="lazy"
                  className="w-full h-full rounded-full"
                />
              </div>

              {/* User pagination */}
              <div className="flex justify-center my-3 w-fit mx-auto space-x-2 bg-white dark:bg-zinc-800 rounded-full px-2 py-1 ">
                <span
                  className={` font-semibold uppercase cursor-pointer px-3 py-1  rounded-full   ${
                    toggle == 1
                      ? "bg-sky-400 text-white"
                      : "bg-transparent text-sky-400"
                  }`}
                  onClick={() => handlemenuToggle(1)}
                >
                  About
                </span>
                <span
                  className={` font-semibold uppercase cursor-pointer px-3 py-1  rounded-full   ${
                    toggle == 2
                      ? "bg-sky-400 text-white"
                      : "bg-transparent text-sky-400"
                  }`}
                  onClick={() => handlemenuToggle(2)}
                >
                  Work
                </span>
              </div>
              {/* User card content */}
              <div>
                {/* About */}
                {toggle === 1 && (
                  <div className="flex flex-col items-start space-y-6 p-3 rounded-md bg-white dark:bg-zinc-800">
                    <div className="space-y-3">
                      <div className="flex flex-col items-start ">
                        <span className="capitalize font-semibold text-gray-700 text-lg">
                          Name:
                        </span>
                        <h3 className="text-gray-400 capitalize font-medium">
                          {user.first_name}
                          {user.last_name}
                        </h3>
                      </div>
                      <div className="flex flex-col items-start ">
                        <span className="capitalize font-semibold text-gray-700 text-lg">
                          Email:
                        </span>
                        <a
                          href={`mailto:${user.email}`}
                          className="text-gray-400 capitalize font-medium hover:underline"
                        >
                          {user.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col items-start ">
                      <span className="capitalize font-semibold text-gray-700 text-lg">
                        Bio
                      </span>
                      <p className="text-gray-400 capitalize font-medium">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus magni doloribus soluta ratione culpa. Aut.
                      </p>
                    </div>
                  </div>
                )}
                {/* About */}
                {/* Work */}
                {toggle === 2 && (
                  <div className="grid grid-cols-2 gap-3">
                    {work_arr.map((block, index) => (
                      <div
                        className="flex flex-col items-center justify-center space-y-2 bg-white dark:bg-zinc-800 rounded-lg p-5"
                        key={index}
                      >
                        <h2 className="text-5xl font-semibold text-gray-600">
                          {block.num}
                        </h2>
                        <p className="capitalize text-lg font-medium text-gray-400">
                          {block.title}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {/* Work */}
              </div>
              {/* User card content */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
