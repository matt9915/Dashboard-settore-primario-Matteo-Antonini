import React from "react";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("/immagine-agricola.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "16px",
        overflowX: "hidden"
      }}
    >
      <Dashboard />
    </div>
  );
};

export default App;