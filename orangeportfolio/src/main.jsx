import React from "react";
import ReactDOM from "react-dom/client";
import ButtonLargerM from "./components/ButtonLargM.jsx";
import App from "./routes/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ height: "100vh" }}>
      <App />
    </div>
  </React.StrictMode>
);
