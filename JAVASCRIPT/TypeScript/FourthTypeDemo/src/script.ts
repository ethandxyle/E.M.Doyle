import{Person} from "./helper"
let person1: Person={
    fname:"Jane",
    lname:"of the jungle",
    isMarried:false,
    children:["Todd","Lisa"],
    getFullName:function (){
    return '${this.fname} ${this.lname}'
},
getAge:function (doggy:number, horse:string){return doggy*10}
}

console.log(person1)