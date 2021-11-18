"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false

};

let a = prompt('Один из последних фильмов?');
let b = +prompt('На сколько вы оценивает фильм от 0-10 баллов');
let c = prompt('Один из последних фильмов?');
let d = +prompt('На сколько вы оценивает фильм от 0-10 баллов');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
