"use strict";
function car_data(manufacturer, model, ...optional_options) {
    let car = {
        manufacturer: manufacturer,
        model: model,
    };
    optional_options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
let final_result = car_data("Honda", "civic", "color:white", "year   :     2024   ");
// Print each property on a separate line
for (let key in final_result) {
    console.log(`${key}: ${final_result[key]}`);
}
