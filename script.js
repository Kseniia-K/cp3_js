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

let fbm = true;

books.addEventListener("click", () => {

    if (fbm == true) {
        bookClass[0].style.display = "block";
        bookClass[1].style.display = "block";
        bookPlus.innerText = "-";
        fbm = false;
    }
    else {
        bookClass[0].style.display = "none";
        bookClass[1].style.display = "none";
        bookPlus.innerText = "+";
        fbm = true;
    }
});

let fbto = true;

bookClass[0].addEventListener("click", () => {

    if (fbto == true) {
        bookGenres[0].style.display = "block";
        bookPlusHome.innerText = "-";
        fbto = false;
        fbm = true;
    }
    else {
        bookGenres[0].style.display = "none";
        bookPlusHome.innerText = "+";
        fbto = true;
        fbm = true;
    }

});

let fbtz = true;

bookClass[1].addEventListener("click", () => {
    bookClass[1].style.display = "block";
    if (fbtz == true) {
        bookGenres[1].style.display = "block";
        bookPlusAbroad.innerText = "-";
        fbtz = false;
        fbm = true;
    }
    else {
        bookGenres[1].style.display = "none";
        bookPlusAbroad.innerText = "+";
        fbtz = true;
        fbm = true;
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

let fdm = true;

dvds.addEventListener("click", () => {
    if (fdm == true) {
        dvdClass[0].style.display = "block";
        dvdClass[1].style.display = "block";
        dvdPlus.innerText = "-";
        fdm = false;
    }
    else {
        dvdClass[0].style.display = "none";
        dvdClass[1].style.display = "none";
        dvdPlus.innerText = "+";
        fdm = true;
    }
});

let fdto = true;

dvdClass[0].addEventListener("click", () => {
    if (fdto == true) {
        dvdGenres[0].style.display = "block";
        dvdPlusHome.innerText = "-";
        fdto = false;
        fdm = true;
    }
    else {
        dvdGenres[0].style.display = "none";
        dvdPlusHome.innerText = "+";
        fdto = true;
        fdm = true;
    }
});

let fdtz = true;

dvdClass[1].addEventListener("click", () => {
    if (fdtz == true) {
        dvdGenres[1].style.display = "block";
        dvdPlusAbroad.innerText = "-";
        fdtz = false;
        fdm = true;
    }
    else {
        dvdGenres[1].style.display = "none";
        dvdPlusAbroad.innerText = "+";
        fdtz = true;
        fdm = true;
    }
});