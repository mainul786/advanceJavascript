// normal way to define square number
const numbers=[2,3,4,5,6,7,8];
const output=[];
for(let i=0;i<numbers.length;i++){
    const element=numbers[i];
    const result=element * element;
   output.push(result);   
}
console.log(output);
// advance javascript using square number
const result=numbers.map(function(element){
    return element * element;
})
console.log(result);

// map using arrow function
const result1=numbers.map(x=>x * x)
console.log(result1);
// filter findOut 
const number=[12,15,14,12,36,32,12,14,15];
const outputShow=number.filter(x=> x <25);
console.log(outputShow);
// find 
const age=[12,14,15,16,12,4,5,25,27,26,21,22,23];
const gfAge=age.find(x => x< 24)
console.log(gfAge);