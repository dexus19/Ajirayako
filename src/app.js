const feed = document.querySelector('#feed')
fetch('http://localhost:4001/results')
.then(response =>{return response.json()})
.then(data => {
    data.forEach(article => {
        const articleItem = '<div><h3>' + article.title + '</h3><p>' + article.url + '</p></div>'  
        feed.insertAdjacentHTML("beforeend",articleItem)


  
    })
})
.catch(err => console.log(err))


