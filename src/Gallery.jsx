import React from "react";
function Gallery() {
  var [ind, setInd] = React.useState(0);
  var heroines = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtozESnAaNklkNYnlRFx5kX-Cs6NslOxK0TGccwFjS_INmHOuY6AYh0t8NsghkpxHWiWI-gNC_nAmRlKD3iKqAF49kwdI-17dn5HucoVo&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4i0HpCkUq8UVqn2GwU7f_M1xvDx1beSvm8Ej3TYwk89dIbVNVqrwgQ1aPOX2fxTqBe4uSj4plHbECFUzv2WVI5D1m-nBLSH7gz2GeYqU&s=10",
    "https://static.toiimg.com/thumb/msid-131273529,width-1280,height-720,imgsize-91662,resizemode-4,overlay-toi_sw,pt-32,y_pad-600/photo.jpg",
  ];
  function nextImg() {
    setInd(ind + 1);
  }
  function prevImg() {
    setInd(ind - 1);
  }
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "10px" }}>
      <img src={heroines[ind]} alt="" height="200px" />
      <br />
      <button
        onClick={() => {
          prevImg();
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          nextImg();
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Gallery;
