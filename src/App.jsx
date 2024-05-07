import { useState } from "react";
import "@src/App.css";
import Hero from "./HeroSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
    </>
  );
}

export default App;
