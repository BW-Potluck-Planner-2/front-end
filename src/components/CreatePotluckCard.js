import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CreatePotluckForm from "./CreatePotluckForm.js";

import { axiosWithAuth } from "../utils/axiosWithAuth";
// import CreatePotluckForm from "./CreatePotluckForm"

const PotluckContainer = styled.div`
  border: 1px solid gray;
  width: 70%;
  margin: 1rem auto;
  font-family: "Architects Daughter", cursive;
`;

const CreatePotluckCard = (props) => {
  console.log(props.potluckInfo, "WWWWWWWWWWWWWWW");

  const history = useHistory();

  function routeToItem(e, potluck) {
    e.preventDefault();
    history.push(`/potluckPage/${potluck.id}`);
  }

  return (
    <div>
      <h1 style={{ fontSize: "20px" }}> Hello Hello </h1>

      <div>
        Potluck
        {props.potluckInfo.map((potluck) => {
          console.log(potluck, "{{{{{{{==========}}}}}}}");
          return (
            <PotluckContainer key={potluck.id}>
              <div onClick={(ev) => routeToItem(ev, potluck)} key={potluck.id}>
                <h4>{potluck.name} </h4>
                <p>Location: {potluck.location} </p>
                <p>Date: {potluck.date} </p>
                <p>Time: {potluck.time} </p>
              </div>
            </PotluckContainer>
          );
        })}
        {/* <AddItemCard/>
                    <AddGuestCard/>  */}
        {/* <button onClick={deletePotluck}>Delete potluck</button> */}
      </div>
    </div>
  );
};
export default CreatePotluckCard;

// const [potluckInfo, setPotluckInfo] = useState([]);
// console.log(potluckInfo, "Do We Have Potluck INfo here .........??????");

// useEffect(() => {
//   axiosWithAuth()
//     .get("/potlucks")
//     .then((res) => {
//       console.log(res, " We have res data potluck Info.........");

//       var potluckResults = [];

//       res.data.map((potResult) => {
//         potResult.push(potluckResults);
//         if (res.data) {
//           setPotluckInfo(potluckResults);
//         } else {
//           setPotluckInfo([]);
//         }
//       });
//     })
//     .catch((error) => {
//       console.log(error, " ? / ? not getting POTLUCK INFO.........");
//     });
// }, []);
