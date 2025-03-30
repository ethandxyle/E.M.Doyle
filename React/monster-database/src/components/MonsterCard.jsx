import React from "react";

const MonsterCard = (props) => {
    let{firstName,lastName}=props
    return (
        <div className="Monster-Card">
            <h1>{firstName}{lastName}</h1>
            <p>Age={age}</p>
            <p>Type={type}</p>
            <p>MoreInfo={moreInfo}</p>
        </div>
    )
}
export default MonsterCard