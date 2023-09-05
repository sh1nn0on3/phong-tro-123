import { Outlet } from "react-router-dom";
import { HeaderLink } from "../header";
import React, { Suspense } from "react";

const Header = React.lazy(() => import("../header/Header"));

const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center mx-auto min-h-[100vh] border border-red-200">
        {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Header />
        {/* </Suspense> */}
        <HeaderLink />
        <div className="w-full flex flex-col items-center mt-5 justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
