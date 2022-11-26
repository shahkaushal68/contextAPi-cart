import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { cart } from "../context/CartContext";
import Ratings from "./Ratings";

const SingleProduct = ({ prod }) => {
  //console.log("prod", prod);
  const { state, dispatch } = useContext(cart);
  //console.log(state);

  const handleAddTOCart = (prod) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: prod,
    });
  };

  const handleRemoveFromCart = (prod) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: prod.id,
    });
  };

  return (
    <div className="single-product">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.image} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Ratings rate={prod.ratings} />
          </Card.Subtitle>
          <Card.Text>
            {prod.fastDelevery ? "Fast Delivery" : "4 Days Delivery"}
          </Card.Text>
          {state.cart.find((p) => p.id === prod.id) ? (
            <Button onClick={() => handleRemoveFromCart(prod)} variant="danger">
              Remove from cart
            </Button>
          ) : (
            <Button
              disabled={prod.inStock[0] === 0}
              onClick={() => handleAddTOCart(prod)}
            >
              {!prod.inStock[0] ? "Out of stock" : "Add To Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
