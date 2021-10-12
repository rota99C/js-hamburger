var burger = document.getElementsByClassName("fa-bars");


burger.addEventListener('click',
    function() {
        document.getElementsByClassName("hamburger-menu").style.display = "block";
    }
);

var close = document.getElementsByClassName("close");

close.addEventListener('click',
    function() {
        document.getElementsByClassName("hamburger-menu").style.display = "none";
    }
);