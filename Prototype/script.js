let compétence;
 let count=0;
do{
    let compétence= prompt('entre a code (C1..C8)tap exit to stop');
    if(compétence=="exit") break;
 count++;

 switch(compétence) {
    case'C1':
    alert("Maquettage");
    break;
    case'C2':
    alert("html,css");
    break;
    case'C3':
    alert("JavaScript");
    break;
    case'C4':
    alert("CMS");
    break;
    case'C5':
    alert("SQL");
    break;
    case'C6':
    alert("accésBDD");
    break;
    case'C7':
    alert("PHP");
    break;
    case'C8':
    alert("FramworkJS");
    break;
    default:
        alert("Cette compétence n'existe pas");

 }  
 
}while(compétence!=="exit");
alert(`nombre de compétnce est ${count}`);
