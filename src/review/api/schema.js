const { gql } = require("apollo-server");

const ReviewSchema = gql`
  type Review {
    id: ID
    productID: ID
    customerId: String
    review: String
    rating: Int
  }

  extend type Query {
    getAllReviewByProductID(productID: ID): [Review] #no use till now
    getReviewsByCustomerId: [Review]
  }
  extend type Mutation {
    addReview(productID: ID, review: String, rating: Int): Review
    updateReview(id: ID, review: String, rating: Int): Review
    deleteReview(id: ID, productID: ID): Review
  }
`;
module.exports = { ReviewSchema };
