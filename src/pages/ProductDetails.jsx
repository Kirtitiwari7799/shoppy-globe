import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const dispatch = useDispatch();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Product added to cart!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        width="250"
      />

      <p>{product.description}</p>

      <h3>Price: ${product.price}</h3>

      <button
        onClick={handleAddToCart}
        style={{
          padding: "10px 20px",
          margin: "10px 0",
          cursor: "pointer",
        }}
      >
        Add To Cart
      </button>

      <h3>Rating: {product.rating}</h3>

      <h3>Stock: {product.stock}</h3>
    </div>
  );
}

export default ProductDetails;