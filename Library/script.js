let library = [
    {code:26, title:"Twisted Love", author:"Ana Huang", year:"2021", price:122, available:true},
    {code:25, title:"Twisted Games", author:"Ana Huang", year:"2021", price:199, available:true},
    {code:28, title:"Twisted Hate", author:"Ana Huang", year:"2022", price:195, available:true},
    {code:22, title:"Twisted Lies", author:"Ana Huang", year:"2022", price:200, available:true},
    {code:19, title:"The Fine Print", author:"Lauren Asher", year:"2021", price:130, available:true},
    {code:11, title:"Ugly Love", author:"Colleen Hoover", year:"2014", price:108, available:false},
    {code:66, title:"Things We Never Got Over", author:"Lucy Score", year:"2022", price:250, available:true},
    {code:78, title:"Icebreaker", author:"Hannah Grace", year:"2022", price:220, available:true},
    {code:98, title:"A Court of Thorns and Roses", author:"Sarah J. Maas", year:"2015", price:130, available:true},
    
];
console.log(library);


let header = document.createElement("div");
let input= document.createElement("input");
input.placeholder = "Entrer le titre";
let btn = document.createElement("button");
btn.innerText = "Search";
header.appendChild(input);
header.appendChild(btn);
document.body.appendChild(header);

let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign ="center";
function element(){
    
    library.forEach((book)=>{
        let card = document.createElement("div");
        card.style.border = "15px";
        card.style.border = "black";
        card.style.margin = "15px auto";
        card.style.padding = "20px";
        card.style.border = "solid";
        card.style.width = "50%";
        let titre = document.createElement("h2");
        titre.innerHTML = book.title;
        let auteur = document.createElement("p");
        auteur.innerHTML = "l'auteur:"+ book.author;
        let code = document.createElement("p");
        code.innerHTML = "Code:"+ book.code;
        let annee = document.createElement("p");
        annee.innerHTML = "Annee:"+ book.year;
        let prix = document.createElement("p");
        prix.innerHTML = "Prix:"+ book.price;
        let disponible = document.createElement("p");
        disponible.innerHTML = "Disponible"+ book.available;
        let button = document.createElement("button");
        button.className ="btn";
        button.innerHTML = "Supprimer";

        card.appendChild(titre);
        card.appendChild(auteur);
        card.appendChild(code);
        card.appendChild(annee);
        card.appendChild(prix);
        card.appendChild(disponible);
        card.appendChild(button);
        container.appendChild(card);
    });
    
    let supprimer = document.querySelectorAll(".btn");
    supprimer.forEach((button)=>{
        button.addEventListener("click",function(){
            button.parentElement.remove();
        });
    });
};
element();

let foot = document.createElement("footer");
document.body.appendChild(foot);
let total = document.createElement("p");

total.innerHTML = "<strong>Total des livre: </strong>" + library.length;
let disponi = document.createElement("p");
let count = 0;
library.forEach((livre)=>{
    if(livre.available){
        count++;
    };
});
disponi.innerHTML = "<strong>Livres disponible: </strong>"+ count;
foot.appendChild(total);
foot.appendChild(disponi);


