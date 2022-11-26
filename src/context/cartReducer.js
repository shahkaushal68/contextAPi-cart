import { faker } from "@faker-js/faker";
faker.seed(99);

const products = [...Array(20)].map(() => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  image: faker.image.image(),
  inStock: faker.helpers.arrayElements([0, 3, 5, 7, 9], 1),
  fastDelevery: faker.datatype.boolean(),
  ratings: faker.helpers.arrayElements([1, 2, 3, 4, 5], 1),
}));
//console.log("products", products);

export const initialState = {
  products: products,
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload),
      };
    case "CHANGE_QTY": {
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
