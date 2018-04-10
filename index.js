const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./server/services/passport");
const PORT = process.env.PORT || 3000;
const keys = require("./server/config/keys");
require("./server/routes/auth-routes")(app);

mongoose.connect(keys.mongoURI);

app.listen(PORT);
