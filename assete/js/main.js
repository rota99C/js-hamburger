//assegnazione variabile all'elemento da cliccare per apertura
var burger = document.querySelector(".header-right > a");
//evento click di apertura 
burger.addEventListener('click',
    function() {
        document.querySelector(".hamburger-menu").style.display = "block";
    }
);
//verifica riuscita evento
    console.log(burger);

//assegnazione variabile all'elemento da cliccare per chiusura
var chiusura = document.querySelector(".close");
//evento click di chiusura 
chiusura.addEventListener('click',
    function() {
        document.querySelector(".hamburger-menu").style.display = "none";
    }
);
//verifica riuscita evento
console.log(chiusura);

