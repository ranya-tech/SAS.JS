let note = prompt('enter your note','');

if (note<10) {
    alert('Insuffisant');
} else if (note>12) {
    alert('bien');
} else {
    alert('passable');
}