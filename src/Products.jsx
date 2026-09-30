import React from "react";
function Products() {
  var [d, setD] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setD([...data.products]);
      });
  }, []);

  return (
    <div id="products">
      <h1>Products</h1>
      <ul>
        {d.map(function (product) {
          return (
            <li>
              <b>{product.title}</b>
              <img onClick={} src={product.thumbnail} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Products;
