let img = document.getElementsByTagName('img');
let list = document.getElementsByTagName('p');

fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=57042d008dda44c28dd28a5859812ad8')
.then(res => res.json())
.then(commits => {
    let post = commits.articles;
         function show(){
        let box = document.getElementById('container');
        for(let num in post){
            console.log(post[num].author);
            let container = document.getElementById('container');
            let div = document.createElement('div');
            container.appendChild(div);
            let data = ` <div class="row my-3" id="clm">
            <div class="container text-center">
                    <div class="row">
                        <marquee behavior="" direction="left">
                            <h2 class="display-4">${post[num].title}</h2>
                        </marquee>
                        <div class="col">
                            
                            <img src="${post[num].urlToImage}" alt="urlToImage">
                            <p>${post[num].publishedAt}</p>
                        </div>
                        <div class="col my-4">
                            <h4>
                                ${post[num].description}
                            </h4>
                            <p class="my-3">
                            ${post[num].content}
                            </p>
                            <a href="${post[num].url}" class="btn btn-outline-primary">Read More</a>
                        </div>
                    </div>
            </div>
        </div>`;

        div.innerHTML = data;
        }

     };

     show();
     
    });

    
    