/*3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase.*/
let pers_name = "ahmad ali";

//person’s name in lowercase//

let pers_lowercase = pers_name.toLowerCase();
console.log(pers_lowercase);

//person’s name in uppercase//

let pers_uppercase = pers_name.toUpperCase();
console.log(pers_uppercase);

//person’s name in titlecase//

let titlecase: string[] = pers_name.split(" ");
let titlecaseName: string = " ";
for (let i = 0; i < titlecase.length; i++) {
  titlecaseName +=
    titlecase[i].charAt(0).toUpperCase() +
    titlecase[i].slice(1).toLowerCase() +
    " ";
}
console.log(titlecaseName);
export {};
