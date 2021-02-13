let express = require('express');
let app = express();
let port = 3000;

app.get('/', (req,res) => {
  res.send('Hello There');
})

app.listen(port, () => {
  console.log('Listening at 3000');
})


