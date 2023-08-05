import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <div className="main w-full">
      <div className="hidden w-full lg:flex flex-col items-center">
        <Outlet />
      </div>

      {/* Small Screen */}
      <div className="lg:hidden w-full h-full flex items-center justify-center text-gray-600 text-lg">
        App usable on desktop only.
      </div>
    </div>
  );
};

export default SharedLayout;
