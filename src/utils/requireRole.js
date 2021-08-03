/** wrapper function to check query or mutation can be access by that user or not */

const requiresRole =
  (roleRequired, resolver) => async (parent, args, context, info) => {
    console.log(context.user);
    if (!context.user || context.user.role !== roleRequired) {
      throw new Error("Not Authorized");
    }
    return await resolver(parent, args, context, info);
  };

module.exports = { requiresRole };
