function pustoTu(znaki) {
    if(znaki.length == 0) {
        return false;
    } else {
        return true;
    };
}

function bialeZnaki(string) {
    return /[\s\t\r\n]{1,}/.test(string);
}

function walidujNapis(nazwa, komunikat) {
    var string = formularz.elements[nazwa].value
}


function weryfikacja(formularz) {
    var string = formularz.elements["imie"].value;
    if((pustoTu(string) == false) || bialeZnaki(string)==true) {
        alert("Podaj swoje imię!");   
        return false;
    } else {
        return true;
    }

}