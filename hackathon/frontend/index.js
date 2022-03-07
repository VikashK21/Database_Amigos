
fetch("https://raw.githubusercontent.com/SajjadMazhar/booksAPI/main/books.json").then(res => {return res.json()}).then( data => { 
    const categories = {}
    data.forEach(element => {
        // console.log(element);
        if(categories.hasOwnProperty(element['categories'])) {
            let list = categories[element['categories'][0]];
            let book = {title: element.title, authors: element.authors, thumbnailUrl: element.thumbnailUrl}
            list.push(book)
            categories['categories'] = list
        }
        else {
            let key = element.categories[0]
            categories[key] = [{
                title: element['title'], 
                authors: element['authors'],
                thumbnailUrl: element['thumbnailUrl']
            }]
        }
    });
    console.log(categories['Business'][0]);
    
    var body=document.querySelector('body')
    var sec = document.createElement('section');
    for(let ele in categories) {
        var nav = document.createElement('nav')
        for (let book of categories[ele]) {
            console.log(ele, 'book');
            var div=document.createElement('div')
            var img=document.createElement('img')
            img.setAttribute('src', book.thumbnailUrl)
            img.setAttribute('alt', 'Book Image');
            img.style = 'height: 15rem;'
            div.appendChild(img)
        }
        nav.appendChild(div);
        sec.appendChild(nav)
        
    }
    sec.style = `display: grid;
    grid-template-columns: auto auto;
    `;
    body.append(sec)    

})



