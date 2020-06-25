import React, {useState, useEffect} from "react";
import {  useHistory } from "react-router-dom";

import {axiosWithAuth} from "../utils/axiosWithAuth"

const Potluck = (props) => {
    console.log(props, " What's in the Props:;:;:;:;:;:;:;:;:;:;:;:;:;:;")

    // const [potluck, setPotluck] = useState([{
    //   locationName: "",
    //   locationAddress: "",
    //   locationStreet: "",
    //   locationState: "",
    //   locationCity: "",  
    //   locationCountry: "",
    //   locationPostcode: "",
    // }])

    const history= useHistory();

    const potluck = props.potluckInfo.find(
      thing => `${thing.id}` === props.match.params.id
    );

      // useEffect(() => {
      //   axiosWithAuth()
      //     .get("/api/potlucks/")
      //     .then(res => {
      //       console.log(res, " Res in Potluck comp....get request")
      //       setPotluck(res.data)
          
      //     })
      //     .catch(error => {
      //       console.log(error)
      //     })
      // }, []);

    const HandleDelete = e => {
      e.preventDefault();
      axiosWithAuth()
      .delete(`/api/potlucks/${potluck.id}`)
      .then(res => {
          console.log(res, "DELETE UpdateForm  RES <<<<<<<>>>>>>>")
          props.setPotluckInfo(res.data)
          history.push("/potluckPage")
      })
      .catch(error =>{
          console.log(error, "DELETE UpdateForm ERROR <<<<<<<>>>>>>>")
      })

    }
      
      // const clickToEdit = e => {
      //   history.push(`/potlucks/updateForm/${potluck.id}`)
      // }

    return (
        <div>Edit/Delete potluck
          {/* {potluck.map((potluckInfo) => {
            return ( */}
              <div>
                <h3>{potluck.locationName}</h3>
                <p>{potluck.locationAddress}</p>
                <p>{potluck.locationStreet}</p>
                <p>{potluck.locationCity}</p>
                <p>{potluck.locationState}</p>
                <p>{potluck.locationPostcode}</p>
                <p>{potluck.locationCountry}</p>
              </div>
             {/* )
           })}
         */}
          <button onClick={() => history.push(`/potlucks/updateForm/${potluck.id}`)}>Edit Potluck</button>
          <button onClick={HandleDelete}>Delete Potluck</button>
        </div>
    )
}
export default Potluck
