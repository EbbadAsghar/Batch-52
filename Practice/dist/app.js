// let myType = 4;
// myType = "a";
// myType = false;
// myType = {id:4, gender: false};
// const enum Color {Red=1, Green, Blue};
// var Colorname:string = Color[2];
// console.log(Colorname);
// function myCallBack(text:string) {
//     console.log("Inside myCallBack" + text)
// }
// function CallingFunction (initialtext:string, callback:(text:string) => void) {
//     callback(initialtext);
// }
// CallingFunction("my Text", myCallBack);
// function pickCard(x:{suit:string; card:number;}[]):number;
// function pickCard(x:number):{suit:string; card:number;};
// function pickCard(x):any{
//     if (typeof x == "object") {
//         varpickedCard = Math.floor(Math.random()*x.length);
//         return pickedCard;
//     }
//     else if (typeof x == "number") {
//         varpickedsuit = Math.floor(x/13);
//         return {suit:suits[pickedSuit], card:x%13};
//     }
// };
// var a: any = "Tom";
// if (typeof a === "string") {
//     console.log(a.length);
// };
// a.unknown();
// function addWith (arg1: string|number|boolean):string|number|boolean {
//     if (typeof arg1 === "string"){
//         return arg1+ "Hello";
//     }
//     if (typeof arg1 === "number"){
//         return arg1+ 10;
//     }
//     if (typeof arg1 === "boolean"){
//         return arg1 && false;
//     } 
// };
// var f:(string) => string;
// f=x=> `(`+x+`)`;
// var h: ((string)=> string) []
// h =[];
// h.push(f);
// console.log(h[0]("h"));
let a = 1;
a++;
console.log(a);
export {};
