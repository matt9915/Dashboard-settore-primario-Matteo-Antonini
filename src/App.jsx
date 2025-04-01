import React from "react";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("https://images.unsplash.com/photo-1600613253294-0191dbdf96a6")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "48px"
      }}
    >
      <Dashboard />
    </div>
  );
};

export default App;