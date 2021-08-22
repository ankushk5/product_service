const { addProductData } = require("./data");

test("create product", () => {
  test("it should not create a product with empty arguments", () => {
    product = addProductData.create();
    expect(product === undefined);
  });
  test("it should create a product with valid arguments", () => {
    product = addProductData.create((productName = "ankush"));
    expect(product === { key: "ca" });
  });
});
