function createCar(make, model, color, optFeature) {
    var car = {
        manufacturer: make,
        model: model,
        color: color,
        optFeature: optFeature
    };
    return car;
}
var myCar = createCar("Hyundai", "Tucson", "Blue", "Showcases");
var myCar2 = createCar("GMC", "Acadia", "Red", "4G Wi-Fi Hotspot Technology");
console.log(myCar, myCar2);
