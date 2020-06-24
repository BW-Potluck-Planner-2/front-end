import React, {useState,  useEffect} from "react";
// import styled from "styled-components"

import { axiosWithAuth } from "../utils/axiosWithAuth"


const AddItemCard = (props) => {
const [ guest, setGuest ] = useState([])
console.log(guest, "Do we Have guestCard Data::::::::::::::")

useEffect(() => {
    axiosWithAuth()
    .get("/api/potlucks/user/add")
    .then(res => {
        console.log(res, "Guest Card Res Data :::::::::::::")
        setGuest(res.data)
    })
    .catch(error => {
        console.log(error, " Guest Card Error::::::::::::::")
    })

}, [])

    return (
        <div>
                <div>Guests
                    {guest.map((newGuest) => {
                        return (
                            <div>{newGuest.name}</div>
                        )
                    })}
                </div>
        </div>
    )
}
export default AddItemCard