const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

/**
*  Import DB Queries for Categories
**/
const Categories = require('./db/categories');

const app = express();

/**
*  Allow cross origin requests
**/
app.use(cors());


/**
*  GET - List of categories
**/
app.get('/api/categories', async (req,res) => {

    try {
        let categories = await Categories.all();
        res.json(categories);
    } catch(e) {
        console.log(e)
        res.sendStatus(500);
    }

});

/**
*  GET - All questions and choices for a particular category
**/
app.get('/api/categories/:id/questions', async (req,res) => {

    let category_id = parseInt(req.params.id);
    try {
        let questions = await Categories.questions(category_id);
        res.json(questions);
    } catch(e) {
        console.log(e)
        res.sendStatus(500);
    }

});

app.use(express.static('public'));

/**
* Forward to public build for any other routes
**/
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'public','index.html'));
})


/**
* Get port from environment and store in Express.
*/
const port = process.env.PORT || 5000;
app.set('port', port);


app.listen(port, () => console.log(`Server listening on port: ${port}`));



