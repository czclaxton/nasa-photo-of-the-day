import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgCard from "./imgCard";

export default function Body() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=qjbMZS6rpzHSr7jHUUyMeQ3kvD3s8Su0DCnw488g&date=2019-07-15`
      )
      .then(response => {
        const imgUrl = response.data.url;

        setImage(imgUrl);
      });
  }, []);

  return (
    <div className="bodyDiv">
      <ImgCard imgUrl={image} />
    </div>
  );
}
