var order_items;
order_items = ["Meat", "egg", "Chilli", "Mines", "Salad"];
function show_order(arr) {
    console.log("Your order: ");
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
show_order(order_items);
