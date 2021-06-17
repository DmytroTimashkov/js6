// let num = +prompt("число");
// let deg = +prompt("степень",1);
// function numberInDegree (number,degree){
//     let sum = 0;
//   if (isNaN(number) || isNaN(degree)){
//       return "some error";
//   }
//   else{
//     sum+=  Math.pow(number,degree);
//     return sum
//
//   }
// }
// alert(numberInDegree(num,deg))



function padString(str,len,add="*",boolean = true){
    let result = len - str.length ;
    if(str === undefined || len === undefined || add === undefined || boolean === undefined || add.length > 1){
        return "some error";
    }
    else if (str.length < len && boolean === true){
        for (let i = 0 ; i <= result - 1 ; i++){
           str += add;
        }
        return str;
    }
    else if (str.length > len && boolean === true){
      return   str.substr(0,str.length - (str.length - len));
    }
    else if (str.length < len && boolean === false){
        for (let i = 0 ; i <= result - 1  ; i++){
        str =  str.padStart(len,add);
        }
        return str ;
    }
    else if (str.length > len && boolean === false){
        return   str.substr(str.length-len,str.length - (str.length - len));
    }
}
console.log(padString("hello",3, "0" , false));
console.log(padString("world",10));
console.log(padString("hello",10, "9" , false));
console.log(padString("hello", 9  ));





