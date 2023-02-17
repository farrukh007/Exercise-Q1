var city2;
var country2;
var ret_msg;
function city_country(city, country) {
    if (city === void 0) { city = "Lahore"; }
    if (country === void 0) { country = "Pakistan"; }
    return city.concat(", ", country);
}
console.log(city_country()); // default
console.log(city_country("New York", "United States of America"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Dubai", "United Arab Emirates"));
