const express = require('express');

const CARD= require('./db/cardSchema');

const cors = require('cors');
const { connect } = require('./db/connect');

connect;

const app = express();


app.use(express.json());

app.use(cors())



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/new', async (req, res) => {
    const body = req.body;
    await CARD.create(body).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
    return res.send(body);
});

app.get('/all', async (req, res) => {


    await CARD.find().then((data)=>{
        console.log(data);
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    })
});


app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await CARD.findByIdAndDelete(id).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
    return res.send('Deleted');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}   );