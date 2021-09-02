const Product = require("../../../models/Products");

const productData = {
  /* For Queries  */

  /**
   * We are getting products using pagination
   * @param {Number} limit max No of Products need to return
   * @param {ObjectId} cursor
   * @returns no of required products
   */
  getAll: async (limit, cursor) => {
    // using offset and limit
    // const data = await Product.find({})
    //   .limit(parseInt(limit))
    //   .skip(parseInt(cursor));

    // using cursor
    let productData;

    /** for intial query */
    if (cursor === null) {
      productData = await Product.find({}).limit(parseInt(limit));
    }
    // for next queries when we set the cursor
    else {
      productData = await Product.find({ _id: { $gt: cursor } }).limit(
        parseInt(limit)
      );
    }

    return productData;
  },

  getByProductId: async (id) => {
    return await Product.findById(id).populate("reviews"); //Need to populate the Product reviews
  },

  getByVendorId: async (vendorId) => {
    return await Product.find({ vendorId }).populate("reviews");
  },

  getBySearchText: async (searchText) => {
    return await Product.find({ $text: { $search: searchText } });
  },

  /* For Mutations  */

  add: async (
    vendorId,
    productName,
    productPrice,
    productDescription,
    productCategory,
    productSubCategory,
    productBrand,
    productImageUrl
  ) => {
    const newProduct = {
      vendorId,
      productName,
      productPrice,
      productDescription,
      productCategory,
      productSubCategory,
      productBrand,
      productImageUrl,
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
    productBrand,
    productImageUrl
  ) => {
    const productDetailsToUpdate = {
      productName,
      productDescription,
      productPrice,
      productCategory,
      productSubCategory,
      productBrand,
      productImageUrl,
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
