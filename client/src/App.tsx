import { Route, Routes } from "react-router-dom";
import "./App.css";
import { path } from "./ultils/constant";
import Home from "./containers/Public/home";
import Login from "./containers/Public/login";

function App() {
  return (
    <div className="w-full bg-gray-100 min-h-[100vh]">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
