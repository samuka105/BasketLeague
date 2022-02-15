import React from "react";
import axios from "axios";

  const api = axios.create({
    baseURL: `http://localhost:3001`,
    headers: {"Access-Control-Allow-Origin": "*"}
  });
export default async function NbaPlayer(name){
  //const getPlayerByName = async (name) => {
  let data = {};
    try{
      await api.get('/player', {params: { name: name}})
        .then(res => {console.log("player::"); console.log(res.data); data =  res.data})
    } catch (err) {
      console.error(err.message);
      return {}
    }
  return data;
}
