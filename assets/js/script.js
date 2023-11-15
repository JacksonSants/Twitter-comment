const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector('.main-list');

function capturarInformacao(event) {
    event.preventDefault();//Atraves do event a informação não se perde
    const tweetText = textarea.value;
    criarTweet(tweetText);
}

tweetar.addEventListener('click', capturarInformacao);
function criarTweet(tweetText) {
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

 // Criar tweeter
    const tweet = {
        nome: "Daniel",
        foto: "./assets/img/ProfilePic.png",
        usuario: "@danielekenzie",
        texto: tweetText,
        tempo: `${hora}h: ${min}min: ${seg}s`
    }
    listarTweet(tweet);
}

function listarTweet(tweet) {

    const {nome, foto, usuario, texto, tempo} = tweet
    //Criando elementos ara listar
    let li = document.createElement('li');

    li.classList.add('main-list-item');
    let img = document.createElement('img');
    img.src = foto;
    img.classList.add('profile');

    let div = document.createElement('div');
    div.classList.add('information');

    let h2 = document.createElement('h2');
    h2.innerText = nome;

    let p = document.createElement('p');
    p.innerText = texto;

    let span = document.createElement('span');
    span.innerText = ` ${usuario} - ${tempo}`;
    
    //Adicionar elementos dentro de uma tag
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div);

    feed.appendChild(li);
    textarea.value  = "";
}
