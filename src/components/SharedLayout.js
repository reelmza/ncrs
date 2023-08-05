import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <div className="main w-full">
      <div className="hidden w-full lg:flex flex-col items-center">
        <Outlet />
      </div>

      {/* Small Screen */}
      <div className="lg:hidden text-gray-600">App usable on desktop only.</div>
    </div>
  );
};

export default SharedLayout;
