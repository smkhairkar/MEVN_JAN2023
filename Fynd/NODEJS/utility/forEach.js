const arr=['giraffe','tiger','lion'];//homogeneous data
const arr1=[1,2,3,4,5];//homogeneous data
arr.push('cheetah');//adding elements to an array using push function
arr1.push(6);
arr.forEach(element=>{
    console.log(element);
});
arr1.forEach(element=>{
    console.log(element);
});

const fruits=['banana','orange'];
fruits.unshift('apple');//will add element in the beginning of the array
console.log(fruits);
console.log(findFruit('banana'));
// fruits.findIndex(findFruit('apple'));

fruits.findIndex(findFruit);

// fruits.findIndex(findFruit('orange'));
function findFruit(fruit){
    return fruit=="banana";
}

const ages=[6,2,3,4];
ages.findIndex(checkAge);
ages.sort();//ascending
ages.reverse();//de sending after asc in the previous line
function checkAge(age){
    return age>3;

}
const cars=["bmw","mercedes"];
const car={type:"fiat",mode:"400",color:"white"};//name:value pairs
//use this while matching the data to the documents of mongo