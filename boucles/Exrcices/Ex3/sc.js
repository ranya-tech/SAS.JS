let x = +prompt('entre a number');
for(i=0; i<=x; i++) {
    if(x%i ===0) {
        alert(i);
        i++;
    }
}