const { gql } = require("apollo-server");

const CartSchema = gql`
  type Cart @key(fields: "productID") {
    id: ID
    productID: ID
    productName: String
    productDescription: String
    productPrice: Int
    quantity: Int
  }
  extend type Query {
    getCart: [Cart]
    getCartItemByProductId(productID: ID): Cart
  }
  extend type Mutation {
    addToCart(
      productID: ID
      productName: String
      productDescription: String
      productPrice: Int
    ): Cart

    updateCartQuantity(cartID: ID, quantity: Int): Cart

    deleteCart(cartID: ID): Cart
  }
`;
module.exports = { CartSchema };
