const { productData } = require("../data/data");

const productLogic = {
  /* For Queries */

  getAll: () => {
    return productData.getAll();
  },
  getByProductId: (parent, args, context, info) => {
    const productId = args.id;
    return productData.getByProductId(productId);
  },

  getByVendorId: (parent, args, context, info) => {
    const vendorId = args.vendorId;
    return productData.getByVendorId(vendorId);
  },

  getBySearchText: (parent, args, context, info) => {
    return productData.getBySearchText(args.searchText);
  },

  /* For Mutations */

  add: (parent, args, context, info) => {
    const {
      productName,
      productPrice,
      productDescription,
      productCategory,
      productSubCategory,
      productBrand,
      productImageUrl,
    } = args;

    return productData.add(
      productName,
      productPrice,
      productDescription,
      productCategory,
      productSubCategory,
      productBrand,
      productImageUrl
    );
  },

  update: (parent, args, context, info) => {
    const productID = args.productID;

    const {
      productName,
      productDescription,
      productPrice,
      productCategory,
      productSubCategory,
      productBrand,
      productImageUrl,
    } = args;

    return productData.update(
      productID,
      productName,
      productDescription,
      productPrice,
      productCategory,
      productSubCategory,
      productBrand,
      productImageUrl
    );
  },

  delete: (parent, args, context, info) => {
    const productID = args.productID;
    return productData.delete(productID);
  },
};

module.exports = {
  productLogic,
};
