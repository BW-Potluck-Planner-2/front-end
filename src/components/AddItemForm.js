import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Link } from "react-router-dom";
import styled from "styled-components"

import AddItemCard from "./AddItemCard"

const ItemFormContainer = styled.div`
border: 1px solid gray;
width: 70%;
margin: 2rem auto;
height: auto;
`
const ItemCard = styled.div`
margin: 2rem;
`
const LinkBag = styled.div`
margin: 2rem;
display: flex;
justify-content: space-around;
`
const initialFoodItems = {
    potluckId: "",
    foodCategory: "",
    foodDescription: "",
    servings: "",
}

const AddItemForm = (props) => {
    const [ foodItems, setFoodItems ] = useState(initialFoodItems);
    console.log(foodItems, "foodItem data ! ! ! ! ! ! ! !")

    const handleChange = e => {
        setFoodItems({
            ...foodItems,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        const newFoodItems = {
            "potluckId": foodItems.potluckId,
            "foodCategory": foodItems.foodCategory,
            "foodDescription": foodItems.foodDescription,
            "servings": foodItems.servings,
        }

        e.preventDefault();
        axiosWithAuth()
        .post("/api/food", newFoodItems)
        .then(res => {
            console.log(res, "Add Food Item Data...../// / / / ? ? ? ")           
        })
        .catch(error => {
            console.log(error.message, "food Item posting Error// / / / ? ? ? ")
        })
        setFoodItems(initialFoodItems)
    }

    return (
        <ItemFormContainer> 
            <form onSubmit={handleSubmit}>
                <label>
                    <input placeholder="Potluck ID"
                        type="number"
                        name="potluckId"
                        value={foodItems.potluckId}
                        onChange={handleChange}
                    />                    
                </label>
                <label>
                    <input placeholder="Food Category"
                        type="text"
                        name="foodCategory"
                        value={foodItems.foodCategory}
                        onChange={handleChange}
                    />                    
                </label>
                <label>
                    <input placeholder="Food Description"
                        type="text"
                        name="foodDescription"
                        value={foodItems.foodDescription}
                        onChange={handleChange}
                    />                    
                </label>

                <label>
                    <input placeholder="Servings"
                        type="number"
                        name="servings"
                        value={foodItems.servings}
                        onChange={handleChange}
                    />                    
                </label>
                <button> Add Food</button>
            </form>

            <ItemCard>
                <AddItemCard/>
                <Link to="/guestForm">Now, Please add Guests</Link>    
            </ItemCard>
            <LinkBag>
                <Link to="/potluckForm">Go To Potluck Form</Link>
                <Link to="/potluckPage">Go To Potluck Page</Link>
            </LinkBag>
        </ItemFormContainer>
    )
}
export default AddItemForm