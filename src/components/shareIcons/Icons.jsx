import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { RWebShare } from "react-web-share";
import {
  FaRegBookmark,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaLink,
} from "react-icons/fa";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

const Icons = () => {
  const shareUrl = window.location.href;
  console.log(shareUrl);
  return (
    <>
      <div className="blog-header-share d-flex  ">
        <div className="blog-header-share_icon">
          <FacebookShareButton url={shareUrl}>
            <FaFacebookF className="fb" />
          </FacebookShareButton>
        </div>
        <div className="blog-header-share_icon">
          <TwitterShareButton url={shareUrl}>
            <FaTwitter />
          </TwitterShareButton>
        </div>
        <div className="blog-header-share_icon">
          <LinkedinShareButton url={shareUrl}>
            <FaLinkedinIn />
          </LinkedinShareButton>
        </div>
        <div className="blog-header-share_icon">
          <RWebShare
            data={{
              text: "Share This Blog Via",
              url: window.location.href,
              title: "Share This Blog Via",
            }}
          >
            <FaLink />
          </RWebShare>
        </div>
      </div>
    </>
  );
};

export default Icons;
