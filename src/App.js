import Sidebar from "./components/Sidebar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Business from "./components/news/Business";
import CurrentEvents from "./components/news/CurrentEvents";
import Sports from "./components/news/Sports";
import Entertainment from "./components/news/Entertainment";
import Technology from "./components/news/Technology";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <div className="app__container">
      <div className="app__sidebar">
        <Sidebar />
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/current" element={<CurrentEvents />} />
        <Route path="/business" element={<Business />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
