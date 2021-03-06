import React, { useState} from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"

import CreatePotluckCard from "./CreatePotluckCard"
import { axiosWithAuth } from "../utils/axiosWithAuth"


const FormContainer = styled.div`
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
const Form = styled.form`
display: flex;
flex-direction: column;
margin: 1rem auto;
background: #FFB6C1;
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


const initialPotluckInfo = {
    locationName: "",
    locationAddress: "",
    locationStreet: "",
    locationState: "",
    locationCity: "",  
    locationCountry: "",
    locationPostcode: "",
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
        const newPotluck = {
            "locationName": newPotLuckInfo.locationName,
            "locationAddress": newPotLuckInfo.locationAddress,
            "locationStreet": newPotLuckInfo.locationStreet,
            "locationState": newPotLuckInfo.locationState,
            "locationCity": newPotLuckInfo.locationCity,
            "locationCountry": newPotLuckInfo.locationCountry,
            "locationPostcode": newPotLuckInfo.locationPostcode,
        };

        console.log(newPotluck, "NewPotluck data @ @ @ @ @ @ @ @ @ @")
        e.preventDefault();
            axiosWithAuth()
            .post("/api/potlucks", newPotluck)
            .then(res => {
                console.log(res, "great! ! ! ! ! !  we have response")
            })
            .catch(error => {
                console.log(error, " Should Not get error!! fix it and get res :-( ")
            })
            setNewPotLuckInfo(initialPotluckInfo)

    }
    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <label>Potluck Name
                    <input  type= "text"
                            name= "locationName"
                            value= {newPotLuckInfo.locationName}
                            onChange = {handleChange}
                    /> </label>
                <label>Block No
                    <input  type= "text"
                            name= "locationAddress"
                            value= {newPotLuckInfo.locationAddress}
                            onChange = {handleChange}
                    /> </label>
                <label>Street
                    <input  type= "text"
                            name= "locationStreet"
                            value= {newPotLuckInfo.locationStreet}
                            onChange = {handleChange}
                    /> </label>
                <label>City
                    <input  type= "text"
                            name= "locationCity"
                            value= {newPotLuckInfo.locationCity}
                            onChange = {handleChange}
                    /> </label>
                <label>State
                    <input  type= "text"
                            name= "locationState"
                            value= {newPotLuckInfo.locationState}
                            onChange = {handleChange}
                    /> </label>
                <label>Postal Code
                    <input  type= "text"
                            name= "locationPostcode"
                            value= {newPotLuckInfo.locationPostcode}
                            onChange = {handleChange}
                    /> </label>
                <label>Country
                    <input  type= "text"
                            name= "locationCountry"
                            value= {newPotLuckInfo.locationCountry}
                            onChange = {handleChange}
                    /> </label>
                <Button>Submit</Button>
            </Form>
            <div>
                <CreatePotluckCard />
                <LinkContainer>
                    <Link to="/itemForm" style={{textDecoration: "none", color: "black"}}>
                        Now, Please Go To Add Food</Link>                
                </LinkContainer>
            </div>
            <LinkBag>
                <LinkContainer>
                    <Link to="/potluckForm" style={{textDecoration: "none", color: "black"}}>
                        Go To Potluck Form</Link>
                </LinkContainer>
                <LinkContainer>
                    <Link to="/potluckPage" style={{textDecoration: "none", color: "black"}}>
                        Go To Potluck Page</Link> 
                </LinkContainer>
            </LinkBag>

        </FormContainer>
    )
}
export default CreatePotluckForm