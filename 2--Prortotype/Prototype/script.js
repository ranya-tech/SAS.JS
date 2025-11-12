let livres=[
    {titre: "Candide",auteur: "Voltaire",code: "22",année: "1759",prix: "150",disponible: true},
    {titre: "Le petit prince",auteur: "Antoine de Saint-Exupéry",code: "20",année: "1943",prix: "150",disponible: false},
    {titre: "Clean Code",auteur: "Robert C. Martin",code: "12",année: "2008",prix: "150",disponible: true},
    {titre: "Eloquent JavaScript",auteur: "Marijn Haverbeke",code: "26",année: "2018",prix: "200",disponible: false},
    {titre: "You don't know JS",auteur: "Kyle Simpson",code: "18",année: "2015",prix: "120",disponible: false},
];
console.log(livres);


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
    function save(){
        localStorage.setItem("livres", JSON.stringify(livres));
    
    };
    livres.forEach((book)=>{
        let card = document.createElement("div");
        card.style.border = "15px";
        card.style.border = "black";
        card.style.margin = "15px auto";
        card.style.padding = "20px";
        card.style.border = "solid";
        card.style.width = "50%";
        let titre = document.createElement("h2");
        titre.innerHTML = book.titre;
        let auteur = document.createElement("p");
        auteur.innerHTML = "l'auteur:"+ book.auteur;
        let code = document.createElement("p");
        code.innerHTML = "Code:"+ book.code;
        let annee = document.createElement("p");
        annee.innerHTML = "Annee:"+ book.année;
        let prix = document.createElement("p");
        prix.innerHTML = "Prix:"+ book.prix;
        let disponible = document.createElement("p");
        disponible.innerHTML = "Disponible:"+ book.disponible;
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
  save(); 
};
element();

let foot = document.createElement("footer");
document.body.appendChild(foot);
let total = document.createElement("p");

total.innerHTML = "<strong>Total des livre: </strong>" + livres.length;
let disponi = document.createElement("p");
let count = 0;
livres.forEach((livre)=>{
    if(livre.disponible){
        count++;
    };
});
disponi.innerHTML = "<strong>Livres disponible: </strong>"+ count;
foot.appendChild(total);
foot.appendChild(disponi);

