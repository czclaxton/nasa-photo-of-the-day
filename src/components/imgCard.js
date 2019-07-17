import React from "react";

function imgCard(props) {
  return (
    <div className="imgCard">
      <img src={props.imgUrl} />
    </div>
  );
}
export default imgCard;
