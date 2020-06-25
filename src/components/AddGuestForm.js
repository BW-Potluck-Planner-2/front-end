import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Link } from "react-router-dom";
import styled from "styled-components"

import AddGuestCard from "./AddGuestCard"

const GuestFormContainer = styled.div`
border: 1px solid gray;
width: 70%;
margin: 2rem auto;
height: auto;
`
const GuestCard = styled.div`
margin: 2rem;
`
const LinkBag = styled.div`
margin: 2rem;
display: flex;
justify-content: space-around;
`
const initialGestInfo = {
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
            "potluckId": Date.now(),
            "role": addGuest.role,
            "email": addGuest.email,
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
        setAddGuest("")
    }

    return (
        <GuestFormContainer> 
            <form onSubmit={GuestHandleSubmit}>
                <label>Role:  
                <input 
                        type="text"
                        name="role"
                        value={addGuest.role}
                        onChange={GuestHandleChange}
                    /> </label> 
                
                <label>Email:  
                    <input 
                        type="text"
                        name="email"
                        value={addGuest.email}
                        onChange={GuestHandleChange}
                    /> </label>

                <button> Add Guest</button>
            </form>
            <GuestCard>
                <AddGuestCard/>
                <Link to="/potluckPage">Back To Potluck Page</Link>                
            </GuestCard>
            <LinkBag>
            <Link to="/potluckForm">Go To Potluck Form</Link>
            <Link to="/itemForm">Go To Add Item Form</Link>
            </LinkBag>
        </GuestFormContainer>
    )
}
export default AddGuestForm