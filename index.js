const cookieSession = require("cookie-session");
const passport = require("passport");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./server/models/User");
require("./server/services/passport");
const PORT = process.env.PORT || 3000;
const keys = require("./server/config/keys");
require("./server/routes/auth-routes")(app);

mongoose.connect(keys.mongoURI);
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.listen(PORT);
