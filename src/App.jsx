import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./routes/About";
import Home from "./routes/Home";
import Jokes from "./routes/Jokes";
import Settings from "./routes/Settings";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jokes" element={<Jokes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
