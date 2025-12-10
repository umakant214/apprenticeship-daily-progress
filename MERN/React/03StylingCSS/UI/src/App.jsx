import "./App.css";
import img from "./assets/react.svg";
function App() {
  return (
    <>
      <h1 style={{ color: "red", background: "green" }}>
        Welcome to React Js UI Styling
      </h1>
      <p style={{ backgroundColor: "purple" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        minima fugit eligendi odio adipisci ipsa? Iste nihil blanditiis nobis
        aut! Laudantium rem nesciunt sed, minima iusto et similique tempore?
        Nemo?
      </p>

      <h2 className="align h1">jksdkw</h2>
      <img src={img} alt="" />

      <img src="/vite.svg" alt="" />
    </>
  );
}

export default App;
