import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Link } from "react-router-dom";


import AddItemCard from "./AddItemCard"


const AddItemForm = (props) => {
    const [ foodItems, setFoodItems ] = useState("");
console.log(foodItems, "foodItem data ! ! ! ! ! ! ! !")
    const handleChange = e => {
        setFoodItems({
            ...foodItems,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/potlucks/reqs/:id", foodItems)
        .then(res => {
            console.log(res, "Add Food Item Data...../// / / / ? ? ? ")
            props.history.push("/potluckPage")
            setFoodItems("")
        })
        .catch(error => {
            console.log(error, "food Item posting Error// / / / ? ? ? ")
        })
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <input placeholder="Please add food"
                    type="text"
                    name="foodName"
                    value={props.foodName}
                    onChange={handleChange}
                />
                <button> Add Food</button>
            </form>
            <div>
                <AddItemCard/>
            </div>
            <div>
                <Link to="/guestForm">Now, Please add Guests</Link>
            </div>
        </div>
    )
}
export default AddItemForm