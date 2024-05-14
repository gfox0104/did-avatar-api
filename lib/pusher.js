const PusherServer = require("pusher");

const pusherInstance = new PusherServer({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: process.env.PUSHER_APP_USE_TLS,
});

module.exports = pusherInstance;
