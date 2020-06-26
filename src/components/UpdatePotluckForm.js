import React, { useState, useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components"


import { axiosWithAuth } from "../utils/axiosWithAuth"


const UpdateFormContainer = styled.div`
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
width: 200px;
margin: 1rem auto;
`
const LinkBag = styled.div`
margin: 2rem;
display: flex;
justify-content: space-around;
/* width: auto;
text-align: center; */
`


const initialPotluck = {
    locationName: "",
    locationAddress: "",
    locationStreet: "",
    locationCity: "",      
    locationState: "",
    locationPostCode: "",
    locationCountry: "",
}

const UpdatePotluckForm = (props) => {
    console.log(props, "W H A T   W E  H A V E   H E R E ? ? ? ")

    const { push } = useHistory();
    const {id} = useParams();

    const [ editPotluck, setEditPotluck ] = useState(initialPotluck)
    console.log(editPotluck, " {{{{{{[[{{{{ o o o o O O O O o o o o}}}}]]}}}}}}")

    const handleChange = e => {
        setEditPotluck({
            ...editPotluck,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        axiosWithAuth()
        .get(`/api/itemById/${id}`)
        .then(res => {
            console.log(res, "GET UpdateForm RES <<<<<<<>>>>>>>")
            setEditPotluck(res.data)
        })
        .catch(error => {
            console.log(error, " GET UpdateForm ERROR <<<<<<<>>>>>>>")
        })
    }, [id])



    const updateHandleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/api/potlucks/${id}`, editPotluck)
        .then(res => {
            console.log(res, "PUT UpdateForm RRS  <<<<<<<>>>>>>>")
            props.setPotluckInfo(res.data)//this updates state in APP component
            push(`/potluckPage/${id}`)
        })
        .catch(error => {
            console.log(error, "PUT UpdateForm ERROPR <<<<<<<>>>>>>>")
        })
   }


    return (
        <UpdateFormContainer>
            <Form onSubmit={updateHandleSubmit}>
                <label>Potluck Name
                    <input  type= "text"
                            name= "locationName"
                            value= {editPotluck.locationName}
                            onChange = {handleChange}
                    /> </label>
                <label>Block No
                    <input  type= "number"
                            name= "locationAddress"
                            value= {editPotluck.locationAddress}
                            onChange = {handleChange}
                    /> </label>
                <label>Street
                    <input  type= "text"
                            name= "locationStreet"
                            value= {editPotluck.locationStreet}
                            onChange = {handleChange}
                    /> </label>
                <label>City
                    <input  type= "text"
                            name= "locationCity"
                            value= {editPotluck.locationCity}
                            onChange = {handleChange}
                    /> </label>
                <label>State
                    <input  type= "text"
                            name= "locationState"
                            value= {editPotluck.locationState}
                            onChange = {handleChange}
                    /> </label>
                <label>Postal Code
                    <input  type= "text"
                            name= "locationPostCode"
                            value= {editPotluck.locationPostCode}
                            onChange = {handleChange}
                    /> </label>
                <label>Country
                    <input  type= "text"
                            name= "locationCountry"
                            value= {editPotluck.locationCountry}
                            onChange = {handleChange}
                    /> </label>
                <Button >Update</Button>
            </Form>
            
            <div>
                <Link to="/itemForm">Now, Please Go To Add Food</Link>                
            </div>
            <LinkBag>
                <div>
                    <Link to="/potluckForm">Go To Potluck Form</Link>
                </div>
                <div>
                    <Link to="/itemForm"> Go To Item Form</Link>
                </div>
                <div>
                    <Link to="/potluckPage">Go To Potluck Page</Link> 
                </div>
            </LinkBag>

        </UpdateFormContainer>
    )
}
export default UpdatePotluckForm