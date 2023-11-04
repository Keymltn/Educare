import "./App.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
