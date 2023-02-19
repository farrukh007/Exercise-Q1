interface Car {
    manufacturer: string;
    model:  string;
    color:  string;
    optFeature: string;
}

function createCar (make: string, model: string, color: string, optFeature: string): Car{
    const car: Car = {
        manufacturer: make,
        model: model,
        color: color,
        optFeature: optFeature
    };
    return car;
}

const myCar = createCar("Hyundai", "Tucson", "Blue", "Showcases");
const myCar2 = createCar("GMC", "Acadia", "Red", "4G Wi-Fi Hotspot Technology");
console.log(myCar, myCar2);