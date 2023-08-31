function sumMul(n, m) {
    if((n>0 && m >0) && (n %2 === 0) && (m % 2===0)){
        let sum = 0;
        for (i = n; i< m; i++){
            sum += i;
        }
        return sum;
    }
      else if (n <= 0 && m <= 0) {
          return "INVALID";
}}
console.log(sumMul(2, 9));