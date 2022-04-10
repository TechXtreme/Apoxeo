import React from "react";
import "./Card.css";
import blogBanner from "../../assets/crop-2.jpeg";
import { FaRegBookmark } from "react-icons/fa";

const Card = () => {
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={blogBanner} alt="Card image cap" />
        <div className="card-body">
          <h6 className="card-title py-4">BLOG</h6>
          <h5 className="card-title pb-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus, fugit.
          </p>
          <hr />
          <div className="d-flex blog-recommend-card-ftr">
            <FaRegBookmark className=" " />
            <h6>Automotive, BYOD </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
