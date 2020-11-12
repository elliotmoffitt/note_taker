// Require express
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


// Initialize the app and create port
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static("public"));

app.use("/api", apiRoutes)
app.use("/", htmlRoutes)
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, () => console.log(`Listen on PORT: http://localhost${PORT}`));