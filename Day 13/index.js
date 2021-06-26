console.log("HKRK");
maincont = document.getElementById('maincont');
//7a6e8f2e394db5b8a1c1f98625e4867e
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gnews.io/api/v4/search?q=example&token=7a6e8f2e394db5b8a1c1f98625e4867e', true);
xhr.onload = function(){
    var news = JSON.parse(this.responseText);
    console.log(news);
    var articles = news.articles;
    for(i in news.articles){
        title = articles[i].title;
        description = articles[i].description;
        content = articles[i].content;
        linke = articles[i].url;
        imge = articles[i].image;
        maincont.innerHTML += `<div class="container my-3"><p>
        <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" style = "width:70%; text-align:justify;" aria-expanded="false" aria-controls="collapseExample">
            ${title}
        </button>
    </p>
    <div class="collapse" id="collapse${i}">
        <div class="card card-body">
            ${description}
            <hr>
            ${content}
            <hr>
            <a href = "${linke}" target="_blank">Read more</a>
        </div>
    </div>
    </div>`
    }
}
xhr.send();