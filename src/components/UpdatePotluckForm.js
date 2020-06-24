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
    id: Date.now(),
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
const [ item, setItem ] = useState(initialPotluck)
console.log(item, " {{{{{{[[{{{{ o o o o O O O O o o o o}}}}]]}}}}}}")
const { push } = useHistory();
const {id} = useParams()

const handleChange = e => {
    setItem({
        ...item,
        [e.target.name]: e.target.value,
    })
}

useEffect(() => {
    axiosWithAuth()
    .get(`/api/potlucks/${id}`)
    .then(res => {
        console.log(res, "GET UpdateForm RES <<<<<<<>>>>>>>")
        setItem(res.data)
    })
    .catch(error => {
        console.log(error, " GET UpdateForm ERROR <<<<<<<>>>>>>>")
    })
}, [id])



const updatePotluck = e => {
    e.preventDefault();
    axiosWithAuth()
    .put(`/api/potlucks/${id}`, item)
    .then(res => {
        console.log(res, "PUT UpdateForm RRS  <<<<<<<>>>>>>>")
        // props.history.push("/addItemPage")
        props.setItem(res.data)
        push(`/api/potlucks/${id}`)


    })
    .catch(error => {
        console.log(error, "PUT UpdateForm ERROPR <<<<<<<>>>>>>>")
    })


}

const deletePotluck = potluck => {
    axiosWithAuth()
    .delete(`/api/potlucks/${potluck.id}`)
    .then(res => {
        console.log(res, "DELETE UpdateForm  RES <<<<<<<>>>>>>>")
        props.setItem(res.data)
        push("/potluckPage")
    })
    .catch(error =>{
        console.log(error, "DELETE UpdateForm ERROR <<<<<<<>>>>>>>")
    })
}
    return (
        <UpdateFormContainer>
            <Form>
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
            </Form>
            <Button onClick={updatePotluck}>Update PotLuck</Button>
            <Button onClick={deletePotluck}>Delete PotLuck</Button>
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