import Navbar from "./components/navbar/navbar";
import Schedule from "./pages/Schedule";
import Teams from "./pages/Teams";
import Standings from "./pages/Standings";
import News from "./pages/News";
import Youth from "./pages/Youth";
import Offseason from "./pages/Offseason";
import History from "./pages/History";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/Teams/Varsity" element={<Teams team="Varsity" />} />
          <Route
            path="/Teams/Junior Varsity I"
            element={<Teams team="Junior Varsity I" />}
          />
          <Route
            path="/Teams/Junior Varsity II"
            element={<Teams team="Junior Varsity II" />}
          />
          <Route path="/Standings" element={<Standings />} />
          <Route path="/News" element={<News />} />
          <Route path="/Youth" element={<Youth />} />
          <Route path="/Offseason" element={<Offseason />} />
          <Route path="/History" element={<History />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
