import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Number from "./components/Number";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/:param" element={<Number />}></Route>
        <Route path="/:param/:text" element={<Number />}></Route>
        <Route path="/:param/:text/:bg" element={<Number />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
