// Books
let books = document.querySelector(".books");
let bookPlus = document.querySelector(".bookPlus");
let bookClass = document.getElementsByClassName("bookClass");
let bookPlusHome = document.querySelector(".bookPlusHome");
let bookPlusAbroad = document.querySelector(".bookPlusAbroad");
let bookGenres = document.getElementsByClassName("bookGenres");

bookClass[0].style.display = "none";
bookClass[1].style.display = "none";
bookGenres[0].style.display = "none";
bookGenres[1].style.display = "none";

let clkBookPlus = true;

books.addEventListener("click", () => {
    if (clkBookPlus == true) {
        bookClass[0].style.display = "block";
        bookClass[1].style.display = "block";
        bookPlus.textContent = "-";
        clkBookPlus = false;
    }
    else {
        bookClass[0].style.display = "none";
        bookClass[1].style.display = "none";
        bookPlus.textContent = "+";
        clkBookPlus = true;
    }
});

let clkBookPlusHome = true;

bookClass[0].addEventListener("click", () => {

    if (clkBookPlusHome == true) {
        bookGenres[0].style.display = "block";
        bookPlusHome.textContent = "-";
        clkBookPlusHome = false;
        clkBookPlus = true;
    }
    else {
        bookGenres[0].style.display = "none";
        bookPlusHome.textContent = "+";
        clkBookPlusHome = true;
        clkBookPlus = true;
    }

});

let clkBookPlusAbroad = true;

bookClass[1].addEventListener("click", () => {
    bookClass[1].style.display = "block";
    if (clkBookPlusAbroad == true) {
        bookGenres[1].style.display = "block";
        bookPlusAbroad.textContent = "-";
        clkBookPlusAbroad = false;
        clkBookPlus = true;
    }
    else {
        bookGenres[1].style.display = "none";
        bookPlusAbroad.textContent = "+";
        clkBookPlusAbroad = true;
        clkBookPlus = true;
    }
});

// DVD
let dvds = document.querySelector(".dvds");
let dvdPlus = document.querySelector(".dvdPlus");
let dvdClass = document.getElementsByClassName("dvdClass");
let dvdPlusHome = document.querySelector(".dvdPlusHome");
let dvdPlusAbroad = document.querySelector(".dvdPlusAbroad");
let dvdGenres = document.getElementsByClassName("dvdGenres");

dvdClass[0].style.display = "none";
dvdClass[1].style.display = "none";
dvdGenres[0].style.display = "none";
dvdGenres[1].style.display = "none";

let clkDvdPlus = true;

dvds.addEventListener("click", () => {
    if (clkDvdPlus == true) {
        dvdClass[0].style.display = "block";
        dvdClass[1].style.display = "block";
        dvdPlus.textContent = "-";
        clkDvdPlus = false;
    }
    else {
        dvdClass[0].style.display = "none";
        dvdClass[1].style.display = "none";
        dvdPlus.textContent = "+";
        clkDvdPlus = true;
    }
});

let clkDvdPlusHome = true;

dvdClass[0].addEventListener("click", () => {
    if (clkDvdPlusHome == true) {
        dvdGenres[0].style.display = "block";
        dvdPlusHome.textContent = "-";
        clkDvdPlusHome = false;
        clkDvdPlus = true;
    }
    else {
        dvdGenres[0].style.display = "none";
        dvdPlusHome.textContent = "+";
        clkDvdPlusHome = true;
        clkDvdPlus = true;
    }
});

let clkDvdPlusAbroad = true;

dvdClass[1].addEventListener("click", () => {
    if (clkDvdPlusAbroad == true) {
        dvdGenres[1].style.display = "block";
        dvdPlusAbroad.textContent = "-";
        clkDvdPlusAbroad = false;
        clkDvdPlus = true;
    }
    else {
        dvdGenres[1].style.display = "none";
        dvdPlusAbroad.textContent = "+";
        clkDvdPlusAbroad = true;
        clkDvdPlus = true;
    }
});