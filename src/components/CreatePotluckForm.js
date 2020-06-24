import React, { useState} from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

import CreatePotluckCard from "./CreatePotluckCard"
import { axiosWithAuth } from "../utils/axiosWithAuth"


const FormContainer = styled.div`
 width: 70%;
 height: 100%;
 margin: auto;
 display: flex;
 flex-direction: column;
 border: 1px solid gray;
`
const Form = styled.form`
display: flex;
flex-direction: column;
margin: 1rem auto;
`
const Button = styled.button`
width: 100px;
margin: 1rem auto;
`
const LinkBag = styled.div`
margin: 2rem;
display: flex;
justify-content: space-around;
/* width: auto;
text-align: center; */
`


const initialPotluckInfo = {
    id: Date.now(),
    locationName: "",
    locationAddress: "",
    locationStreet: "",
    locationCity: "",      
    locationState: "",
    locationPostCode: "",
    locationCountry: "",
}

const CreatePotluckForm = (props) => {
    console.log(props, "PpPpPpRrRrRrOoOoOoPpPpPpSsSsSs")
const [ newPotLuckInfo, setNewPotLuckInfo ] = useState(initialPotluckInfo)
console.log(newPotLuckInfo, " O o o o o O O O O o o o o")

const handleChange = e => {
    setNewPotLuckInfo({
        ...newPotLuckInfo,
        [e.target.name]: e.target.value,
    })
}

const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("/api/potlucks", newPotLuckInfo)
    .then(res => {
        console.log(res, "great! ! ! ! ! !  we have response")
        // props.history.push("/addItemPage")
        setNewPotLuckInfo(initialPotluckInfo)

    })
    .catch(error => {
        console.log(error, " Should Not get error!! fix it and get res :-(")
    })


}
    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <label>Potluck Name
                    <input  type= "text"
                            name= "locationName"
                            value= {props.locationName}
                            onChange = {handleChange}
                    /> </label>
                <label>Block No
                    <input  type= "number"
                            name= "locationAddress"
                            value= {props.locationAddress}
                            onChange = {handleChange}
                    /> </label>
                <label>Street
                    <input  type= "text"
                            name= "locationStreet"
                            value= {props.locationStreet}
                            onChange = {handleChange}
                    /> </label>
                <label>City
                    <input  type= "text"
                            name= "locationCity"
                            value= {props.locationCity}
                            onChange = {handleChange}
                    /> </label>
                <label>State
                    <input  type= "text"
                            name= "locationState"
                            value= {props.locationState}
                            onChange = {handleChange}
                    /> </label>
                <label>Postal Code
                    <input  type= "text"
                            name= "locationPostCode"
                            value= {props.locationPostCode}
                            onChange = {handleChange}
                    /> </label>
                <label>Country
                    <input  type= "text"
                            name= "locationCountry"
                            value= {props.locationCountry}
                            onChange = {handleChange}
                    /> </label>
                <Button>Submit</Button>
            </Form>
            <div>
                <CreatePotluckCard/>
                <Link to="/itemForm">Now, Please Go To Add Food</Link>                
            </div>
            <LinkBag>
                <div>
                    <Link to="/potluckForm">Go To Potluck Form</Link>
                </div>
                <div>
                    <Link to="/potluckPage">Go To Potluck Page</Link> 
                </div>
            </LinkBag>

        </FormContainer>
    )
}
export default CreatePotluckForm