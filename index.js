const express = require('express');
const app = express();
const PORT = 3000;
const userRouter = require('./routes/users.route')
const productsRouter = require('./routes/products.route')

app.use(express.urlencoded({extended : true}))
app.use(userRouter);
app.use(productsRouter);

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})