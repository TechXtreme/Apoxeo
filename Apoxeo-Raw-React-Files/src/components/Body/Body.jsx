import React from "react";
import "./Body.css";
import FeaturedImage from "../../assets/crop-1.jpeg";
import Icons from "../shareIcons/Icons";


const Body = () => {
  return (
    <>
     
        <div className="blog-body-outer-wrap">
          <div className="blog-body-inner-wrap container">
            <img
              src={FeaturedImage}
              alt="Featured Image"
              className="w-100 py-4"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              explicabo quod ea corrupti provident consectetur dolorum quae
              minima doloremque quia. Exercitationem aut minus sequi suscipit,
              quaerat itaque numquam corporis fuga odio, quis assumenda ipsam
              nobis dolorem natus a rerum delectus enim adipisci iure
              repudiandae pariatur repellat impedit vel. Quod, ipsam! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              obcaecati earum similique, nisi vel eveniet odit culpa doloremque
              aut officia.
            </p>
            <h3 className="py-3">Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              explicabo quod ea corrupti provident consectetur dolorum quae
              minima doloremque quia. Exercitationem aut minus sequi suscipit,
              quaerat itaque numquam corporis fuga odio, quis assumenda ipsam
              nobis dolorem natus a rerum delectus enim adipisci iure
              repudiandae pariatur repellat impedit vel. Quod, ipsam! Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              obcaecati earum similique, nisi vel eveniet odit culpa doloremque
              aut officia.
            </p>
            <img
              src={FeaturedImage}
              alt="Featured Image"
              className="w-100 py-4"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              explicabo quod ea corrupti provident consectetur dolorum quae
              minima doloremque quia. Exercitationem aut minus sequi suscipit,
              quaerat itaque numquam corporis fuga odio,
            </p>
            <div className="d-flex ">
              <Icons />
              <div className="blog-body-ftr-line hr float-right ">
                <hr />
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Body;
