let numbre1 = prompt('entre first numbre','');
let numbre2 = prompt('entre a second numbre','');
let operator = prompt('entre an operator','');
let result;
switch(operator) {
    case'+':
    result = +numbre1 + +numbre2;
    break;
    case'-':
    result = numbre1 - numbre2;
    break;
    case'*':
    result = numbre1 * numbre2;
    break;
    case'/': 
    if(+numbre2 != 0) {
        alert(numbre1 / numbre2);
        break;
    } else {
        alert("error");
    }
    break;
    default:
        alert("un opérateur invalide");
        break;
} alert('result is' + result);
