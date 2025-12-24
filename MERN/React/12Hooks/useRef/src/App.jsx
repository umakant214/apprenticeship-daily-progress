import { useEffect, useId, useRef, useState } from "react";

function App() {
  let id = useId();
  const newId = useId();
  const headingRef = useRef(null);
  const inputRef = useRef(null);
  const [data, setData] = useState("");
  useEffect(() => {
    if (inputRef) {
      setData(inputRef.current?.value);
    }
    if (headingRef) {
      headingRef.current.style.color = "red";
      headingRef.current.style.backgroundColor = "yellow";
    }
  }, [inputRef, headingRef]);

  // useEffect(() => {
  //   if (headingRef) {
  //     headingRef.current.style.color = "red";
  //     headingRef.current.style.backgroundColor = "pink";
  //   }
  // }, [headingRef]);
  return (
    <>
      <p>{id}</p>
      <p>{newId}</p>
      <h1 ref={headingRef}>Hello</h1>
      <input ref={inputRef} type="text" value="100000000" />
      <h1>{data}</h1>
    </>
  );
}

export default App;
