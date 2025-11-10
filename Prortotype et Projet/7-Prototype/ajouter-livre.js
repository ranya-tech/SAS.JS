let titre = document.createElement("h1");
titre.innerText = "Ajouter- livre";
document.body.appendChild(titre);
titre.style.textAlign ="center";

let container = document.createElement("div");
document.body.appendChild(container);
function element(){

    let form = document.createElement("form");
    form.style.display = "flex";
    form.style.border = "15px";
    form.style.border = "solid";
    form.style.border = "black";
    form.style.padding = "20px";
    form.style.margin = "15px auto";
    form.style.display = "flex";
    form.style.flexDirection = "column";
    form.style.width = "50%";
    form.style.gap = "10px";
    let title = document.createElement("label");
    title.innerHTML = "Titre";
    let input = document.createElement("input");
    let author = document.createElement("label");
    author.innerHTML = "Auteur";
    let auteur = document.createElement("input");
    let code = document.createElement("label");
    code.innerHTML = "Code";
    let num = document.createElement("input");
    let prix = document.createElement("label");
    prix.innerHTML = "Prix";
    let price = document.createElement("input");
    let annee = document.createElement("label");
    annee.innerHTML = "Annee";
    let year = document.createElement("input");
    let disponible = document.createElement("label");
    disponible.innerHTML = "Diponible";
    let avai = document.createElement("label");
    avai.innerText = "True";
    let available = document.createElement("input");
    available.type = "radio";
    let avail = document.createElement("label");
    avail.innerText = "False";
    let cheeck = document.createElement("input");
    cheeck.type = "radio";  
    available.name = "disponible";
    cheeck.name = "disponible";
    let button = document.createElement("button");
    button.innerHTML = "Ajouter"
    form.appendChild(title);
    form.appendChild(input);
    form.appendChild(author);
    form.appendChild(auteur);
    form.appendChild(code);
    form.appendChild(num);
    form.appendChild(prix);
    form.appendChild(price);
    form.appendChild(annee);
    form.appendChild(year);
    form.appendChild(disponible);
    form.appendChild(avai);
    form.appendChild(avail);
    form.appendChild(available);
    form.appendChild(cheeck);
    form.appendChild(button);
    container.appendChild(form);

}
element();
