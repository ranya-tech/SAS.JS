let livres=[
    {titre: "Candide",auteur: "Voltaire",prix:"150"},
    {titre: "Eloquent JavaScript",auteur: "Marijn Haverbeke",prix:"200"},
    {titre: "Le Petit Prince",auteur: "Antoine de Saint-Exupéry",prix:"90"},
    {titre: "You Don’t Know JS",auteur: "Kyle Simpson",prix:"120"},
];
console.log("Liste de livres :",livres);


console.log("Titre de livres :");
livres.forEach((livre)=>console.log(`${livre.titre}`));

let total=0;
livres.forEach((livre)=> total= total+ +livre.prix);
console.log("Le total est:", total);

let max=100;
for(let livre of livres){
    if(livre.prix>max){
        console.log(livre.titre)
    }
}
livres.push({titre: "La boite à merveille",auteur: "Ahmed sefreoui",prix:"50"});
console.log("nouveaux",livres);
