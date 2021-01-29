import React, { useState, useEffect } from "react";
// import styled from "styled-components"

import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddItemCard = (props) => {
  const [items, setItems] = useState([]);
  console.log(items, "Do we Have Item Data??  ?? ??  ??");

  useEffect(() => {
    axiosWithAuth()
      .get("/items")
      .then((res) => {
        console.log(res, "Item Res Data ??????");
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error, " Item Error ??????");
      });
  }, []);

  return (
    <div>
      <div>
        Food Items
        {items.map((item) => {
          return (
            <div>
              <p>PotluckId: {item.potluckId}</p>
              <p>Food Category: {item.foodCategory}</p>
              <p>Food Description:{item.foodDescription}</p>
              <p>Servings: {item.servings} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AddItemCard;
