import React, {useState,  useEffect} from "react";
// import styled from "styled-components"

import { axiosWithAuth } from "../utils/axiosWithAuth"


const AddItemCard = (props) => {
const [ items, setItems ] = useState([])
console.log(items, "Do we Have Item Data??  ?? ??  ??")

useEffect(() => {
    axiosWithAuth()
    .get("/api/potlucks/reqs/:id")
    .then(res => {
        console.log(res, "Item Res Data ??????")
        setItems(res.data)
    })
    .catch(error => {
        console.log(error, " Item Error ??????")
    })

}, [])

    return (
        <div>
                <div>Food Items
                    {items.map((item) => {
                        return (
                            <div>{item.foodName}</div>
                        )
                    })}
                </div>
        </div>
    )
}
export default AddItemCard