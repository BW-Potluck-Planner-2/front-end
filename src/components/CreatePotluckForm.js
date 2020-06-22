import React, { useState} from "react"


import { axiosWithAuth } from "../utils/axiosWithAuth"



const CreatePotluckForm = (props) => {
const [ newPotLuckInfo, setNewPotLuckInfo ] = useState({
    potluckName: "",
    location: "",
    date: "",
    time: "",
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
    .post("/potluckInfo", newPotLuckInfo)
    .then(res => {
        console.log(res, "great! ! ! ! ! !  we have response")
        props.history.push("/addItemPage")
    })
    .catch(error => {
        console.log(error, " Not error fix it and get res :-)")
    })


}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Potluck Name</label>
                    <input  type= "text"
                            name= "potluckName"
                            value= {props.potluckName}
                            onChange = {handleChange}
                    />
                <label>Location</label>
                    <input  type= "text"
                            name= "location"
                            value= {props.location}
                            onChange = {handleChange}
                    />
                <label>Date</label>
                    <input  type= "date"
                            name= "date"
                            value= {props.date}
                            onChange = {handleChange}
                    />
                <label>Time</label>
                    <input  type= "time"
                            name= "time"
                            value= {props.time}
                            onChange = {handleChange}
                    />
            
                <button>Submit</button>

            </form>
        </div>
    )
}
export default CreatePotluckForm