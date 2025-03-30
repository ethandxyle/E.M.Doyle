export enum MonsterType{
    Human="Human",
    Blob="Blob",
    Undead="Undead"
}
export interface Monster{
    firstName: string;
    lastName?:string,
    age: number;
    type: MonsterType
    moreInfo: string;
}

export interface SuperMonster{
    powerLevel: number

}

export type MonsterTuple=[string, number,string];
