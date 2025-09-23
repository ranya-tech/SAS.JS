let note;
 let sum =0;
let counter=0;

do {
    note = +prompt("entre a note");
    if (note>=0 && note<=20){
        sum += note;
        counter++;
    } else if (note == -1) break;
    else{
        alert("note non valide");
    }
} while(true);
alert(`la moyenne est  ${sum/counter}`);