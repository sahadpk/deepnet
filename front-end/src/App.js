import HomePage from "./Pages/Home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";
import LoginPage from "./Pages/Login/LoginPage";
import SignupPage from "./Pages/Signup/index";
import AddProduct from "./Pages/Add-Product";

function App() {
  return (
    <div className="Main">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/Login" element={<LoginPage />}></Route>
          <Route exact path="/signup" element={<SignupPage />}></Route>
          <Route exact path="/add-product" element={<AddProduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
