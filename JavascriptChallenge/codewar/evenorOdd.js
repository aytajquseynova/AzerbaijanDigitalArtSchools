function evenOrOdd(number) {
   if(number % 2 !== 0){
    return 'odd';
   }
   else if (number % 2 === 0){
    return "even";
   }
}
console.log( evenOrOdd(7));