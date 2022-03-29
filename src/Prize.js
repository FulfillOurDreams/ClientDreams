import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Checkbox } from "@mui/material";

const fetchAddorder = async (item) =>{
  await fetch('http://localhost:4500/user', { method: "POST", body: JSON.stringify(item),headers:{'Content-Type':'application/json'} }).catch(err=>{console.log("fail fetchAddorder")})
  return 0;
}
export default function Prize(props) {
  const onSelectedPrizeChange = async(e) => {
    let isChecked = e.target.checked;
    props.changeSelectedPrize(props.Id);
    if (isChecked){ 
      console.log("before")
      await fetchAddorder({item_name:props.name,price:props.price})
      console.log("after")
    }
      if(props.numOfSelectedPrizes===0){
      props.setNumOfSelectedPrizes(props.numOfSelectedPrizes + 1);
    }
    else props.setNumOfSelectedPrizes(props.numOfSelectedPrizes - 1);
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ textAlign: "center" }}>
      <CardMedia
        component="img"
        height="220"
        image={props.image}
        alt="prize image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₪{props.price}
        </Typography>
      </CardContent>
      <Checkbox onChange={onSelectedPrizeChange} />
    </Card>
  );
}
