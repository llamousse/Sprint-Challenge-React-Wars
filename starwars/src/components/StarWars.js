import React from "react";

function StarWars(props) {
    console.log(props);
    return(
        <div>Hello
            <h1>{props.name}</h1>
            <p>{props.birthday}</p>

        </div>
    );
}

export default StarWars;