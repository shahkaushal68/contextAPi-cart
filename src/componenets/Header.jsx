import React, { useContext } from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { cart } from "../context/CartContext";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const { state, dispatch } = useContext(cart);

  const handleRemoveFromCart = (prod) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: prod.id,
    });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="toggle-nav">
          <Navbar.Text className="search">
            <Form.Control type="text" placeholder="Search Products" />
          </Navbar.Text>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaShoppingCart />
                <Badge bg="transparent">{state.cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: 350 }}>
                {state.cart.length > 0 ? (
                  <>
                    {state.cart.map((prod) => (
                      <div className="header-cart" key={prod.id}>
                        <span className="header-cart-image">
                          <img src={prod.image} alt={prod.name} />
                        </span>
                        <span className="header-cart-title">{prod.name}</span>
                        <span className="header-cart-price">
                          ${prod.price.split(".")[0]}
                        </span>
                        <span className="header-cart-delete">
                          <AiFillDelete
                            style={{ color: "red", cursor: "pointer" }}
                            fontSize="20px"
                            onClick={() => handleRemoveFromCart(prod)}
                          />
                        </span>
                      </div>
                    ))}
                    <Link to="/cart">
                      <Button className="header-go-cart">Go To Cart</Button>
                    </Link>
                  </>
                ) : (
                  <div style={{ padding: 10 }}>Cart is Empty</div>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
