import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleOrder = () => {
    if (!name || !address) {
      alert("Please fill all fields");
      return;
    }

    alert("Order placed");

    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />

      <h2>Order Summary</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          {item.title} × {item.quantity}
        </div>
      ))}

      <br />

      <button onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;