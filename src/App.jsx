import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="w-screen mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
