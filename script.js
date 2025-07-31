const obj={
    firstname:"Aarthi",
    lastname:"N",
    age:19,
    graduated:false,
    joining_date:new Date("11/08/2025"),
    number_of_days:()=>{
        let curr=new Date()
        return curr-obj.joining_date
    }
}
console.log(obj)



let{firstname,lastname,age,graduated,joining_date,number_of_days}=obj
console.log(
    Math.floor(number_of_days()/(1000*3600*24))
)


