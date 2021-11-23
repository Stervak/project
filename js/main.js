"use strict";

let numberOfFIlms;

function start() {
   numberOfFIlms = +prompt('Сколько фильмов вы посмотрели?', '');

   while (numberOfFIlms == '' || numberOfFIlms == null || isNaN(numberOfFIlms)) {
      numberOfFIlms = +prompt('Сколько фильмов вы посмотрели?', '');
   }
}

start();
const personalMovieDB = {
   count: numberOfFIlms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};





function rememberMyFIlms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?'),
         b = prompt('На сколько баллов его оцениваете?');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('true');
      } else {
         console.log('error');
         i--;
      }
   }
}
rememberMyFIlms();



function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log('Просмотренно довольно мало фильмов');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
   } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
   } else {
      console.log('ПРоизошла ошибка');
   }
}

detectPersonalLevel();




function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
   for (let i = 1; i < 4; i++) {

      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}

writeYourGenres();
console.log(personalMovieDB);