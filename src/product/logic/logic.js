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

  getByUserId: (parent, args, context, info) => {
    const userId = args.userId;
    return productData.getByUserId(userId);
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
    } = args;

    return productData.add(
      productName,
      productPrice,
      productDescription,
      productCategory,
      productSubCategory,
      productBrand
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
    } = args;

    return productData.update(
      productID,
      productName,
      productDescription,
      productPrice,
      productCategory,
      productSubCategory,
      productBrand
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
