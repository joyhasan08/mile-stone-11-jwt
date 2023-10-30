const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()

//middleware
app.use(express());
app.use(cors());
app.use(express.json());

//Api_intrigretion

app.get("/", (req, res) => {
    res.send("CarD server up and running")
})

//Api_port_set
app.listen(port, () => console.log("Car_D port on"))