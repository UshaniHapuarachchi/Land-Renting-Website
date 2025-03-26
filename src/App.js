import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./component/Home";
import Lands from "./component/Lands";
import LegalInfo from "./component/LegalInfo";
import Register from "./component/Register";
import LandaddPage from './component/landadd';
import AdminPage from "./component/adminpage";
import LandDetails from "./component/landinfo";

function App() {
  return (
    <div className="App">
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Lands" element={<Lands />} />
            <Route path="/LegalInfo" element={<LegalInfo />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/landadd" element={<LandaddPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/LandDetails" element={<LandDetails />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
