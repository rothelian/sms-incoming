const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Use body-parser to parse incoming form data
app.use(bodyParser.urlencoded({ extended: false }));

// Define a route for incoming SMS messages
app.post('/sms', (req, res) => {
  const fromNumber = req.body.From;
  const body = req.body.Body;

  // Log the incoming message to the console
  console.log(`Message from ${fromNumber}: ${body}`);

  // Respond with an empty 200 OK response
  res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
