const bibliotheque = [

    { code:12,titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, disponible: true, prix: 150 },
  
    {code:45, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, disponible: true, prix: 200 },
    
    { code:12,titre: "Clean Code", auteur: "Robert C. Martin", annee: 2008, disponible: true, prix: 150 },
  
    {code:45, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", annee: 2018, disponible: true, prix: 200 },
  
  ];

  let boooks=document.getElementById("books");
  
  
  function checkbook (bookcode) {
    let found=false;
    for (let i = 0 ; i < bibliotheque.length ; i++)
        if (bibliotheque[i].code === bookcode) {
            let card = document.createElement("div");
            card.classList.add("book-card")
            let title = document.createElement("h3");
            title.textContent=bibliotheque[i].titre;
            let button;
            let disponible=document.createElement("h4");
            let removeBtn=document.createElement("button")
            removeBtn.innerText="suprimer"
            removeBtn.addEventListener("click",function(){
                card.remove();
                bibliotheque.splice(i,1)
                console.log(bibliotheque)
            })

            if(bibliotheque[i].disponible==true){
                disponible.innerText="disponible";
                disponible.classList.add("book-dispo")
                button=document.createElement("button")
                button.innerText="reserver"
                button.classList.add("button-res")
                card.appendChild(button)
                button.addEventListener("click",function(){
                    bibliotheque[i].disponible=false;
                     disponible.innerText="non-disponible";
                     button.style.display="none"
                   

                })
            }
            else{
                disponible.innerText="non-disponible";
            disponible.classList.add("book-non-dispo")

            }
            let auteur= document.createElement("span");
            auteur.textContent=bibliotheque[i].auteur;

            card.appendChild(title);
            card.appendChild(auteur);
            card.appendChild(disponible);
            card.appendChild(removeBtn)
            boooks.appendChild(card);


            found=true;
            break;
        }
          if(found==false){
              alert("book not found");
          };
              
  
  }
  
  


  for( let i=0 ; i<bibliotheque.length;i++){
  
      checkbook(bibliotheque[i].code);
  }  