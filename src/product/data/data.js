const Product = require("../../../models/Products");

const productData = {
  /* For Queries  */

  getAll: async () => {
    return await Product.find({});
  },

  getByProductId: async (id) => {
    return await Product.findById(id).populate("reviews"); //Need to populate the Product reviews
  },

  getByVendorId: async (vendorId) => {
    // console.log(vendorId);
    return await Product.find({ vendorId });
  },

  getBySearchText: async (searchText) => {
    return await Product.find({ $text: { $search: searchText } });
  },

  /* For Mutations  */

  add: async (
    vendor_Id,
    productName,
    productPrice,
    productDescription,
    productCategory,
    productSubCategory,
    productBrand,
    productImageUrl
  ) => {
    const newProduct = {
      vendor_Id,
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
    vendor_Id,
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
      vendor_Id,
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
