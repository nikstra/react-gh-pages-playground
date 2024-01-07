import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./routes/About";
import Home from "./routes/Home";
import Jokes from "./routes/Jokes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jokes" element={<Jokes />} />
      </Routes>
    </>
  );
}

export default App;
