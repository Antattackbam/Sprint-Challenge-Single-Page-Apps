import React from "react";
import {Link} from "react-router-dom";
import  styles from "styled-components";

const Buttons = styles.button`
width: 150px;
height: 60px;
margin: 10px 0px 0px 30px;
background-color: #75acc7;
color: white;
border-radius: 10px;
border: 1px solid black;
`
const Page = styles.section`
display:flex;
justify-content:center;
align-items: center;
`

const Img = styles.img`
margin=left: 2%;`



export default function WelcomePage() {
  return (
    <Page className="welcome-page">
      
         
      <header>
      <h1>Welcome to the ultimate fan site!</h1>
        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />


        <Link to="/Characters"><Buttons>Characters
          </Buttons></Link>
          <Link to="/Search"><Buttons>Search
          </Buttons></Link>
       
      </header>
  
    </Page>
  );
}