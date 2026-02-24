const express = require("express");
const cors = require("cors");
require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/menu", require("./routes/menu"));
app.use("/order", require("./routes/order"));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});