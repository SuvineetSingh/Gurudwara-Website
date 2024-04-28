import "./App.css";
import About from "./components/About";
import Donation from "./components/Donation";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import UpcomingEvents from "./components/UpcomingEvents";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<UpcomingEvents />} />
        <Route path="/about" element={<About />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
      {/* <Carousal imageUrl = {Images}/> */}
    </>
  );
}

export default App;
