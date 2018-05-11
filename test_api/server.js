const express = require('express');

const app = express();

const port = 5000;

app.get('/api/customers', (rq,res) => {
     const customers = [
         {id: 1, firtsName: 'Abdou karim', lastName: 'Cissokho'}
     ];

     res.json(customers);
});

app.listen(port, () => {
    console.log('Server listening on port' + port);
    
});