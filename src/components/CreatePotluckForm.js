import React, { useState} from "react"
import { Link } from "react-router-dom";


import CreatePotluckCard from "./CreatePotluckCard"
import { axiosWithAuth } from "../utils/axiosWithAuth"



const CreatePotluckForm = (props) => {
    console.log(props, "PpPpPpRrRrRrOoOoOoPpPpPpSsSsSs")
const [ newPotLuckInfo, setNewPotLuckInfo ] = useState({
    locationName: "",
    locationAddress: "",
    locationStreet: "",
    locationCity: "",      
    locationState: "",
    locationPostCode: "",
    locationCountry: "",
})
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
        props.history.push("/addItemPage")
        setNewPotLuckInfo({
            locationName: "",
            locationAddress: "",
            locationStreet: "",
            locationCity: "",      
            locationState: "",
            locationPostCode: "",
            locationCountry: "",
        })

    })
    .catch(error => {
        console.log(error, " Should Not get error!! fix it and get res :-(")
    })


}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Potluck Name</label>
                    <input  type= "text"
                            name= "locationName"
                            value= {props.locationName}
                            onChange = {handleChange}
                    />
                <label>Block No</label>
                    <input  type= "number"
                            name= "locationAddress"
                            value= {props.locationAddress}
                            onChange = {handleChange}
                    />
                <label>Street</label>
                    <input  type= "text"
                            name= "locationStreet"
                            value= {props.locationStreet}
                            onChange = {handleChange}
                    />
                <label>City</label>
                    <input  type= "text"
                            name= "locationCity"
                            value= {props.locationCity}
                            onChange = {handleChange}
                    />
                <label>State</label>
                    <input  type= "text"
                            name= "locationState"
                            value= {props.locationState}
                            onChange = {handleChange}
                    />
                <label>Postal Code</label>
                    <input  type= "text"
                            name= "locationPostCode"
                            value= {props.locationPostCode}
                            onChange = {handleChange}
                    />
                <label>Country</label>
                    <input  type= "text"
                            name= "locationCountry"
                            value= {props.locationCountry}
                            onChange = {handleChange}
                    />
                <button>Submit</button>
            </form>
            <div>
                <CreatePotluckCard/>
            </div>
            <div>
                 <Link to="/itemForm">Now, Please Go To Add Food</Link>                
            </div>

        </div>
    )
}
export default CreatePotluckForm