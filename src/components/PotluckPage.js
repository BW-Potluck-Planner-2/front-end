import React from "react"


import CreatePotluckCard from "./CreatePotluckCard"
import AddItemCard from "./AddItemCard"




const PotluckPage = () => {

    return (
        <div>
            <CreatePotluckCard/>
            <AddItemCard/>
            <button> Delete Potluck</button>
        </div>
    )
}
export default PotluckPage