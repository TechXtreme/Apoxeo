import React from "react";
import Card from "../Card/Card";
import "./More.css";

const More = () => {
  return (
    <>
      <div className="blog-more-outer-wrap">
        <div className="blog-more-inner-wrap container-fluid py-5">
          <h1 className="text-center p-5">Recommended For You</h1>

          <div className="row ">
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
            <div className="col-md-4">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
