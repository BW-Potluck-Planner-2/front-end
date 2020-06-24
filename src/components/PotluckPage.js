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
display: flex;
width: 60%;
margin: auto;
justify-content: space-around;
`


const PotluckPage = () => {



    return (
        <div>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/potluckForm">Create New PotLuck</Link>
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