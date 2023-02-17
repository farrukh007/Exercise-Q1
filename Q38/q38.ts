let city : string;
let country : string;


function describe_city (city="Karachi", country="Pakistan") {

    console.log(city, "is in ", country);
}

describe_city(); // default
describe_city("New York", "United States of America");
describe_city("Tokyo", "Japan");
describe_city("Dubai", "United Arab Emirates");