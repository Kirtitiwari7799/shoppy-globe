import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/searchSlice";

function Header() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#1e293b",
        color: "white",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        <h2>🛒 ShoppyGlobe</h2>
      </Link>

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) =>
          dispatch(setSearch(e.target.value))
        }
      />

      <Link
        to="/cart"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Cart ({cartItems.length})
      </Link>
    </header>
  );
}

export default Header;