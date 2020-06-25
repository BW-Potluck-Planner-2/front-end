import React, {useState,  useEffect} from "react";
import styled from "styled-components"
import {Link, Switch, Route} from "react-router-dom"
import Potluck from './Potluck'

import { axiosWithAuth } from "../utils/axiosWithAuth"
// import CreatePotluckForm from "./CreatePotluckForm"

const PotluckContainer = styled.div`
border: 1px solid gray;
width : 70%;
margin: 1rem auto;
`

const CreatePotluckCard = (props) => {
    const [ potluckInfo, setPotluckInfo ] = useState([])
    console.log(potluckInfo, "Do We Have Potluck INfo here .........??????")

    useEffect(() => {
        axiosWithAuth()
        .get("/api/potlucks")
        .then(res => {
            console.log(res, " We have res data potluck Info.........")
            setPotluckInfo(res.data)
        })
        .catch(error => {
            console.log(error, " ? / ? not getting POTLUCK INFO.........")
        })

    }, [])

    // const deletePotluck = potluck => {
    //     axiosWithAuth()
    //     .delete(`/api/potlucks/${potluck.id}`)
    //     .then(res => {
    //         console.log(res, "delete RES.............")
    //         setPotluckInfo(potluckInfo.filter((potluckPot) => potluckPot.id !== potluck.id))
    //     })
    //     .catch(error =>{
    //         console.log(error, "delete ERROR.............")
    //     })
    // }


    return (
        <div>
            {/* <CreatePotluckForm/> */}
            <Switch>
                <Route exact path={'/potluckPage'}>
                <div>Potluck
                    {potluckInfo.map((potluck) => {
                        return (
                            <PotluckContainer key={potluck.id}>
                                <Link to={`/potluckPage/${potluck.id}`}>
                                    <h3>Potluck Name: {potluck.locationName} </h3>
                                    <p>Block Number: {potluck.locationAddress} </p>
                                    <p>Street: {potluck.locationStreet} </p>
                                    <p>City: {potluck.locationCity} </p>
                                    <p>State: {potluck.locationState} </p>
                                    <p>Postal Code: {potluck.locationPostcode} </p>
                                    <p>Country: {potluck.locationCountry} </p>
                                </Link>
                               
                            </PotluckContainer>
                        )})
                    }
                     {/* <AddItemCard/>
                    <AddGuestCard/>  */}
                    {/* <button onClick={deletePotluck}>Delete potluck</button> */}
                </div>
                </Route>
                {/* <Route exact path={`/potluckPage/${potluck.id}`}>
                    <Potluck/>
                </Route> */}
                </Switch>
        </div>
    )
}
export default CreatePotluckCard