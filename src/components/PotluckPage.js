import React from "react"
import { Link } from "react-router-dom";


import CreatePotluckCard from "./CreatePotluckCard"
import AddItemCard from "./AddItemCard"
import AddGuestCard from "./AddGuestCard"




const PotluckPage = () => {

    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <Link to="/potluckForm">Create New PotLuck</Link>
            <CreatePotluckCard/>
            <AddItemCard/>
            <AddGuestCard/>
            <button> Delete Potluck</button>
        </div>
    )
}
export default PotluckPage