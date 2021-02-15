import React from "react";
import { Rating } from "../";

const ReviewCard = () => {
  return (
    <div className="detail__review_card">
      <h3 className="detail__review_title">the review</h3>
      <Rating rates={4} />
      <p className="detail__review_user">Username - 15 Nov 2020</p>
      <p className="detail__review_text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
    </div>
  );
};

export default ReviewCard;
