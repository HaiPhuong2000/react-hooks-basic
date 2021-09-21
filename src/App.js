import React from "react";
import { useState } from "react";
import Hero from "./components/Hero";
// import HomePage from "./pages/HomePage";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <HomePage /> */}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Hero name="Hai Phuong" />
    </div>
  );
}

export default App;
