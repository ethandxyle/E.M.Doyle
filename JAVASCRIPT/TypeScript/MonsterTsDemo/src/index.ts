import {Monster, MonsterTuple, MonsterType} from "./models/monsterTypes";

const monster1: Monster ={
    firstName: "Zorg",
    age: 500,
    type: MonsterType.Undead,
    moreInfo: "Terrifies entire galaxies"
};


const monster2: Monster ={
    firstName: "Blobbo",
    age: 3,
    type: MonsterType.Blob,
    moreInfo: "Absorbs everything in sight"
};


const monster3: Monster ={
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    type: MonsterType.Human,
    moreInfo: "Monster Researcher"
};


const monster4: Monster ={
    firstName: "Vlad",
    age: 1000,
    type: MonsterType.Undead,
    moreInfo: "Shape shifter: bats, rats, and cats",
    powerLevel: 100
};
console.log(monster4);

const monsterData: MonsterTuple=["Vlad",1000, "Undead"];
console.log(monsterData)