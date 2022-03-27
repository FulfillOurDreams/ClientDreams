import React, { useEffect,useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PaymentPage from "./PaymentPage";
import PrizesPage from "./PrizesPage";
import RafflesPage from "./RafflesPage";

const fetchArr = async () => {
  let data;
  await fetch('http://localhost:4500/item')
  .then(response =>  response.json())
  .then(dat =>  data = dat);
  return data;

}

export default function App() {
  const [prizesArray,setPrizeArray] = useState(null);

  useEffect(async() => {
    let newPrizes = await fetchArr();
    setPrizeArray(newPrizes);
  },[])

  return (
    <Routes>
      <Route path="Prizes" element={<PrizesPage prizesArray={prizesArray} />} />
      <Route
        path="PaymentPage"
        element={<PaymentPage prizesArray={prizesArray} />}
      />
      <Route
        path="RafflesPage"
        element={<RafflesPage prizesArray={prizesArray} />}
      />
      <Route path="" element={<PrizesPage prizesArray={prizesArray} />} />
    </Routes>
  );
}
