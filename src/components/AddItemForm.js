import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Link, useParams } from "react-router-dom";
import styled from "styled-components"

import AddItemCard from "./AddItemCard"

const ItemFormContainer = styled.div`
padding:2rem;
 width: 70%;
 height: 100%;
 margin: 2rem auto;
 display: flex;
 flex-direction: column;
 border: 1px solid gray;
 background: #FFB6C1;
 box-shadow: 0 0 15px 20px #FFC0CB;
`
const ItemCard = styled.div`
margin: 2rem;
`
const LinkBag = styled.div`
margin: 2rem;
display: flex;
justify-content: space-around;
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

const initialFoodItems = {
    potluckId: Date.now(),
    foodCategory: "",
    foodDescription: "",
    servings: "",
}

const AddItemForm = (props) => {

    const {id} = useParams();
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
            "potluckId": Date.now(),
            "foodCategory": foodItems.foodCategory,
            "foodDescription": foodItems.foodDescription,
            "servings": foodItems.servings,
        }

        e.preventDefault();
        axiosWithAuth()
        .post(`/api/potlucks/reqs/${id}`, newFoodItems)
        .then(res => {
            console.log(res, "Add Food Item Data...../// / / / ? ? ? ")
            setFoodItems(initialFoodItems)           
        })
        .catch(error => {
            console.log(error.message, "food Item posting Error// / / / ? ? ? ")
        })
        
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
                <Button> Add Food</Button>
            </form>
            <div>
                <AddItemCard/>
                <LinkContainer>
                    <Link to="/guestForm" style={{textDecoration: "none", color: "black"}}>
                        Now, Please Add Guest</Link>                
                </LinkContainer>               
            </div>
            <LinkBag>
                <LinkContainer>
                    <Link to="/potluckForm" style={{textDecoration: "none", color: "black"}}>Go To Potluck Form</Link>
                </LinkContainer>
                <LinkContainer> 
                    <Link to="/potluckPage" style={{textDecoration: "none", color: "black"}}>Go To Potluck Page</Link>
                </LinkContainer>            
            </LinkBag>

        </ItemFormContainer>
    )
}
export default AddItemForm