import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import NavBar from "./components/NavBar.jsx";
import ButtonLargerM from "./components/ButtonLargM.jsx";
import FormRegisterM from "./components/FormRegisterM.jsx";
import RegisterM from "./components/RegisterM.jsx";
import FormLoginM from "./components/FormLoginM.jsx";
import AddProject from "./Modal.jsx";
import LoginM from "./components/LoginM.jsx";
import AppBar from "./components/AppBarM.jsx";
import HomePageM from "./components/HomePageM.jsx";
import ProjectListM from "./components/ProjectListM.jsx";
import App from "./routes/App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ height: "100vh" }}>
      {/* <AddProject /> */}
      <App/> 
      {/* <RegisterM /> */}
    </div>
  </React.StrictMode>
);
