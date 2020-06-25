import React, {useState, useEffect} from "react";
import {  useHistory } from "react-router-dom";

import {axiosWithAuth} from "../utils/axiosWithAuth"

const Potluck = (props) => {
    console.log(props, " What's in the Props:;:;:;:;:;:;:;:;:;:;:;:;:;:;")

    const [potluck, setPotluck] = useState([{
      locationName: "",
      locationAddress: "",
      locationStreet: "",
      locationState: "",
      locationCity: "",  
      locationCountry: "",
      locationPostcode: "",
    }])

    const { push } = useHistory();

    // const item = props.potluck.find(
    //   thing => `${thing.id}` === props.match.params.id
    // );

      useEffect(() => {
        axiosWithAuth()
          .get("/api/potlucks/")
          .then(res => {
            console.log(res, " Res in Potluck comp....get request")
            setPotluck(res.data)
          
          })
          .catch(error => {
            console.log(error)
          })
      }, []);

      const HandleDelete = potluck => {
        axiosWithAuth()
        .delete(`/api/potlucks/${potluck.id}`)
        .then(res => {
            console.log(res, "DELETE UpdateForm  RES <<<<<<<>>>>>>>")
            props.setPotluck(res.data)
            push("/potluckPage")
        })
        .catch(error =>{
            console.log(error, "DELETE UpdateForm ERROR <<<<<<<>>>>>>>")
        })

    }
      
      const clickToEdit = e => {
        e.preventDefault();
        push(`/potlucks/updateForm/${potluck.id}`)
      }

    return (
        <div>Edit/Delete potluck
          {potluck.map((potluckInfo) => {
            return (
              <div>
                <h3>{potluckInfo.locationName}</h3>
                <p>{potluckInfo.locationAddress}</p>
                <p>{potluckInfo.locationStreet}</p>
                <p>{potluckInfo.locationCity}</p>
                <p>{potluckInfo.locationState}</p>
                <p>{potluckInfo.locationPostcode}</p>
                <p>{potluckInfo.locationCountry}</p>
              </div>
             )
           })}
        
          <button onClick={clickToEdit}>Edit Potluck</button>
          <button onClick={HandleDelete}>Delete Potluck</button>
        </div>
    )
}
export default Potluck
