import React, {useState,  useEffect} from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"
import { useHistory } from "react-router-dom"
// import Potluck from './Potluck'

import { axiosWithAuth } from "../utils/axiosWithAuth"
// import CreatePotluckForm from "./CreatePotluckForm"

const PotluckContainer = styled.div`
border: 1px solid gray;
width : 70%;
margin: 1rem auto;
font-family:'Architects Daughter', cursive;
`

const CreatePotluckCard = (props) => {
    console.log(props, "WWWWWWWWWWWWWWW")

    const history = useHistory();

    // const [ potluckInfo, setPotluckInfo ] = useState([])
    // console.log(potluckInfo, "Do We Have Potluck INfo here .........??????")

    // useEffect(() => {
    //     axiosWithAuth()
    //     .get("/api/potlucks")
    //     .then(res => {
    //         console.log(res, " We have res data potluck Info.........")
    //         setPotluckInfo(res.data)
    //     })
    //     .catch(error => {
    //         console.log(error, " ? / ? not getting POTLUCK INFO.........")
    //     })

    // }, [])

    function routeToItem(e, potluck) {
        e.preventDefault();
        history.push(`/potluckPage/${potluck.id}`);
      }

    return (
        <div>
            {/* <CreatePotluckForm/> */}

                <div>Potluck
                    {props.potluckInfo.map((potluck) => {
                        return (
                            <PotluckContainer key={potluck.id}>
                                {/* <Link to={`/potluckPage/${potluck.id}`}> */}
                                <div onClick={ev => routeToItem(ev, potluck)} key={potluck.id}>
                                    <h3>Potluck Name: {potluck.locationName} </h3>
                                    <p>Block Number: {potluck.locationAddress} </p>
                                    <p>Street: {potluck.locationStreet} </p>
                                    <p>City: {potluck.locationCity} </p>
                                    <p>State: {potluck.locationState} </p>
                                    <p>Postal Code: {potluck.locationPostcode} </p>
                                    <p>Country: {potluck.locationCountry} </p>
                                    </div>
                                {/* </Link> */}
                               
                            </PotluckContainer>
                        )})
                    }
                     {/* <AddItemCard/>
                    <AddGuestCard/>  */}
                    {/* <button onClick={deletePotluck}>Delete potluck</button> */}
                </div>

        </div>
    )
}
export default CreatePotluckCard