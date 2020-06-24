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


const AddGuestForm = (props) => {
    const [ addGuest, setAddGuest ] = useState("");
console.log(addGuest, "addGuestForm data /////////////////")
    const handleChange = e => {
        setAddGuest({
            ...addGuest,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/potlucks/user/add", addGuest)
        .then(res => {
            console.log(res, "Add GuestForm  res //////////////")
            props.history.push("/potluckPage")
            setAddGuest("")
        })
        .catch(error => {
            console.log(error, "GuestForm Error//////////////")
        })
    }

    return (
        <GuestFormContainer> 
            <form onSubmit={handleSubmit}>
                <input placeholder="Add Guest"
                    type="text"
                    name="name"
                    value={props.name}
                    onChange={handleChange}
                />
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