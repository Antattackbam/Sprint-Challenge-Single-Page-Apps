import React from "react";
import styled from "styled-components"


  function CharacterCard(props) {
    console.log(props);
    
    const Card = styled.div `
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      background-color: #79bd82;
      margin: 5% 30% 5% 30%;
      border: solid 5px black;
    `
    const Head = styled.h2 `
      font-size: 42px;
      display: flex;
      justify-content: center;
    `

    const Specs = styled.p`
      display: flex;
      font-size: 20px;
      color: white;
      justify-content: center;
      padding: 0px;
      margin: 5px;
    `
    const Fields = styled.p`
    display: flex;
    font-size: 20px;
    color: black;
    padding: 0px;
    margin: 5px;
    justify-content: center;
  `
    const Img = styled.img`
    border-radius: 50%;
    `


  return (
    <Card>
    <Head> {props.name}</Head> 
    <img src={props.image} alt="img of character"/>
    <Fields>Species:</Fields> <Specs>{props.species} </Specs>
    <Fields>Status:</Fields> <Specs>{props.status} </Specs>
    <Fields>Location: </Fields><Specs>{props.location}</Specs>
  </Card>
  )


  
}
export default CharacterCard;