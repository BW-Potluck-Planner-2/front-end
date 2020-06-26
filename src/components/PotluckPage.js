import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

import CreatePotluckCard from "./CreatePotluckCard"
import AddItemCard from "./AddItemCard"
import AddGuestCard from "./AddGuestCard"

const PotluckPageContainer = styled.div`
background: #F0E68C; 
padding: 2rem;
margin: auto;
border: 1px dashed black;
height: 100%;
`

const PageContainer = styled.div`
margin: 2rem;
padding: 2rem;
`
const Nav = styled.nav`
padding: 10px;
width: 200px;
margin: auto;
text-decoration: none;
border: 1px dashed black;
background: #CBE2B0;
border-radius: 2rem;
&:hover{
      background: green;
      box-shadow: 0 0 5px 2px green;
   }
`


const PotluckPage = (props) => {
console.log(props, "Potluck Page Props ..........")


    return (
        <PotluckPageContainer>
            <Nav>
                <Link to="/potluckForm" style={{textDecoration: "none", color: "black"}}>Create New PotLuck</Link>
            </Nav>       
                <PageContainer>
                   
                    <CreatePotluckCard potluckInfo={props.potluckInfo}/>
                    
                    <AddItemCard/>
                    <AddGuestCard/>            
                </PageContainer>
        </PotluckPageContainer>
    )
}
export default PotluckPage