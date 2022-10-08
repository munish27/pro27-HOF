// Function #1: Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood = foods.slice(1,4);
console.log(modifiedFood);

// Function #2: Array Splice

const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood1 = foods1.splice(2,0, 'noodles','icecream');
console.log(foods1);

// Function #3: Filter

const numberArray = [12,324,213,4,2,3,45,4234];
const isEven = numberArray.filter(function(item){
    if(item%2==0){
        return item;
    }
})
console.log(isEven);

const isPrime1 = numberArray.filter(function(item){
    let prime = true;
    if(item>1){
        for(let i=2;i<item;i++){
            if(item%i == 0){
                prime = false;
                break;
            }
        }
        if(prime){
            return item;
        }
    }
})
console.log(isPrime1);

// Function #4: Reject

const isPrime = n => {
    if (n===1){
    return false;
    }else if(n === 2){
       return true;
    }else{
       for(let x = 2; x < n; x++){
          if(n % x === 0){
             return false;
          }
       }
       return true;
    };
 };
 const filterPrime = numberArray => {
    const filtered = numberArray.filter(el => !isPrime(el));
    return filtered;
 };
 console.log(filterPrime(numberArray));

// Function #5: Map

const myArray = [11, 34, 20, 5, 53, 16]
let findSquareOfNUmbers = myArray.map(function(item){
    return item*item;
});
console.log(findSquareOfNUmbers);

// Function #6: Reduce
const myArray1 = [2, 3, 5, 10];
let multiplyArr = myArray1.reduce((multiply,item) => multiply*item);
console.log(multiplyArr);