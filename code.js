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

// function walidujNapis(nazwa, formularz, komunikat) {
//     var string = formularz.elements[nazwa].value
//     if((pustoTu(string) == false) || bialeZnaki(string)==true) {
//         alert(komunikat);   
//         return false;
//     } else {
//         return true;
//     }

// }

// function poprawnyAdres(formularz) {
//     let email_form = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     var adres = formularz.elements["email"].value
//     if (email_form.test(adres))
//     return true;
//     else {
//     alert("Adres e-mail jest niepoprawny");
//     return false;
//     }
// }
    
function walidacjaFocus(formularz, obiekt, wiadomosc) {
    let string = formularz.elements[obiekt].value;
    let errorField = "blad" + "_" + obiekt;
    console.log(errorField);
    if ((pustoTu(string) == false) || bialeZnaki(string)==true) {
        document.getElementById(errorField).innerHTML = wiadomosc;
        //formularz.elements[obiekt].focus();
        document.getElementById(errorField).focus();
        return false;
    } else {
        document.getElementById(errorField).innerHTML = "";
        return true;
    }   
}

function walidacjaEmailFocus(formularz, obiekt, wiadomosc) {
    let email_form = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var adres = formularz.elements[obiekt].value;
    let errorField = "blad" + "_" + obiekt;
    console.log(errorField);
    if (email_form.test(adres)) {
        document.getElementById(errorField).innerHTML = wiadomosc;
        //formularz.elements[obiekt].focus();
        document.getElementById(errorField).focus();
        return false;
    } else {
        document.getElementById(errorField).innerHTML = "";
        return true;
    }   
}

function weryfikacja(formularz) {
    // walidujNapis("imie", formularz, "Podaj poprawne imie")
    walidacjaFocus(formularz, "imie", "Podaj poprawne imie")
    // poprawnyAdres(formularz)
    walidacjaEmailFocus(formularz, "email", "Podaj poprawny E-mail")
    // walidujNapis("kod",formularz, "Podaj poprawny kod")
    walidacjaFocus(formularz, "kod", "Podaj poprawne kod")
    // walidujNapis("wiadomosc", formularz, "Nie możesz wysłać pustej wiadomości")
    // walidacjaFocus(formularz, "wiadomosc", "Nie możesz wysłać pustej wiadomości")
}

function pokazElement(element) {
document.getElementById(element).style.visibility = 'visible';
}

function ukryjElement(element) {
document.getElementById(element).style.visibility = 'hidden';
}

function visibility(element) {
    const wyksztalcenie = document.getElementById(element).value;
    console.log(wyksztalcenie);;
    if (wyksztalcenie == "wyksztalcenie_p") {
        pokazElement("kod");
    } else {
        ukryjElement("kod");
    }
}

function licznikWierszy(i, e) {
    if (e) {
        // Sprawdzamy, czy wiersz jest elementem (nodeType 1)
        if (e.nodeType === 1) {
            // Kolorujemy co drugi wiersz (i jest nieparzyste)
            if (i % 2 === 1) {
                e.setAttribute("style", "background-color:Red;");
            }
            // Przechodzimy do następnego wiersza
            licznikWierszy(++i, e.nextElementSibling);
        } else {
            // Jeśli nie jest elementem, przechodzimy do następnego węzła
            licznikWierszy(i, e.nextSibling);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {licznikWierszy(1, document.getElementsByTagName('tr')[0]);});

function licznik(textarea, span, max) {
    var currentLength = textarea.value.length;
    var remaining = max - currentLength;
    span.textContent = remaining >= 0 ? remaining: 0;

}