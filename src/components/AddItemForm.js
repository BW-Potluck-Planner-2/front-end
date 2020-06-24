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
        <ItemFormContainer> 
            <form onSubmit={handleSubmit}>
                <input placeholder="Please add food"
                    type="text"
                    name="foodName"
                    value={props.foodName}
                    onChange={handleChange}
                />
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