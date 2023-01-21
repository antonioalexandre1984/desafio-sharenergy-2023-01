const bodyParser = require("body-parser")
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

require('./controllers/index')(app);

app.listen((port), () => {
    console.log(`Server is listening on port ${port}.Happy Coding!😃`);
});