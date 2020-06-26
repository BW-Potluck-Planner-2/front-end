import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

import CreatePotluckCard from "./CreatePotluckCard"
import AddItemCard from "./AddItemCard"
import AddGuestCard from "./AddGuestCard"

const PageContainer = styled.div`
margin: 2rem;
`
const Nav = styled.nav`
padding: 10px;
width: 200px;
margin: auto;
text-decoration: none;
border: 1px dashed black;
background: #CBE2B0;
border-radius: 2rem;
`


const PotluckPage = (props) => {
console.log(props, "Potluck Page Props ..........")


    return (
        <div>
            <Nav>
                <Link to="/potluckForm">Create New PotLuck</Link>
            </Nav>       
                <PageContainer>
                   
                    <CreatePotluckCard potluckInfo={props.potluckInfo}/>
                    
                    <AddItemCard/>
                    <AddGuestCard/>            
                </PageContainer>
        </div>
    )
}
export default PotluckPage