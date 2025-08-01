const obj={
    firstname:"pratheesha",
    mark:80,
}

class Person{
    // firstname;
    // mark;
    constructor(firstname,mark){
        this.firstname=firstname;
        this.mark=mark;
    }
}

const obj2=new Person("aarthi",100)   
console.log(obj2.firstname)

//forEach
const arr=[5,3,6,9,12,14,16,345,56,346]
arr.forEach((x)=>{console.log(x)})

//filter
let filteredArr=arr.filter((x)=>x%2==0)
console.log(filteredArr)

//reduce
let sum=arr.reduce((acc,val)=>{ if(val%2!=0)return acc+val; return acc})
console.log(sum)

//slice
let copyArr=arr.slice(2,4)
console.log(copyArr)

//splice
arr.splice(2,4)
console.log(arr)
