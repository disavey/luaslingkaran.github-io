var phi;
var r; 
var hasil;
function luasLingkaran(a, b){
    phi = a;
    r = b;
    hasil = phi * r ** 2 ;
    return hasil;
}

var a = 3.14;
var b = parseInt(prompt("masukkan r"));
var hasil = luasLingkaran(a, b);
document.write(hasil);
