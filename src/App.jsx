import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const ProductDetails = lazy(() =>
  import("./pages/ProductDetails")
);
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() =>
  import("./pages/Checkout")
);
const NotFound = lazy(() =>
  import("./pages/NotFound")
);

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;