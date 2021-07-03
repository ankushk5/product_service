const Products = require("../../../models/Products");
const Review = require("../../../models/Review");

const addReviewData = async (newReview) => {
  const newReviewData = new Review(newReview);
  const newReviewCreated = await newReviewData.save();
  const { productID, _id } = newReviewCreated;

  // adding referernce id  in  product schema
  let updatedProduct = await Products.findOneAndUpdate(
    { _id: productID },
    {
      $push: {
        reviews: _id,
      },
    },
    {
      new: true,
    }
  );
  return newReviewCreated;
};
module.exports = { addReviewData };

// when edit or delete review , we need to delete refernce also in product schema
