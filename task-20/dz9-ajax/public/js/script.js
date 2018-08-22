let getArticle = (articles, i) => {
    let url;
    if  (articles[i].urlToImage !== null)
        url = articles[i].urlToImage;
    else if (articles[i].urlToImage === null)
        url = "public/img/no-image.png";

    let result = $('#news')[0];
    result.innerHTML = `<div>
    <hr><hr>
    <span class="subfield">Author:</span> ${articles[i].author}
    <h3>${articles[i].title}</h3>
    <p class="description">Description: ${articles[i].description}</p>
    <a href="${articles[i].url} class="news-link">${articles[i].title} (читати повністю)</a>
    <br><img src ="${url}">
    <br><span class="subfield">Published at:</span> ${articles[i].publishedAt}  
    </div>`;
    return result.innerHTML;
}

let getAllArticles = (articles) => {
    let arr = [];
    for (let i = 0; i < articles.length; i++) {
        arr[i] = getArticle(articles, i);
        console.log(arr[i]);
    }
    return arr;
}

function mainFunction(category) {
    $.ajax( {
        url: category,
        method: "GET"
    }).done(function(data) {
        let info = 'Status: ' + data.status + '<br>' + 'Total results: ' + data.totalResults;
        $('#general')[0].innerHTML = `<div> <p class="top"> ${info}  </p>
            ${getAllArticles(data.articles)}; 
        </div>`;
    })
}

let asArray = {
    'getBusiness': 'https://newsapi.org/v2/top-headlines?country=ua&category=business&apiKey=baed811cf09b404fa02566c03ae496e0', 
    'getEntertainment': 'https://newsapi.org/v2/top-headlines?country=ua&category=entertainment&apiKey=baed811cf09b404fa02566c03ae496e0', 
    'getHealth': 'https://newsapi.org/v2/top-headlines?country=ua&category=health&apiKey=baed811cf09b404fa02566c03ae496e0', 
    'getScience': 'https://newsapi.org/v2/top-headlines?country=ua&category=science&apiKey=baed811cf09b404fa02566c03ae496e0',
    'getSports': 'https://newsapi.org/v2/top-headlines?country=ua&category=sports&apiKey=baed811cf09b404fa02566c03ae496e0', 
    'getTechnology': 'https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=baed811cf09b404fa02566c03ae496e0', 
};

function getFunctionOnClick(event)
{
    $('.content')[0].innerHTML = `<div id="general">
    <div id="news">Зачекайте поки всі новини завантажаться (5-20 c)...</div>
    </div>`

    let myFunction = event.target.getAttribute('button-attribute');
    let category;
    category = (asArray[myFunction]);
    mainFunction(category);
}

$('.button-category').on('click', getFunctionOnClick);