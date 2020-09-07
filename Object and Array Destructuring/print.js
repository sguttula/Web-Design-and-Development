var groups = {
    name: ' ',
     leader: ' ',
     members: ' '
}
function group1Function(groupsPart1) {
    const group1 = {
        name: 'Justice League',
        leader: 'Wonder Woman',
        members: ['Batman', ' Superman']
    }
    groupsPart1 = 
    console.log("Team: " + group1.name) +
    console.log("Leader: " + group1.leader) +
    console.log("Members: " + group1.members) +
    console.log(" ");
}
function group2Function(groupsPart2) {
    const group2 = {
        name: 'Avengers',
        members: ['Hulk', ' Thor', ' Captain America']
    }
   groupsPart2 = 
    console.log("Team: " + group2.name) +
    console.log("Leader: " + group2.leader) +
    console.log("Members: " + group2.members) +
    console.log(" ");
}
function print(groups) {
    group1Function(groups);
    group2Function(groups);
}
console.log("#1");
print(groups);

//------
var cart = 
    {
        // item: 'item name',
        // quantity: 1,
        // price: 1.99 
    }
function groceryEntry(item, quantity, price) {
    this.item = item;
    this.quantity = quantity;
    this.price = price;
}

function addItem(newItem, newQuantity) {
    cart.item = newItem;
    cart.quantity = newQuantity;
}
function addItem2(newItem2, newQuantity2) {
    cart.item2 = newItem2;
    cart.quantity2 = newQuantity2;
}
function addItem3(newItem3, newQuantity3) {
    cart.item3 = newItem3;
    cart.quantity3 = newQuantity3;
}
function addItem4(newItem4, newQuantity4) {
    cart.item4 = newItem4;
    cart.quantity4 = newQuantity4;
}
function addPrice(itemName, newPrice) {
   if(cart.item == itemName) {
    cart.price = newPrice;
   }
   if(cart.item2 == itemName) {
    cart.price = newPrice;
   }
   if(cart.item4 == itemName) {
    cart.price = newPrice;
   }
   if(cart.item3 == itemName) {
    cart.price = newPrice;
   }
}
function addPrice2(itemName2, newPrice2) {
    if(cart.item == itemName2) {
     cart.price2 = newPrice2;
    }
    if(cart.item2 == itemName2) {
     cart.price2 = newPrice2;
    }
    if(cart.item4 == itemName2) {
     cart.price2 = newPrice2;
    }
    if(cart.item3 == itemName2) {
     cart.price2 = newPrice2;
    }
 }
 function removeItem(deletedItem) {
    if(cart.item == deletedItem) {
        cart.quantity--;
       }
       if(cart.item2 == deletedItem) {
        cart.quantity2--;
       }
       if(cart.item3 == deletedItem) {
       cart.quantity3--;
       }
       if(cart.item4 == deletedItem) {
        cart.quantity4--;
       }
 }
 function addTotal() {
   var totalPrice = (cart.quantity3 * cart.price) + (cart.quantity4 * cart.price2); 
  console.log("Total: " + Math.round(100 * totalPrice) / 100);
 }
 function printItems() {
     console.log("#2");
     console.log("Item: " + cart.item + " | " + "Quantity: " + cart.quantity + " | " + "Price: n/a");
     console.log("Item: " + cart.item2 + " | " + "Quantity: " + cart.quantity2 + " | " + "Price: n/a");
     console.log("Item: " + cart.item3 + " | " + "Quantity: " + cart.quantity3 + " | " + "Price: " + cart.price);
     console.log("Item: " + cart.item4 + " | " + "Quantity: " + cart.quantity4 + " | " + "Price: " + cart.price2);
 }
addItem('bread', '1');
addItem2('soup', '3');
addItem3('chips', '4');
addItem4('soda', '1');
addPrice('chips', 5.99);
removeItem('chips');
addPrice2('soda', 1.04);
new printItems;
addTotal();
