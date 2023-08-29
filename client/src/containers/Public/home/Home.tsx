import { Outlet } from "react-router-dom";
import { Header, HeaderLink } from "../header";


const Home = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center mx-auto min-h-[100vh] border border-red-200">
        <Header />
        <HeaderLink/>
        <div className="w-full flex flex-col items-center mt-5 justify-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
