import React from "react";
import "./Header.css";
import Icons from "../shareIcons/Icons";
import { BsArrowLeft } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";

const Header = () => {
  const current = new Date();
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;

  return (
    <>
      <div className="blog_header-outer-wrap">
        <div className=" blog-header-inner-wrap container ">
          <div className=" blog-header-back-button d-flex  pb-3">
            <BsArrowLeft className="blog-header-back-icon" />
            <h6>BLOGS</h6>
          </div>
          <div className="blog-header-heading">
            <h1>Title Text Goes Here In Two There Lines Lorem, ipsum dolor.</h1>
          </div>
          <div className="blog-header-name_date py-2">
            <h6>AUTHOR NAME | {date}</h6>
          </div>
          <hr className="blog-header-seperator mt-3" />
          <div className="blog-header-misc d-flex justify-content-between pb-2">
            <div className="d-flex ">
              <FaRegBookmark  />
              <h6>
                Sass Management, Automotive Industry, Other tags can go here
              </h6>
            </div>

            <Icons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
