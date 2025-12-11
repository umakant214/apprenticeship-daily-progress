import "./App.css";
import CountUp from "react-countup";

function App() {
  return (
    <>
      <div>
        <h1>
          <CountUp end={100} />
        </h1>
        {/* <CountUp
          start={-875.039}
          end={160527.012}
          duration={2.75}
          separator=" "
          decimals={4}
          decimal=","
          prefix="EUR "
          suffix=" left"
          onEnd={() => console.log("Ended! 👏")}
          onStart={() => console.log("Started! 💨")}
        >
          {({ countUpRef, start }) => (
            <div>
              <span ref={countUpRef} />
              <button onClick={start}>Start</button>
            </div>
          )}
        </CountUp> */}
      </div>
    </>
  );
}

export default App;
