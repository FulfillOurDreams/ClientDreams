import { Grid } from "@mui/material";
import React, { useState } from "react";
import AppBarPage from "./AppBarPage";
import RafflesTable from "./RafflesTable";
import Winner from "./Winner";

const fetchUsers=async(id)=>{
  //app.get('/winning/getUserSubscribe/:id',winningConroller.alluserbyproductcode)
  let users;
  await fetch(`http://localhost:4500/winning/getUserSubscribe/${id}`)
  .then(data=>data.json())
  .then(json=>users=json)
  .catch(err=>{console.log(err)})
  return users;
}

export default function RafflesPage(props) {
  const [currentRaffle, setCurrentRaffle] = useState(null);
  const [winner, setWinner] = useState(null);
  const onMakeRaffleClick = async(prizeName) => {
    setCurrentRaffle(prizeName);
    let id=props.prizesArray.find(item=>item.name==prizeName)._id;
    const users = await fetchUsers(id);
    // JSON.parse(localStorage.getItem("users")).filter((user) => {
    //   return user?.prizesList?.some((prize) => prize === prizeName);
//  });
    const rand = Math.floor(Math.random() * users.length);
    setWinner(users[rand]);
  };

  return (
    <>
      <AppBarPage></AppBarPage>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Winner
          firstName={winner?.firstName || ""}
          lastName={winner?.lastName || ""}
          currentPrize={currentRaffle}
        /> 
        <RafflesTable
          prizesArray={props.prizesArray}
          onMakeRaffleClick={onMakeRaffleClick}
        />
      </Grid>
    </>
  );
}
