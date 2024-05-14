const sdk = require("@api/d-id");

const main = async ({ token }) => {
  await sdk.auth(token);
  return sdk;
};

module.exports = main;
