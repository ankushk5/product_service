const Product = require("../../../models/Products");

const productData = {
  /* For Queries  */

  getAll: async () => {
    return await Product.find({});
  },

  getByProductId: async (id) => {
    return await Product.findById(id).populate("reviews"); //Need to populate the Product reviews
  },

  getByUserId: async (userId) => {
    console.log(userId);
    return await Product.findById(userId).populate("reviews");
  },

  getBySearchText: async (searchText) => {
    return await Product.find({ $text: { $search: searchText } });
  },

  /* For Mutations  */

  add: async (
    productName,
    productPrice,
    productDescription,
    productCategory,
    productSubCategory,
    productBrand
  ) => {
    const newProduct = {
      productName,
      productPrice,
      productDescription,
      productCategory,
      productSubCategory,
      productBrand,
    };

    const productToAdd = new Product(newProduct);

    return await productToAdd.save();
  },

  update: async (
    productID,
    productName,
    productDescription,
    productPrice,
    productCategory,
    productSubCategory,
    productBrand
  ) => {
    const productDetailsToUpdate = {
      productName,
      productDescription,
      productPrice,
      productCategory,
      productSubCategory,
      productBrand,
    };
    let updatedProductData = await Product.findOneAndUpdate(
      { _id: productID },
      { $set: { ...productDetailsToUpdate } },
      {
        new: true,
      }
    );
    return await updatedProductData.save();
  },

  delete: async (productID) => {
    try {
      const result = await Product.findByIdAndDelete(productID);
      return result;
    } catch (error) {
      return ` Error ${error} `;
    }
  },
};

module.exports = {
  productData,
};
