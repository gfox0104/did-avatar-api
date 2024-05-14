const { createClient } = require("@nexrender/api");

const client = createClient({
  host: process.env.NEX_RENDER_HOST_API_KEY,
  secret: process.env.NEX_RENDER_SECRET_KEY,
});

module.exports = client;
