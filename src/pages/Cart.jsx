import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <h3>Your cart is empty.</h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>{item.title}</h3>

              <p>Price: ${item.price}</p>

              <p>
                Quantity: {item.quantity}
              </p>

              <button
                onClick={() =>
                  dispatch(
                    decreaseQuantity(item.id)
                  )
                }
              >
                -
              </button>

              <button
                onClick={() =>
                  dispatch(
                    increaseQuantity(item.id)
                  )
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(
                    removeFromCart(item.id)
                  )
                }
              >
                Remove
              </button>
            </div>
          ))}

          <a href="/checkout">
            <button>
              Proceed to Checkout
            </button>
          </a>
        </>
      )}
    </div>
  );
}

export default Cart;