//1. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

let maxOfThree = ((a,b,c)=>{
      let highNum
      if (a>b){
           highNum= a
      }else highNum = b
      if (highNum<c){
          highNum = c
      }
console.log(highNum);
})
maxOfThree(5,2,7)