import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import NotFound from "./Components/Pages/NotFound";
import Registration from "./Components/Pages/Registration";
import AddUser from "./Components/Users/AddUser";
import EditUser from "./Components/Users/EditUser";
import User from "./Components/Users/User";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Users/Add" element={<AddUser />} />
          <Route exact path="/Users/Edit/:id" element={<EditUser />} />
          <Route exact path="/Users/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
