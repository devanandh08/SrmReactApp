import Counter from "./counter.jsx";

function App() {
  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px" }}>
      <h1>App Component Here</h1>
      <Counter a={10} b={1}></Counter>
    </div>
  );
}

export default App;