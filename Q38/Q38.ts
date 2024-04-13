function describe_city (cities:string, country:string = "pakistan"){
    console.log(`${cities} is the city of ${country}`)
}

describe_city("karachi");
describe_city("islamabad");
describe_city("Delhi", "India");