const {
  addProductLogic,
  updateProductLogic,
  deleteProductLogic,
  uploadFileLogic,
} = require("../logic/logic");

const addProduct = async (parent, args, context, info) => {
  return addProductLogic(parent, args, context, info);
};

const updateProduct = async (parent, args, context, info) => {
  return updateProductLogic(parent, args, context, info);
};

const deleteProduct = async (parent, args, context, info) => {
  return deleteProductLogic(parent, args, context, info);
};

const uploadFile = async (parent, { file }, context, info) => {
  const { createReadStream, filename, mimetype, encoding } = await file;

  // await new Promise((res) => createReadStream().on("close", res));

  return { filename, mimetype, encoding };
};

const ProductMutation = {
  addProduct,
  updateProduct,
  deleteProduct,
  uploadFile: uploadFile,
};

module.exports = { ProductMutation };
