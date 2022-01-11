//4. Traverse through an array (either number or string array) and display each 
//value with their index position using Array.map method

//HINT: For index, take a look at the Syntax and Parameters sections in the MDN 
//DocLinks to an external site. for Array.map

 const array = [1,2,3,4,5,6,7,8,9]
 const map= array.map((num,index)=>{
     for (let i;i<array.length;i++){
        
     }
 })
 console.log(map);

//BONUS: 

//Convert as many of the functions above into one-line arrow functions 
//(which means no curly brackets and no explicit use of the return keyword)

//map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any):
// any[]
//A function that accepts up to three arguments. The map method calls the callbackfn 
//function one time for each element in the array.


//Calls a defined callback function on each element of an array, and returns an 
//array that contains the results.