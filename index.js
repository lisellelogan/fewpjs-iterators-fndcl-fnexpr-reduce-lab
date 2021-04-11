const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//function sums all the batter amounts in the array
//use reduce to satisfy this function
// function totalBatteries(arr){
//     arr.reduce(function(total, element){
//         total += element
//     })
//     return total
// }

const totalBatteries = batteryBatches.reduce(function(total, element){return total + element})