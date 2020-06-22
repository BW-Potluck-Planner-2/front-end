import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"



const addItemForm = (props) => {
    const [ foodItems, setFoodItems ] = useState({
        foodName: "",
    });

const handleChange = e => {
    setFoodItems({
        ...foodItems,
        [e.target.name]: e.target.value
    })
}

const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post("/foodItems", foodItems)
    .then(res => {
        console.log(res, "Add Food Item Data...../// / / / ? ? ? ")
        props.history.push("/potluckPage")
    })
    .catch(error => {
        console.log(error, "food Item posting Error// / / / ? ? ? ")
    })


    return (
        <div>Food Items
            <form onSubmit={handleSubmit}>
                <input placeHolder="Please add food"
                       type="text"
                       name="foodName"
                       value={props.foodName}
                       onChange={handleChange}
                />
            <button> Add Food</button>
            </form>

        </div>
    )


}
export default addItemForm