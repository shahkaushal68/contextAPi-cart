import React, { useContext } from "react";
import { Col, Form, ListGroup, Row, Table } from "react-bootstrap";
import Ratings from "../componenets/Ratings";
import { cart } from "../context/CartContext";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const { state, dispatch } = useContext(cart);

  const handleRemoveFromCart = (prod) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: prod.id,
    });
  };

  console.log("cart", state.cart);

  return (
    <div className="cartPage">
      <div className="product-listing">
        <div className="cart-items-listitng">
          <ListGroup>
            {state.cart.map((prod) => (
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col md={2}>
                    <img
                      className="cartpage-image"
                      src={prod.image}
                      alt="title"
                    />
                  </Col>
                  <Col md={2}>
                    <p className="cartpage-title">{prod.name}</p>
                  </Col>
                  <Col md={2}>
                    <p className="cartpage-rating">
                      <Ratings rate={prod.ratings} />
                    </p>
                  </Col>
                  <Col md={2}>
                    <p className="cartpage-price">
                      ${prod.price.split(".")[0]}
                    </p>
                  </Col>
                  <Col md={2}>
                    <p className="cartpage-selection">
                      <Form.Select
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_QTY",
                            payload: {
                              id: prod.id,
                              qty: e.target.value,
                            },
                          })
                        }
                      >
                        <option>Select quantity</option>
                        {[...Array(prod.inStock[0]).keys()].map((x, i) => (
                          <option key={i} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Select>
                    </p>
                  </Col>
                  <Col md={2}>
                    <p className="cartpage-delete">
                      <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        fontSize="20px"
                        onClick={() => handleRemoveFromCart(prod)}
                      />
                    </p>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
      <div className="filter-products cart-sidebar">
        <div className="total-title">Cart total section</div>
        {state.cart.length > 0 && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {state.cart.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price * item.qty}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <div className="cart-total">
          <b>Total:</b> {state.cart.length > 0 ? 500 : 0}
        </div>
      </div>
    </div>
  );
};

export default Cart;
