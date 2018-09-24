$.ajax({
  url:
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=afb5a63da78644e5bdbc4b0a1cf0d897",
  method: "GET",
  error: function() {
    console.log("Error");
  },
  success: function(data) {
    processData(data);
  }
});

function processData(data) {
  for (let i = 0; i < 9; i++) {
    let author = data.articles[i].author;
    let title = data.articles[i].title;
    let description = data.articles[i].description;
    let artUrl = data.articles[i].url;
    let urlToImage = data.articles[i].urlToImage;
    let $author = $(`<div class="author">Author: ${author} </div >`);
    let $title = $(`<a href=${artUrl}><div class="title">${title}</div ></a>`);
    let $description = $(`<div class="description">${description}</div>`);
    let $img = $(`<div class="img" style="background-image: url(${urlToImage}); width: 370px; height: 200px; background-size: cover; background-repeat: no-repeat;"></div>`)
    let newsBox = $('<div class="col-4"></div');
    $('.news-items .row').append(newsBox);
    newsBox.append($img, $title, $description, $author);
  }
};

$('#search').click(function() {
  debugger;
  let target = $('.input')[0].value;
  $('.news-items .row').empty();
  $.ajax ({
    url:
    `https://newsapi.org/v2/everything?q=${target}&apiKey=afb5a63da78644e5bdbc4b0a1cf0d897`,
  method: "GET",
  error: function() {
    console.log("Error");
  },
  success: function(data) {
    processData(data);
  }
  });
});
