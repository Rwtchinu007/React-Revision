const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/users',(req,res)=>{
    res.json([
        {id:1,name:'John Doe'},
        {id:2,name:'Jane Doe'},
        {id:3,name:'Jim Beam'},
        {id:4,name:'Jack Daniels'},
        {id:5,name:'Jack Reacher'}
    ] )
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})