const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())



app.post('/api/dish/create', (req, res) => {
    res.json({
        "success": 1,
        "message": "Dish added successfully.",
    });
});

//add other things

const port = process.env.PORT || 5001;
app.listen(port);

console.log('App is listening on port ' + port);