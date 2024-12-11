import { Outlet } from "react-router-dom";
import "./App.css";
import Navber from "./components/Navber";

function App() {
  return (
    <div>
      <header>
        <Navber></Navber>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
