const Product = require("../../../models/Products");

const addProduct = (parent, args, context, info) => {
  let newProduct = new Product({
    productName: args.productName,
    productDescription: args.productDescription,
    productPrice: args.productPrice,
  });
  return newProduct.save();
};

const addReview = (parent, args, context, info) => {
  let productid = args.productid;
  let newReview = {
    review: args.review,
    rating: args.rating,
  };
  const options = {
    new: true,
    upsert: true,
  };
  let updatedProduct = Product.findByIdAndUpdate(productid, {
    $push: {
      reviews: newReview,
    },
    options,
  });
  console.log(updatedProduct);
  return updatedProduct;
};

module.exports = { addProduct, addReview };
