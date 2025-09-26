let compétences = [
    "Maquuetter une application",
    "Realiser une interface utilisateur web statique et adaptable",
    "dévlopper une interface utilisateur web dynamique",
    "Réaliser une interface utilisateur avec une solition de gestion de contenu ou e-commerce",
    "Crée une base de données-Niveau 1",
    "Dévlopper la partie back-end d'une application web ou web mobiel- niveau1",
    "Dévlopper les composants d'accès aux données-niveau1",
    "Framwork FrontEnd (react,vuejs)",
    "Comprendr le démarche pédogogique à solicode",
    "Colaboration & posture professionelle"
 ];
 let score =0;
 let result= 10;
 let i=1;
 console.log("tapez le code correspondant à la compétence (C1..C10)");
 console.log("Vous avez" + result+ "questions");
 while(i<= result){
    let index = Math.floor( Math.random() * compétences.length);
    let correctCode = "C" +(index + 1);
    let answer = prompt("Question" +i+ ":Quelle est le code pour:" + compétences[index]);
    if(!answer)
    { alert("Good Bey");
        break;
    }

    if(answer==correctCode)
    {
        console.log("Correct");
        score++;
    }
    else{
        console.log("Faux, la bonne reponse est:"+ correctCode);
    }
    i++;
 }
 console.log("le jeu est terminé!");
 console.log("Votre score"+score+"/"+result);
