import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

import { axiosWithAuth } from "../utils/axiosWithAuth"

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
console.log(props, " Props PotluckPage  ..........")

// const [ potluckInfo, setPotluckInfo ] = useState([])
// console.log(potluckInfo, " PotluckINfo here in PotluckPage X x X x X .................")

// useEffect(() => {
//     axiosWithAuth()
//     .get("/api/potlucks")
//     .then(res => {
//         console.log(res, " PotluckPage res data .........")
//         setPotluckInfo(res.data)
//     })
//     .catch(error => {
//         console.log(error, " APP error.........")
//     })

// }, [])

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