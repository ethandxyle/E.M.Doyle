import React from "react";
import Greeting from "./components/Greeting.jsx";
import UserCard from "./components/UserCard.jsx";
import CardContainer from "./components/CardContainer.jsx";

const sortUsersByAge = (Users) => {
    return Users.sort((a, b) => b.age - a.age);
}
const App = () => {
    const Users = [{name: "Bob", age: 25}, {name: "Charlie", age: 35}, {name: "Alice", age: 30}]
    const sortedUsers=sortUsersByAge(Users)
    return (
        <div>
            <Greeting name="Ethan"/>
            <CardContainer>{sortedUsers.map(User => {
                return <UserCard {...User}/>
            })} </CardContainer>
        </div>
    );
};

export default App;
