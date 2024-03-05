"use strict";
/* 45. Cars:
Write a function that stores information about a car in an Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly. */
Object.defineProperty(exports, "__esModule", { value: true });
function car_info(manufacturer, model, color, optional, ...other_specs) {
    let car = {
        manufacturer_name: manufacturer,
        model_name: model,
        color,
        optional,
        other_spec: other_specs,
    };
    return car;
}
;
let car_final = car_info("Suzuki", 2023, "Red", "automatic", "Air bag");
console.log(car_final);
