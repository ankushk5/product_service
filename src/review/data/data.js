const Products = require("../../../models/Products");
const Review = require("../../../models/Review");

const addReviewData = async (newReview) => {
  const newReviewData = new Review(newReview);
  const newReviewCreated = await newReviewData.save();
  const { productID, _id } = newReviewCreated;

  // adding referernce id  in  product schema
  await Products.findOneAndUpdate(
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

const updateReviewData = async (reviewID, updatedReview) => {
  let updatedReviewData = await Review.findOneAndUpdate(
    { _id: reviewID },
    { $set: { ...updatedReview } },
    { new: true }
  );
  return updatedReviewData;
};

// when  delete review , we need to delete refernce also in product schema
// So we will need to have product id also
const deleteReviewData = async (reviewID, productID) => {
  const result = await Review.findByIdAndDelete(reviewID);
  const productData = await Products.findOne({ _id: productID });
  console.log(productData);

  return result;
};

module.exports = { addReviewData, updateReviewData, deleteReviewData };
