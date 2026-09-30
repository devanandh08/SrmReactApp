import React from "react";
function Counter() {
  var [c, setC] = React.useState(0);
  //action
  function inc() {
    setC(c + 1);
  }
  function dec() {
    setC(c - 1);
  }
  React.useEffect(() => {
    console.log("india");
    return () => {
      console.log("goa");
    };
  }, []);
  React.useEffect(() => {
    console.log("tamilnadu");
  });
  //ui
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
      <h1>Counter:{c}</h1>
      <div>
        <button
          onClick={() => {
            inc();
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dec();
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
export default Counter;
