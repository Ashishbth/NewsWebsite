
// async function display(){

//     let url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=57042d008dda44c28dd28a5859812ad8";
//     let response = await fetch(url);
    
//     let commits = await response.json();
    
//     console.log(commits);
// }

let img = document.getElementsByTagName('img');
let list = document.getElementsByTagName('p');

fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=57042d008dda44c28dd28a5859812ad8')
.then(res => res.json())
.then(commits => {
    let post = commits.articles;
     console.log(post);
     console.log(post[0].author);
     console.log(post[0].content);
     console.log(post[0].description);
     console.log(post[0].source);
     console.log(post[0].title);
     console.log(post[0].urlToImage);

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
                        <div class="col">
                            <h4>
                                ${post[num].description}
                            </h4>
                            <p>
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

    
    