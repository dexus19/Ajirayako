const PORT = 4001
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
app.use(express.static('src'));
const cors=require('cors')
app.use(cors())


const url = 'https://www.ajirayako.co.tz/';


app.get('/', function (req, res) {
    res.send('hello world') 
})

app.get('/results', (req, res) => {
    

axios(url)
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles=[]

    $('.nextajax-item', html).each(function(){
  const title = $(this).text()
    const url = $(this).find('a').attr('href')
    articles.push({title, url})
   
})
//console.log(articles) 
res.send(articles)
}).catch(err => console.log(err))
})




app.listen(PORT, () => console.log('server listening on port %s', PORT))
