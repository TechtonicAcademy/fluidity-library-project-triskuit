const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;
const { sequelize } = require('./models');

const corsOptions = {
  origin: 'http://localhost:1234',
};

// sets up morgan to log requests/status codes
app.use(logger('dev'));

// set up cors permisions
app.use(cors(corsOptions));

// sets up Express to receive/parse JSON data in requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/dist'));
} else {
  app.use(express.static('public'));
}

app.get('*', (req, res) => {
  res.send(`You've accessed the path '${req.url}'!`);
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server now listening on http://localhost:${PORT}!`);
  });
});
