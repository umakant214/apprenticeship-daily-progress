import "./App.css";

function App() {
  // const demo = () => {
  //   alert("okkk");
  // };
  const demo = (a) => {
    alert(a);
  };
  return (
    <>
      {/* <button onClick={demo}>click Me</button> */}
      <button onClick={() => demo(2)}>click Me</button>
    </>
  );
}

export default App;
