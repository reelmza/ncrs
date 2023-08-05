import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import users from "../db/users.json";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [currentData, setCurrentData] = useState("basicData");

  const location = useLocation();
  const navigate = useNavigate();

  const getUser = (e) => {
    e.preventDefault();
    setError(null);
    setUser(null);
    setCurrentData("basicData");

    const userName = e.target[0].value;
    const permisions = location?.state?.permisions;

    if (!userName) {
      return setError("Enter a valid username.");
    }

    if (!permisions) {
      return navigate("/");
    }

    const targetUser = users.find((user) => user.username === userName);

    if (targetUser) {
      const acessibleData = {};

      if (permisions[0] === "all") {
        return setUser(targetUser);
      }

      permisions.forEach((element) => {
        acessibleData[element] = targetUser[element];
      });

      console.log(acessibleData);
      return setUser(acessibleData);
    } else {
      return setError("User not found");
    }
  };

  const logout = (e) => {
    e.preventDefault();
    setError(null);
    setUser(null);
    setCurrentData("basicData");

    return navigate("/");
  };

  const setActiveData = (data) => {
    console.log(data);
    setCurrentData(data);
  };

  return (
    <div className="rounded-md bg-white shadow-lg py-10 px-14 w-[60%]">
      {/* Header */}
      <div className="border-b mb-5 pb-5">
        <Header />
      </div>

      {/* Content */}
      <div className="w-full grid grid-cols-12">
        <div className="flex flex-col justify-between col-span-4 border-r pr-5">
          <form className="w-full" onSubmit={getUser}>
            <div className="form-control w-full flex items-center h-10  border">
              <input
                type="text"
                placeholder="Search user"
                className="grow h-full w-5 px-3"
              />
              <button className="h-10 w-10 flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white border-l">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="error text-red-700 text-sm mt-2 mb-5">{error}</div>

            {user && (
              <div className="w-full">
                <div className="mb-5 text-gray-600 font-semibold">
                  Select data to access
                </div>
                <div className="w-full flex items-center justify-between flex-wrap">
                  {Object.keys(user)
                    .slice(1)
                    .map((item) => {
                      return (
                        <div
                          className={`flex items-center justify-center w-[48%] border h-10 mb-2 cursor-pointer text-gray-600 capitalize hover:bg-blue-600 hover:text-white transition-all ease-in-out duration-800 ${
                            currentData === item
                              ? "bg-blue-600 hover:bg-blue-600 text-white"
                              : ""
                          }`}
                          onClick={() => setActiveData(item)}
                        >
                          {item}
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </form>

          <div className="w-full">
            <button
              className="h-10 w-[48%] flex justify-start items-center text-gray-600 hover:text-blue-600 transition-all ease duration-800"
              onClick={logout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="font-semibold ">Logout</span>
            </button>
          </div>
        </div>
        <div className="col-span-8 px-5 h-[50vh]">
          {user && (
            <div className="flex flex-col">
              <div className="data-block">
                <div className="font-semibold text-lg mb-2 capitalize">
                  {currentData}
                </div>
                <div>
                  {Object.keys(user[currentData]).map((item) => {
                    return (
                      <div className="mb-2 flex items-center text-gray-600">
                        <div className="mr-2 font-semibold capitalize">
                          {item === "maritalStatus" ? "Marital Status" : item}:
                        </div>
                        <div>
                          {!user[currentData][item]
                            ? "Nil"
                            : user[currentData][item]}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          {/* No results box */}
          {!user && (
            <div className="h-full w-full flex items-center justify-center text-gray-600">
              Search results will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
