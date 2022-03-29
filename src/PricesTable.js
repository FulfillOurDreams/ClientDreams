import {
  TableContainer,
  TableCell,
  TableBody,
  TableHead,
  Table,
  TableRow,
  Button,
  Card,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useState } from "react";

const fetchGetArrOrder = async (id) =>{
  let arr;
  await fetch('http://localhost:4500/user/'+id, { method: "GET",headers:{'Content-Type':'application/json'} })
  .then(res=>arr=res)
  .catch(err=>{console.log("fail fetchAddorder")})
  return arr;
}
export default function PricesTable(props) {
  const [prizes, setPrizes] = useState(null
  );
  useEffect(async()=>{
    let arrOrder=await  fetchGetArrOrder(localStorage.getItem("id"))
    setPrizes(arrOrder)
  })
 
  
  const sort = () => {
    const all = [...prizes];
    setPrizes(all.sort((s1, s2) => s1.name.localeCompare(s2.name)));
  };

  return (
    <Card sx={{ maxWidth: "50vw", margin: "auto" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">מחיר</TableCell>
              <TableCell align="center">כמות</TableCell>
              <TableCell align="center">
                <Button
                  onClick={sort}
                  variant="outlined"
                  startIcon={<ArrowDropDownIcon />}
                >
                  (מיין) פריט
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prizes.map((item) => (
              <TableRow key={item.ID}>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center">{item.count}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
