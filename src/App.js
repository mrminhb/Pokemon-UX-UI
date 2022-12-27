import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Party from "./pages/Party/Party";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/party" element={<Party />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
