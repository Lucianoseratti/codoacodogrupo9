const express = require('express');
const path = require ("path")
const app = express();
const port = 3000;
const mainRoutes = require("./src/routes/mainRoutes.js");
const shopRoutes = require("./src/routes/shopRoutes.js");
const adminRoutes = require("./src/routes/adminRoutes.js");
const authRoutes = require("./src/routes/authRoutes.js");
const methodOverride = require('method-override');



app.set ("views",path.join(__dirname,"src/views"))
app.set ("view engine", "ejs")
app.use (express.static(path.join(__dirname,"public")))

app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'));
app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);




app.listen(port, () => {
    console.log(`Servidor OK en puerto:${port}`);
});