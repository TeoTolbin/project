"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    const: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      с = prompt('Один из просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[с] = d;

console.log(personalMovieDB);

