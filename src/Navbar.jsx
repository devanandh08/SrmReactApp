import { Link } from "react-router-dom";

function Navbar() {
  var logo =
    "https://img.magnific.com/free-vector/colorful-store-icon-abstract-logo-design_474888-3415.jpg?semt=ais_hybrid&w=740&q=80";

  return (
    <div id="d2">
      <img src={logo} alt="" />
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
