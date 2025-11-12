let livres =JSON.parse(localStorage.getItem("livres")) || [];

let form= document.getElementById("form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    let addbook = {
        code :document.getElementById("code").value,
        titre :document.getElementById("titre").value,
        auteur :document.getElementById("auteur").value,
        prix :document.getElementById("prix").value,
        annee :document.getElementById("annee").value,
        disponible :document.getElementById("disponible").value ==="true",
    };

    bibliotheque.push(addbook);


    localStorage.setItem("livres", JSON.stringify(livres));
    alert("book added successfully");
});