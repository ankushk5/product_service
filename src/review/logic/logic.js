const { addReviewData } = require("../data/data");

const addReviewLogic = (parent, args, context, info) => {
  const newReview = {
    productID: args.productID,
    review: args.review,
    rating: args.rating,
  };
  return addReviewData(newReview);
};

module.exports = { addReviewLogic };

// const addReviewData = async (productid, newReview) => {
//   let updatedProduct = await Product.findOneAndUpdate(
//     { _id: productid },
//     {
//       $push: {
//         reviews: newReview,
//       },
//     },
//     {
//       new: true,
//     }
//   );
//   return await updatedProduct.save();
// };
