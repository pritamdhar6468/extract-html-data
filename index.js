const { convert } = require ('html-to-text')

const express = require('express')
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());


app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render('index',{text:''})
})

app.post('/extracttext',(req,res)=>{
    const html = req.body.html

    const text = convert(html,{
        wordwrap:130
    })
    console.log(text)

res.render('index',{text:text})
})



app.listen(5000,()=>{
    console.log("app is listning on port 5000");
})