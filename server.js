const express = require('express');
const cors = require('cors');
const {connectdb} = require('./connect')
const controller = require('./controller');
const app = express();
//middleware
app.use(cors());
app.use(express.json());
connectdb()
    .then(()=>console.log("db connected"))
    .catch((err)=>{console.log(err)});
app.post('/api/shopping',controller.insertstd);
app.get('/api/shopping',controller.getallbooks);
app.get('/api/shopping/:bid',controller.getbook);
app.delete('/api/shopping/:bcat',controller.deletebook);
app.put('/api/shopping/:bid',controller.updatebook);
const port = 1004;
app.listen(port,()=>{
    console.log(`server ready, listening at port ${port}`);
})
