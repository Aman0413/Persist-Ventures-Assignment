import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" p-2 flex flex-col items-center bg-gray-100">
      <div className="w-[98%] p-2">
        <Home />
      </div>
    </div>
  );
}

export default App;
