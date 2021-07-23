const express = require('express');
const app = express();

app.set('views engine', 'ejs');

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Corriendo servidor Express:3000');
})