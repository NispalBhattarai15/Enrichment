import { useState } from "react";
import reactLogos from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0); // agadi use huney bitikai hook hunxa

  return (
    <>
      <h1 className="text-2xl ">My First React Project</h1>
      <p>This is my first react project</p>
      <img src={reactLogos} className="logo react" alt="React logo" />
    </>
  );
}

export default App;
