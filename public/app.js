const express = require('express')
// var redis = require('redis')
// var client = redis.createClient() //creates a new client

const app = express();
const port = 3000;

const items = [ // Mock Data to render a bunch of items
  {name: "Item 1", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 1},
  {name: "Item 2", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 2},
  {name: "Item 3", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 3},
  {name: "Item 4", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 4},
  {name: "Item 5", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 5},
  {name: "Item 6", value: 5, desc: "Lorem-Ipsum", inc: 1, dec: 1, key: 6}
];


// client.on('connect', function() {
//     console.log('connected');
// });


app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/populate', function(req, res){
  // client.set('list', JSON.stringify(items), function(err, response){
  //   console.log("populating list")
  //   // res.set({
  //   //   'Access-Control-Allow-Origin':'http://localhost:3000'
  //   // })
  //   res.status(200).send(response)
  // })
});

app.get('/getList', function(req, res){
  // client.get('list', function(err, response){
  //   console.log("getting list")
  //   res.set({
  //     'Access-Control-Allow-Origin':'http://localhost:3000'
  //   })
  //   res.status(200).send(response)
  // })
});

app.post('/updateList/:list', function(req, res){
  // let list = decodeURIComponent(req.params.list)
  // console.log("list", list);
  // client.set('list', list, function(err, response){
  //   response = "cached"
  //   console.log("setting list...")
  //   res.set({
  //     'Access-Control-Allow-Origin':'http://localhost:3000'
  //   })
  //   res.status(200).send(response)
  // })
});

// app.use('/api', function(req, res){
//   res.send("hai")
// })

app.listen(port, function () {
  console.log('Example app listening on port 3001!')
});
