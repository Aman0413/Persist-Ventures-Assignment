import { Route, Routes } from "react-router-dom";
import "./App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" p-2 flex flex-col items-center bg-gray-100">
      <div className="w-[98%] p-2">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/favorites"} element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
