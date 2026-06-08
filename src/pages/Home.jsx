import { useSelector } from "react-redux";

import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

function Home() {
  const { products, loading } = useProducts();

  const search = useSelector(
    (state) => state.search
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>ShoppyGlobe</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;