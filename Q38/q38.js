var city;
var country;
function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log(city, "is in ", country);
}
describe_city(); // default
describe_city("New York", "United States of America");
describe_city("Tokyo", "Japan");
describe_city("Dubai", "United Arab Emirates");
