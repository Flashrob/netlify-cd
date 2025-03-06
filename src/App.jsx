import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World!</h1>
      <p>Let's test the Netlify CD</p>
      <h2>This is a new change after I have already deployed</h2>
    </>
  );
}

export default App;
