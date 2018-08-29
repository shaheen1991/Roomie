const express = require("express");
const bodyparser = require('body-parser');
const morgan = require('morgan');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);

require('./passport')(app);

app.use(require('./routes'));

app.use((error, req, res, next) => {
  console.error(error);
  res.json({
    error
  })
});

// configure mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/roomie");
require('./middleware/mongoose')()
  .then(() => {
    app.listen(PORT, () => console.log(`Server up and running on ${PORT}.`));
  })
  .catch(err => {
    console.error('Unable to connect to mongo.')
    console.error(err);
  });
