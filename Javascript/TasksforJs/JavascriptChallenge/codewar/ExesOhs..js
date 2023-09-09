function XO(str) {
    let x = 0;
    let o = 0;
    for (i = 0; i< str.length; i++){
        if(str [i] == "x" || str[i] == "X"){
             x+= 1;
        }
        else if(str[i] == "o"){
            o += 1;
        }
        
    }
    if (x == o){
        console.log(true);
    }
    else if(x != o) {
        console.log(false);
    }
    else if(x == 0 && 0 ==0 ){
      console.log(true)
    }
    }

   XO("zpzp");