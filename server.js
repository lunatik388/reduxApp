'use strict'
var express = require('express');
var app = express();
var path = require('path');
// app.get('*', function (req, res) {
//     res.sendFile(path.resolve(__dirname,
//         'public', 'index.html'))
// })
// DEFINES A FOLDER FOR THE STATIC FILES
app.use(express.static('public'));
// DEFINES THE MAIN ENTRY POINT
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});
app.post('*', function (req, res) {
    // var book = req.body;
    // Books.create(book, function (err, books) {
    //   if (err) {
    //     throw err;
    //   }
    res.json(req.body);
    // })
  });
app.listen(3000, function () {
    console.log('App web-server listening on port 3000');
});