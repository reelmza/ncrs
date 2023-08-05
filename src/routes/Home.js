import { useState } from "react";
import Header from "../components/Header";
import parastatals from "../db/parastatals";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const login = (e) => {
    e.preventDefault();
    setError(null);

    // User authentication
    const auth = () => {
      const username = e.target[0].value;
      const password = e.target[1].value;

      if (!username || !password) {
        return setError("Input all feilds");
      }

      const targetUser = parastatals.find(
        (user) => user.username === username && user.password === password
      );

      if (targetUser) {
        return navigate("/dashboard", {
          state: { permisions: targetUser?.permisions },
        });
      }

      setError("Incorrect details");
      return console.log("Incorrect details");
    };
    auth();
  };

  return (
    <div className="shadow-lg py-10 px-14 w-[30%] rounded-md bg-white">
      {/* Header */}
      <Header />

      {/* Login Form */}
      <form className="w-full mt-5" onSubmit={login}>
        <div className="form-control w-full flex items-center mb-2">
          <div className="flex items-center justify-center border text-gray-600 w-12 h-10 rounded-l">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Username"
            className="grow border-y border-r text-gray-600 h-10 px-3 italic rounded-r"
          />
        </div>
        <div className="form-control w-full flex items-center">
          <div className="flex items-center justify-center border text-gray-600 w-12 h-10 rounded-l">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="password"
            placeholder="Password"
            className="grow border-y border-r text-gray-600 h-10 px-3 italic rounded-r"
          />
        </div>
        <div className="error-box w-full h-10 pt-4 text-sm text-red-700">
          {error}
        </div>
        <div className="form-control w-full flex items-center justify-between">
          <div className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
            Request an account?
          </div>
          <button
            type="submit"
            className="flex items-center h-10 px-10 text-white bg-blue-600 hover:bg-blue-800 shadow-blue-100 shadow-lg font-semibold text-sm rounded transition-all ease duration-800"
          >
            <span>Login</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mt-[2px]"
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
