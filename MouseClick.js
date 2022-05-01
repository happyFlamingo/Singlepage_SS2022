let family = [];
let zaehler = 1;

function add(){
    family.push(zaehler);
    document.getElementById('myList').innerHTML += "Aktuelle Einträge in der Punkteliste:";
for (let prop in family) {
    document.getElementById('myList').innerHTML += '<li>' + prop + '</li>';
}}