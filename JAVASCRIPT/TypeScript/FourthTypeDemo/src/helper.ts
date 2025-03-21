export type Person={
    fname: string,
    lname?: string,
    isMarried:boolean,
    children:[]
    getFullName:()=> string;
    getAge:(num:number,name:string)=> number
}

