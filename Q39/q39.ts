let city2 : string;
let country2 : string;
let ret_msg : string;

 function city_country (city="Lahore", country="Pakistan") {

    return city.concat(", ",country);
}

console.log(city_country()); // default
console.log(city_country("New York", "United States of America"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Dubai", "United Arab Emirates"));
