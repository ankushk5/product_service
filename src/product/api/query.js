const { requiresRole } = require("../../utils/requireRole");
const { productLogic } = require("../logic/logic");

const productQueryResolvers = {
  /** gettting all products from the product Collection
   * it will be used in showing products to the EndUser and admin
   */
  getAll: () => {
    return productLogic.getAll();
  },

  /**
   * This will be used to show single product in details
   * @param {object} args contains productID
   * @param {object} context
   * @returns object product single object
   */
  getByProductId: (parent, args, context, info) => {
    return productLogic.getByProductId(parent, args, context, info);
  },

  /* This will be used to show products for individual vendor */
  getByVendorId: (parent, args, context, info) => {
    return productLogic.getByVendorId(parent, args, context, info);
  },

  /**
   * This will search the product from Product Name , productCategory and productSubCategory
   * Partial matching won't work.
   * If any single word from searchText matches any Single Word in Product model then there
   * will an match
   */
  getBySearchText: (parent, args, context, info) => {
    return productLogic.getBySearchText(parent, args, context, info);
  },
};

/** destructuring Resolver functions */
const { getAll, getByProductId, getByVendorId, getBySearchText } =
  productQueryResolvers;

const ProductQuery = {
  getAllProducts: getAll, // admin endpoint + public endpoint
  getProductByProductId: getByProductId, // public endpoint
  getProductsByVendorId: requiresRole("vendor", getByVendorId), // vendor endpoint
  getProductsBySearchText: getBySearchText, // public endpoint
};
module.exports = { ProductQuery };
