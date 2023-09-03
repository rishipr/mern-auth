require("dotenv-safe").config();
module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.TOKEN_SECRET,
};
