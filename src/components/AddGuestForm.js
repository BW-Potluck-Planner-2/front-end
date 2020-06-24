import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Link } from "react-router-dom";


import AddGuestCard from "./AddGuestCard"


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
        <div> 
            <form onSubmit={handleSubmit}>
                <input placeholder="Please add food"
                    type="text"
                    name="name"
                    value={props.name}
                    onChange={handleChange}
                />
                <button> Add Guest</button>
            </form>
            <div>
                <AddGuestCard/>
            </div>
            <div>
                <Link to="/potluckPage">Back To Potluck Form</Link>
            </div>
        </div>
    )
}
export default AddGuestForm