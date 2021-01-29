import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const PotluckInfo = styled.div`
  padding: 2rem;
  width: 70%;
  height: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  background: #ffb6c1;
  box-shadow: 0 0 15px 20px #ffc0cb;
  font-family: "Architects Daughter", cursive;
`;
const Button = styled.button`
  width: 200px;
  margin: 1rem auto;
  border-radius: 1rem;
  background: #cbe2b0;
  &:hover {
    background: #cbe2b0;
    box-shadow: 0 0 5px 2px green;
  }
`;

const Potluck = (props) => {
  console.log(
    props,
    " What's in the Props This is potluck component:;:;:;:;:;:;:;:;:;:;:;:;:;:;"
  );

  const history = useHistory();

  const id = props.location.pathname.slice(13, 15);
  console.log(id, "???????????????????????????????");

  const potluck = props.potluckInfo.find(
    (thing) => {
      console.log(`${thing.id}`, "::::::::::");
      if (`${thing.id}` === id) {
        return `${thing.id}`;
      }
    }
    // thing.id === id
  );
  console.log(potluck, ")O)O)O)O)O)O)O)O)O)O");
  // console.log(potluck[0], "{{{{{{{{{{{{}}}}}}}}}}}}")

  if (!props.potluckInfo.length || !potluck) {
    return <h2>Loading potluck data...</h2>;
  }

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

  const handleDelete = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/api/potlucks/${potluck.id}`)
      .then((res) => {
        console.log(res, "DELETE UpdateForm  RES <<<<<<<>>>>>>>");
        props.setPotluckInfo(res.data);
      })
      .catch((error) => {
        console.log(error, "DELETE UpdateForm ERROR <<<<<<<>>>>>>>");
      });
    history.push("/potluckPage");
  };

  // const clickToEdit = e => {
  //   history.push(`/potlucks/updateForm/${potluck.id}`)
  // }

  return (
    <div>
      <PotluckInfo>
        <h2>Edit/Delete potluck</h2>

        <div>
          <h3>Potluck Name: {potluck.locationName}</h3>
          <p>Block Number: {potluck.locationAddress}</p>
          <p> Street: {potluck.locationStreet}</p>
          <p> City: {potluck.locationCity}</p>
          <p>State: {potluck.locationState}</p>
          <p> Postal Code: {potluck.locationPostcode}</p>
          <p>Country: {potluck.locationCountry}</p>
        </div>

        <Button
          onClick={() => history.push(`/potluckPage/updateForm/${potluck.id}`)}
        >
          Edit Potluck
        </Button>
        <Button onClick={handleDelete}>Delete Potluck</Button>
      </PotluckInfo>
    </div>
  );
};
export default Potluck;
