import { Outlet } from "react-router-dom";

import HeroSection from "./Hero";
import Navbar from "./Navbar";

function App() {
  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px" }}>
      <Navbar></Navbar>
      <h1>App Component Here</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
