// массив

var numbers = [1000, 21, 50, -1000, 20, 1, 100, 2000]; 

// // БОЛШЕЕ ЧИСЛО МАСИВА

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] > numbers[0]){
//         numbers[0] = numbers[i];
//     }
// }
// console.log(numbers[0]);


// меньшее число массива

// let x = numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     if (x > numbers[i]) {x = numbers[i]};
// }
// console.log(x);



// // Сумма чисел масиву
// function sum(numbers){
// var sum = 0;
// for(var i = 0; i < numbers.length; i++){
//     sum += numbers[i];
//     }
// console.log(sum);
// }
// sum(numbers);



// СКИДКА

// var currency = "грн";
// let price = prompt("ваша цена?") ;
// function calcDiscount (price) {
//     let priceWithDiscount
//     let discount
//     if (price <= 1000){
//         priceWithDiscount = price - (price * 3 /100)
//         discount = (price * 3 /100)
//     }else if ( price > 1000 && price <= 5000) {
//         priceWithDiscount = price - (price * 5 /100)
//         discount = (price * 5 /100)
//     }else if( price >= 5000) {
//         priceWithDiscount = price - (price * 7 /100)
//         discount = (price * 7 /100)
//     }
//     console.log("стоимость " + price + " товар со скидкой " + priceWithDiscount + " " + currency + " сумма скидки " + discount)
// }
// calcDiscount(price)