import React from "react";
import { ReviewCard } from "../";
import { Link } from "react-router-dom";

const Review = () => {
  return (
    <div className="detail__review">
      <div className="detail__review_header flex flex__jc_sb">
        <h2>Reviews</h2>
        <i className=""></i>
      </div>
      <div className="detail__reviews">
        <ReviewCard />
        <ReviewCard />
      </div>
      <Link to="/" className="detail__seemore">
        see all reviews
      </Link>
    </div>
  );
};

export default Review;
