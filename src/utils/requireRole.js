/** wrapper function to check query or mutation can be access by that user or not */

const requiresRole =
  (roleRequired, resolver) => async (parent, args, context, info) => {
    // console.log(context.user);
    // console.log(roleRequired);
    if (!context.user || !roleRequired.includes(context.user.role)) {
      throw new Error("Not Authorized");
    }
    return await resolver(parent, args, context, info);
  };

module.exports = { requiresRole };
