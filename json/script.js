// Stringify JSON
let mahasiswa = {
    nama    : "Taufiq Pop",
    nim     : "L200190085",
    email   : "taufiqpop999@gmail.com"
}

console.log(JSON.stringify(mahasiswa));

// Parse JSON
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let mahasiswa = JSON.parse(this.responseText);
        console.log(mahasiswa);
    }
}
xhr.open('GET', 'coba.json', true);
xhr.send();

// JQUERY
$.getJSON('coba.json', function (data) {
    console.log(data);
});