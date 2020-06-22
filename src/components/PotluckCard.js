import React, {useState,  useEffect} from "react";



import { axiosWithAuth } from "../utils/axiosWithAuth"
import CreatePotluckForm from "./CreatePotluckForm"


const PotluckCard = (props) => {
    const [ potluckInfo, setPotluckInfo ] = useState([])
    console.log(potluckInfo, "Do We Have Potluck INfo here .........??????")

    useEffect(() => {
        axiosWithAuth().get("/potluckInfo")
        .then(res => {
            console.log(res, " We have res data potluck Info.........")
            setPotluckInfo(res.data)
        })
        .catch(error => {
            console.log(error, " ? / ? not getting POTLUCK INFO.........")
        })

    }, [])

    return (
        <div>
            <CreatePotluckForm/>
                <div>
                    {potluckInfo.map((potluck) => {
                        return (
                            <div key={potluck.id}>
                                <h3>Potluck Name: {potluck.potluckName} </h3>
                                <p>Location: {potluck.location} </p>
                                <p> Date: {potluck.date} </p>
                                <p>Time: {potluck.time} </p>
                            </div>
                        )})
                    }
                </div>
        </div>
    )
}
export default CreatePotluckForm