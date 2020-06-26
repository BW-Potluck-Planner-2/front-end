import React, { useState, useEffect} from "react"
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components"


import { axiosWithAuth } from "../utils/axiosWithAuth"


const UpdateFormContainer = styled.div`
padding:2rem;
 width: 70%;
 height: 100%;
 margin: 2rem auto;
 display: flex;
 flex-direction: column;
 border: 1px solid gray;
 background: #FFB6C1;
 box-shadow: 0 0 15px 20px #FFC0CB;
 font-family:'Architects Daughter', cursive;
`
const Form = styled.form`
display: flex;
flex-direction: column;
margin: 1rem auto;
`
const Button = styled.button`
width: 200px;
margin: 1rem auto;
border-radius:1rem;
background: #CBE2B0;
&:hover{
      background: #CBE2B0;
      box-shadow: 0 0 5px 2px green;
   }
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

    const history = useHistory();
    const {id} = useParams();
    console.log(id, "999999999999999999999999999999999999")

    const [ editPotluck, setEditPotluck ] = useState({})
    console.log(editPotluck, " {{{{{{[[{{{{ o o o o O O O O o o o o}}}}]]}}}}}}")

    const handleChange = e => {
        setEditPotluck({
            ...editPotluck,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        axiosWithAuth()
        .get(`/api/potlucks/potluckById/${id}`)
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
        .put(`/api/putlucks/${id}`, editPotluck)
        .then(res => {
            console.log(res, "PUT UpdateForm RRS  <<<<<<<>>>>>>>")

            props.setPotluckInfo(res.data)//this updates state in APP component
            
        })
        .catch(error => {
            console.log(error, "PUT UpdateForm ERROPR <<<<<<<>>>>>>>")
        })
        history.push(`/potluckPage/${id}`)
   }


    return (
        <UpdateFormContainer> 
            <h2>Update Potluck</h2>
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
            {/* <LinkBag>
                 <LinkContainer>
                    <Link to="/itemForm" style={{textDecoration: "none", color: "black"}}> Go To Add Food</Link>                
                </LinkContainer>
            
                <LinkContainer>
                    <Link to="/potluckForm" style={{textDecoration: "none", color: "black"}}>Go To Potluck Form</Link>
                </LinkContainer>
                <LinkContainer>
                    <Link to="/itemForm" style={{textDecoration: "none", color: "black"}}> Go To Item Form</Link>
                </LinkContainer>
                <LinkContainer>
                    <Link to="/potluckPage" style={{textDecoration: "none", color: "black"}}>Go To Potluck Page</Link> 
                </LinkContainer>
            </LinkBag> */}

        </UpdateFormContainer>
    )
}
export default UpdatePotluckForm