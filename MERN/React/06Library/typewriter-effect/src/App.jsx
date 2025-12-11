import "./App.css";

import Typewriter from "typewriter-effect";
function App() {
  return (
    <>
      <h1>
        <Typewriter
          options={{
            strings: ["Hello I'm Umakant Yadav"],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </h1>
    </>
  );
}

export default App;
