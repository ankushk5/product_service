const { gql } = require("apollo-server");

const CartSchema = gql`
  type Cart {
    id: ID
    customerId: String
    productData: Product
    quantity: Int
  }

  extend type Query {
    getCart: [Cart]
    getCartByCustomerId: [Cart] #customerId comes from context
    getCartByProductId(productID: ID): [Cart]
  }

  extend type Mutation {
    addToCart(productID: ID): Cart #customerId comes from context
    updateCartQuantity(cartID: ID, quantity: Int): Cart
    deleteCart(cartID: ID): Cart
  }
`;
module.exports = { CartSchema };
