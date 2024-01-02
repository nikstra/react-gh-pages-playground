import './App.css';
import { Routes, Route} from "react-router-dom";
import Navbar from './Navbar';
import About from "./routes/About";
import Careers from "./routes/Careers";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}

export default App;
