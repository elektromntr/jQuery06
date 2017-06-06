function zaznaczLi() {
    var wiersze = document.querySelectorAll('.wiersz');
    var liNum = prompt("Podaj numer wiersza, który chcesz zaznaczyć");

    if (liNum != null) {
        if (liNum > wiersze.length) {
            var liNum = prompt("Podaj numer wiersza, który chcesz zaznaczyć");
        } else if ( liNum < 1) {
            var liNum = prompt("Podaj numer wiersza, który chcesz zaznaczyć");
        } else {
            wiersze[liNum=liNum-1].className = "btn btn-warning";
        }

        }
    }

var elWyk = document.getElementById('lorem');
elWyk.addEventListener('click', zaznaczLi, false);