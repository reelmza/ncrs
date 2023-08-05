import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <div className="main w-full">
      <div className="hidden w-full lg:flex flex-col items-center">
        <Outlet />
      </div>

      {/* Small Screen */}
      <div className="lg:hidden w-full h-full flex items-center justify-center ">
        <div className="bg-white px-4 py-2 shadow-lg text-gray-800 text-xl">
          App usable on desktop only.
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
