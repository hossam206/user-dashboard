import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Pagination from "./Pagination";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetch_Users_Data } from "../Redux/main_function";

function UserList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  // destructure from state
  const { Users, loading, totalPages } = useSelector((state) => state.User);
  useEffect(() => {
    dispatch(fetch_Users_Data(page));
  }, [page]);

  return (
    <>
      {loading && <Loader />}
      <div className="h-screen bg-slate-50 dark:bg-zinc-900 px-4 py-10">
        <div className=" container py-10 md:py-20 grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {Users &&
            Users.map((User) => (
              <UserCard
                key={User.id}
                UserId={User.id}
                Avatar={User.avatar}
                Email={User.email}
                FisrtName={User.first_name}
                LastName={User.last_name}
              />
            ))}
        </div>

        <Pagination Page={page} TotalPage={totalPages} onPageChange={setPage} />
      </div>
    </>
  );
}

export default UserList;
