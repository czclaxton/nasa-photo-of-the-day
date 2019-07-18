import React from "react";
import DatePicker from "./DatePicker";

function imgCard({ data }) {
  console.log("data:", data);
  const { title, media_type, url, explanation } = data;
  return (
    <div className="imgCard">
      <h1>{title}</h1>
      {media_type === "image" ? (
        <img className="nasaImg" src={url} />
      ) : (
        <iframe src={url} />
      )}
      <DatePicker />
      <p>{explanation}</p>
    </div>
  );
}

export default imgCard;
