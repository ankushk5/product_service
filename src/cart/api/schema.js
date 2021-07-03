const { gql } = require("apollo-server");

const CartSchema = gql`
  type Cart {
    id: ID
    productName: String
    productDescription: String
    productPrice: Int
    quantity: Int
  }
  extend type Query {
    getCart: [Cart]
  }
  extend type Mutation {
    addToCart(
      productName: String
      productDescription: String
      productPrice: Int
    ): Cart

    updateCartQuantity(cartID: ID, quantity: Int): Cart

    deleteCart(cartID: ID): Cart
  }
`;
module.exports = { CartSchema };
