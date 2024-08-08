import React, { useEffect, useState } from "react";
// import icons
import { IoIosSearch } from "react-icons/io";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Search_about_User } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  // import used hooks
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  // handle show input search
  const [inputSearch, setInputsearch] = useState(false);
  // toggle dark mode or light mode and
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const darkModeHandler = () => {
    setDark((prevDark) => !prevDark);
  };
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "");
    }
  }, [dark]);
  // get input search value
  const { UserDetails } = useSelector((state) => state.User);
  const SearchWithId = (searchvalue) => {
    dispatch(Search_about_User(searchvalue));
  };
  // handle navigate to userdetailspage
  const handleNaviaget = (Id) => {
    Navigate(`/UserDetails/${Id}`);
  };
  return (
    <nav
      className="sticky top-0 left-0 w-full z-50  backdrop-blur-md dark:bg-zinc-800
    border-b border-solid border-neutral-100 dark:border-zinc-700"
    >
      <div className="container">
        <div className="flex_row justify-between px-2 py-2">
          <a href="/" className="w-14 h-10 overflow-hidden block">
            <img src="/Images/Logo_Maids.cc.png" alt="Company_Logo" />
          </a>
          <div className="flex_row space-x-0 md:space-x-2">
            <div className=" relative dark:text-zinc-300">
              <input
                type="number"
                min={0}
                onChange={(e) => SearchWithId(e.target.value)}
                placeholder="Search With Id"
                className={` mx-9 p-1 rounded-md absolute right-0 transition-translate duration-300 z-10  ${
                  inputSearch
                    ? " animate-fade-in-left"
                    : " animate-fade-out-right"
                }`}
              />
              <div
                className="Icon_Style dark:text-zinc-300"
                onClick={() => setInputsearch(!inputSearch)}
              >
                <IoIosSearch />
              </div>
              {/* result of serched by user id  */}

              <div
                className={`flex_col items-start space-y-3 absolute bottom-0 my-2 top-full right-0   h-fit z-50 bg-white dark:bg-gray-900 p-3   rounded-md  ${
                  UserDetails
                    ? " animate-fade-in-up"
                    : " animate-fade-out-down "
                }}`}
              >
                {UserDetails && (
                  <div
                    className="flex_row px-3 py-2 space-x-2  w-full rounded-md hover:bg-neutral-300 hover:translate-x-1 transition-all duration-300 cursor-pointer bg-gray-100 dark:bg-gray-800"
                    onClick={() => handleNaviaget(UserDetails.id)}
                  >
                    <div className="w-10 h-10 p-1 overflow-hidden rounded-full border border-solid border-gray-200 dark:border-zinc-600">
                      <img
                        src={UserDetails.avatar}
                        alt={UserDetails.first_name}
                        loading="lazy"
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex_col items-start">
                      <h3 className="font-medium">
                        {UserDetails.last_name} {UserDetails.first_name}
                      </h3>
                      <a
                        href={`mailto:${UserDetails.email}`}
                        className="text-sm  text-gray-500 hover:text-gray-900 dark:hover:text-gray-400 transition-all duration-300 hover:underline"
                      >
                        {UserDetails.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* <div className="Icon_Style relative dark:text-zinc-300 group ">
              <GrLanguage />

              <ul className="absolute bottom-0 top-full righ-0  h-fit bg-slate-100 dark:bg-neutral-900 rounded-md p-2 invisible group-hover:visible">
                <li className="text-sm font-medium hover:bg-white text-gray-600 dark:text-zinc-300 px-10 py-1 rounded-md cursor-pointer hover:dark:bg-neutral-700 duration-400">
                  Arabic
                </li>

                <li className="text-sm font-medium text-gray-600 dark:text-zinc-300 px-10 py-1 rounded-md cursor-pointer hover:bg-white hover:dark:bg-neutral-700 duration-400">
                  English
                </li>
              </ul>
            </div> */}
            <div
              className="Icon_Style dark:text-zinc-300"
              onClick={() => darkModeHandler()}
            >
              {dark ? <MdLightMode /> : <MdOutlineDarkMode />}
            </div>

            <div className="flex_row justify-start gap-2 cursor-pointer ">
              <div className="w-9 h-9 p-2 rounded-full overflow-hidden bg-sky-100 ">
                <img src="/Images/Logo_Maids.cc.png " alt="Company_Logo" />
              </div>
              <div className="hidden md:flex flex-col items-start ">
                <p className="font-medium text-sm capitalize !leading-none text-gray-600 dark:text-zinc-300">
                  maids.cc
                </p>
                <span className="font-thin  text-sm tracking-tight  text-gray-400">
                  The Uber of Maids
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
