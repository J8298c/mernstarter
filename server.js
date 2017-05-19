const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const workout = {
  name: 'Superman',
  key: 'someotherkey'
}

app.get('/', (req, res)=>{
    res.json(workout)
})


app.listen(port)
console.log(`app is now listening on port ${port}`);

