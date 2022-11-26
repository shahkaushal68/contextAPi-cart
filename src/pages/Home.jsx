import React, { useContext } from "react";
import FilterProducts from "../componenets/FilterProducts";
import SingleProduct from "../componenets/SingleProduct";
import { cart } from "../context/CartContext";

const Home = () => {
  const {
    state: { products },
  } = useContext(cart);
  return (
    <div className="homepage">
      <div className="filter-products">
        <FilterProducts />
      </div>
      <div className="product-listing">
        {products.map((prod) => (
          <SingleProduct key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;
