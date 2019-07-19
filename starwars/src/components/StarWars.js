import React from "react";
import { Container, Body } from "./StyledWidgets.js";

function StarWars(props) {
    console.log(props);
    return(
        <Container>
            <h1>{props.name}</h1>
            <Body>
                <p>Birth Year: {props.birthday}</p>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
                <p>Skin Color: {props.skinColor}</p>
                <p>Eye Color: {props.eyeColor}</p>                
            </Body>
        </Container>
    );
}

export default StarWars;