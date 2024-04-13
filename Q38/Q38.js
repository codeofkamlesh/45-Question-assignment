"use strict";
function describe_city(cities, country = "pakistan") {
    console.log(`${cities} is the city of ${country}`);
}
describe_city("karachi");
describe_city("islamabad");
describe_city("Delhi", "India");
