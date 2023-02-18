function order_sandwich(str : string[]){
    
    //let order_items : string[];
    str=[];
    str.push(str);
    return str;
}

function show_order(arr : string[]){
    console.log("Your order: ");
    for (var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

order_sandwich("Meat");
order_sandwich("Cheese");
order_sandwich("Egg");
show_order();
