"use strict";
/* Q40. Album:
Write a function called make_album() that builds an Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
Use the function to make three dictionaries representing different albums.
Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object.
Make at least one new function call that includes the number of tracks on an album.*/
Object.defineProperty(exports, "__esModule", { value: true });
let make_album = (artist_name, album_title, tracks) => {
    let Album = {
        artist: artist_name,
        album: album_title,
        tracks,
    };
    if (tracks) {
    }
    return Album;
};
// Use the function to make three dictionaries representing different albums.
let album1 = make_album("Ali", "Saagar", 7);
let album2 = make_album("Haider", "Saavan");
let album3 = make_album("Usman", "Asman", 2);
// Print each return value to show that Objects are storing the album information correctly.
console.log(album1);
console.log(album2);
console.log(album3);
