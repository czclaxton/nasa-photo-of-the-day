import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgCard from "./imgCard";
import styled from "styled-components";

export default function Body(props) {
  const [data, setData] = useState({});
  console.log(data);
  const WrapperDiv = styled.div`
    background-image: url("https://i.imgur.com/QG21FwQ.png");
    z-index: -5;
    height: 100vh;
  `;
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=qjbMZS6rpzHSr7jHUUyMeQ3kvD3s8Su0DCnw488g`
      )
      .then(response => {
        setData(response.data);
      });
  }, []);

  return (
    <WrapperDiv>
      <ImgCard data={data} />
    </WrapperDiv>
  );
}
