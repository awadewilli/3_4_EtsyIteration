//Problem 1
//1.Compute Sum of all prices properties
//2.Compute average of all the resulting prices

var priceSum=items.reduce(function(previousValue, currentValue, currentIndex, array){
  previousValue = previousValue.hasOwnProperty('price') ? previousValue.price : previousValue;
  return previousValue + Number(currentValue.price);

});
var average = (priceSum / items.length).toFixed(2);

console.log("the average", average);


//Problem 2

function sortPrice(object){
  return object.price>14 && object.price<18;
}
var filteredObj = items.filter(sortPrice);
var filteredTitle = [];

filteredObj.forEach(function(currentValue){
  filteredTitle.push(currentValue.title);
});

console.log(filteredObj);
console.log(filteredTitle);

//Problem 3
function sortCurrency(object){
  return object.currency_code== "GBP";
}
var filteredCode = items.filter(sortCurrency);
var filteredTitle = '';
var filteredPrice = '';
filteredCode.forEach(function(currentValue){
  filteredTitle = currentValue.title;
  filteredPrice = currentValue.price;
});
//document.write(fliteredTitle,filteredPrice);
console.log(filteredTitle, filteredPrice);

//Problem 4
function sortMaterials(object){
  return object.materials.indexOf("wood") != -1;
}
var filteredMats = items.filter(sortMaterials);
console.log(filteredMats);

var filteredMatsTitle = '';
filteredMats.forEach(function(currentValue){
  filteredMatsTitle = currentValue.title + " is made of wood. " + filteredMatsTitle;
});

console.log(filteredMatsTitle);

//Problem 5
function sortMaterialLength(object){
  return object.materials.length>8;
}
var overEightMats = items.filter(sortMaterialLength);
console.log(overEightMats);

var overEightMatsTitle = '';
overEightMats.forEach(function(object){
  overEightMatsTitle = object.title + " has 13 materials:" + object.materials + overEightMatsTitle;

});

console.log(overEightMatsTitle);
//Problem 6
function madeBy(object){
  return object.who_made=="i_did";
}
var madeTheirOwn = items.filter(madeBy);
console.log(madeTheirOwn);

var findMadeOwnCount = madeTheirOwn.length + " Were made by Their Sellers.";

console.log(findMadeOwnCount);
