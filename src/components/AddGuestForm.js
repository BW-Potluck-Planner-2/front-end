import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Link } from "react-router-dom";
import styled from "styled-components"

import AddGuestCard from "./AddGuestCard"

const GuestFormContainer = styled.div`
padding:2rem;
 width: 70%;
 height: 100%;
 margin: 2rem auto;
 display: flex;
 flex-direction: column;
 border: 1px solid gray;
 background: #FFB6C1;
 box-shadow: 0 0 15px 20px #FFC0CB;
`
const GuestCard = styled.div`
margin: 2rem;
`
const LinkBag = styled.div`
margin: 2rem;
display: flex;
justify-content: space-around;
`
const LinkContainer = styled.div`
  margin: 1rem auto;
  padding: 2px 10px;
  background-color: #CBE2B0;
  border: 1px dashed black;
  border-radius: 12px;
  &:hover{
      background: green;
      box-shadow: 0 0 5px 2px green;
   }
`


const initialGestInfo = {
    potluckId: "",
    role: "",
    email: "",
}


const AddGuestForm = (props) => {
    const [ addGuest, setAddGuest ] = useState(initialGestInfo);
console.log(addGuest, "addGuestForm data /////////////////")

    const GuestHandleChange = e => {
        setAddGuest({
            ...addGuest,
            [e.target.name]: e.target.value
        })
    }

    const GuestHandleSubmit = e => {
        const newGuestInfo = {
            potluckId: addGuest.potluckId,
            role: addGuest.role,
            email: addGuest.email,
        }

        e.preventDefault();
        axiosWithAuth()
        .post("/api/potlucks/user/add", newGuestInfo)
        .then(res => {
            console.log(res, "Add GuestForm  res //////////////")          
        })
        .catch(error => {
            console.log(error, "GuestForm Error//////////////")
        })
        setAddGuest(initialGestInfo)
    }

    return (
        <GuestFormContainer> 
            <form onSubmit={GuestHandleSubmit}>
                <label>
                    <input placeholder="Potluck ID"
                        type="number"
                        name="potluckId"
                        value={addGuest.potluckId}
                        onChange={GuestHandleChange}
                    />                    
                </label>
                <label>Role:  
                <input 
                        type="text"
                        name="role"
                        value={addGuest.role}
                        onChange={GuestHandleChange}
                    /> </label> 
                
                <label>Email:  
                    <input 
                        type="email"
                        name="email"
                        value={addGuest.email}
                        onChange={GuestHandleChange}
                    /> </label>

                <button> Add Guest</button>
            </form>
            <GuestCard>
                <AddGuestCard/>
                <LinkContainer>
                    <Link to="/potluckPage">Back To Potluck Page</Link>                
                </LinkContainer>
            </GuestCard>
            <LinkBag>
                <LinkContainer>
                    <Link to="/potluckForm">Go To Potluck Form</Link>
                </LinkContainer>
                <LinkContainer>
                    <Link to="/itemForm">Go To Add Item Form</Link>
                </LinkContainer>
            </LinkBag>
        </GuestFormContainer>
    )
}
export default AddGuestForm