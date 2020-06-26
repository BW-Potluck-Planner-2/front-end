import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import LinkContianer from './buttonstyle'

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


const PotluckPage = () => {



    return (
        <div>
            <Nav>
                <LinkContianer><Link to="/potluckForm"  style={{textDecoration: "none", color: "black"}}>Create New PotLuck</Link></LinkContianer>
            </Nav>       
                <PageContainer>
                   
                        <CreatePotluckCard/>
                    
                    <AddItemCard/>
                    <AddGuestCard/>            
                </PageContainer>
        </div>
    )
}
export default PotluckPage