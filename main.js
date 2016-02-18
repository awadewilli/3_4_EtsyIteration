//Problem 1
//1.Filter prices
//2.Compute average of all the resulting prices

/*function filterprices(prop){
  if(items =='price'){
    return true;
  }
  else{
    return false;
  }
    }
  var prices = items.filter(filterprices);

console.log(prices);*/

var priceSum=items.reduce(function(previousValue, currentValue, currentIndex, array){
  previousValue = previousValue.hasOwnProperty('price') ? previousValue.price : previousValue;
  return previousValue + Number(currentValue.price);

});
var average = (priceSum / items.length).toFixed(2);

console.log("the average", average);
