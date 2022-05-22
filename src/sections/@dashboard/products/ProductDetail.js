import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Moment from "react-moment";
// import SimpleSlider from "./Slider";

//const API_KEY = 'AIzaSyBpTzkAm_FVgKLVGST2aYgjKP2LSu3B8Yk';
const BASE_URL = "http://studentdesk.in/api/v1/book-details";

const BookDetails = (props) => {
  return (
    <div className="book-details">
      <div className="container">
        <div className="book-box row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 p-0 ">
            <div className="img-bx">
              <div className="main-img">
                <img
                  src="/home/thinkpad/Disha CC/Trustified_Network/src/sections/@dashboard/products/Trustified.jpg"
                  style={{ width: "100%" }}
                  alt="Testified"
                ></img>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pr-0 ">
            <div className="text-details p-0">
              <h3 className="name">Item Name</h3>
              <ul className="sale-bx">
                <li className="sell">On sell</li>
                <li className="sell">
                  <span className="price">
                    Price :<i class="fa fa-rupee"></i>43|{" "}
                    <small>
                      <i class="fa fa-rupee"></i>{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        70{" "}
                      </span>
                    </small>
                  </span>
                </li>
                <li className="sell">
                  <span>Book Condition : New </span>
                </li>
              </ul>
              <div className="post-details row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                  <span className="post">
                    Posted On :
                    <h4>
                      {/* <Moment format="DD MMM">{items.created_at}</Moment> */}
                    </h4>
                  </span>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <div className="text-bx">
                    <span className="post">
                      Category :
                      <h4 style={{ fontSize: "18px", fontWeight: "400" }}>
                        Category name
                      </h4>
                    </span>
                  </div>
                  <div className="text-bx pt-3">
                    <span className="post">
                      Views On Post:
                      <h4 style={{ fontSize: "18px", fontWeight: "400" }}>
                       Item count
                      </h4>
                    </span>
                  </div>
                </div>
              </div>
              <div className="btn-bx row pt-4">
                <div className="col-lg-6 col-sm-12">
                  <div className="btn-lg">
                    <a className="buy">Buy this Book</a>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="btn-lg">Get for Exchange</div>
                </div>
              </div>
            </div>
            <div className="media-bx">
              <h5
                style={{
                  color: "#333333",
                  fontWeight: "400",
                  fontSize: "14px",
                }}
              >
                Share book via
              </h5>
              <ul
                style={{
                  listStyleType: "none",
                  display: "inline-flex",
                  paddingLeft: "0px",
                  paddingTop: "10px",
                }}
              >
                <li className="inline">
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </li>
                <li className="inline">
                  <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </li>
                <li className="inline">
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </li>
                <li className="inline">
                  <i class="fa fa-google-plus-square" aria-hidden="true"></i>
                </li>
                <li className="inline">
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-12 col-sm-12 col-xs-12 "
            id="margintop"
          >
            <div
              className="user-card pl-5 pr-5 pt-4 pb-4"
              style={{ backgroundColor: "white" }}
            >
              <div className="user-img">
                <img
                  src="http://images.studentdesk.in/img/icons/large/defaultuser.png"
                  alt="user"
                  id="user-cardimg"
                  style={{ height: "150px", width: "150px" }}
                ></img>
              </div>
              <h4 className="username">Item Username</h4>
              <h5 className="pt-1">
                <i
                  class="fa fa-home"
                  aria-hidden="true"
                  style={{ color: "black" }}
                ></i>
                <span id="city"> Item city</span>
              </h5>
              <div className="btn-bx mt-4" style={{ whiteSpace: "nowrap" }}>
                <a id="allbooks">View All Books</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="note-bx">
            <h3 style={{ fontSize: "24px" }}>
              Note From <span className="username">Item username</span>
            </h3>
            <p style={{ fontSize: "16px" }}>Post node item</p>
          </div>
        </div>
        <div className="col-xs-12 mt-4">
          <div className="new-items">
            <h3>Recent Books</h3>
            <div className="items">
              {/* <SimpleSlider /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer mt-4 pt-2">
        <div className="footer-bg">
          <div class="container" style={{ textAlign: "left" }}>
            <div class="row center">
              <div class="col-sm-6">
                <h3 className="footer-text"> Old Books in popular cities</h3>
                <div className="green-line"></div>
                <div className="row">
                  <div className="col-lg-3 mr-5">
                    <ul
                      class="footer-text-align popular-cities col-xs-6 col-sm-5 pl-0 footer-text-align"
                      style={{ listStyleType: "none" }}
                    >
                      <li class="js-popularCities">Old Books in Delhi</li>
                      <li class="js-popularCities">Old Books in Pune</li>
                      <li class="js-popularCities">Old Books in Bangalore</li>
                      <li class="js-popularCities">Old Books in Ahmedabad</li>
                      <li class="js-popularCities">Old Books in Hyderabad</li>
                      <li class="js-popularCities">Old Books in Chandigarh</li>
                    </ul>
                  </div>
                  <div className="col-lg-3">
                    <ul
                      class="footer-text-align popular-cities col-xs-6 col-sm-5 footer-text-alignc pl-0"
                      style={{ listStyleType: "none" }}
                    >
                      <li class="js-popularCities">Old Books in Mumbai</li>
                      <li class="js-popularCities">Old Books in Gurgaon</li>
                      <li class="js-popularCities">Old Books in Vadodara</li>
                      <li class="js-popularCities">Old Books in Noida</li>
                      <li class="js-popularCities">Old Books in Chennai</li>
                      <li class="js-popularCities">Old Books in Coimbator</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-3">
                <h3 className="footer-text"> Quick Links</h3>
                <div className="green-line"></div>
                <ul
                  class="footer-text-align popular-cities pl-0 "
                  style={{ listStyleType: "none" }}
                >
                  <li class="js-popularCities">Old books(Used books)</li>
                  <li class="js-popularCities">Free/Donate Old Books</li>
                  <li class="js-popularCities">Entrance Exams books</li>
                  <li class="js-popularCities">Magazine</li>
                  <li class="js-popularCities">Exchange Novels</li>
                  <li class="js-popularCities">Buy used textbooks</li>
                  <li class="js-popularCities"> Buy used novels</li>
                </ul>
              </div>
              <div class="col-sm-3">
                <h3 className="footer-text"> Keep Connected</h3>
                <div className="green-line"></div>
                <ul
                  class="footer-text-align popular-cities pl-0"
                  style={{ listStyleType: "none" }}
                >
                  <li class="js-popularCities">
                    <i></i>About us
                  </li>
                  <li class="js-popularCities">
                    <i></i>Privacy Policy
                  </li>
                  <li class="js-popularCities">
                    <i></i>Terms &amp; Conditions
                  </li>
                  <li class="js-popularCities">
                    <i></i>Contact us
                  </li>
                  <li class="js-popularCities">
                    <i></i>Blog
                  </li>
                  <li class="js-popularCities">
                    <img
                      src="http://studentdesk.in/img/google-play.png"
                      alt="goggle"
                    ></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-sm pt-3 pb-3">
        <div className="container" style={{ textAlign: "left" }}>
          <div className="row">
            <div className="col-lg-8 col-sm-12">
              <p
                style={{
                  color: "#908F8F",
                  fontSize: "13px",
                  display: "flex",
                }}
              >
                {" "}
                © Copyright 2017. All Rights Reserved. Product of{" "}
                <p
                  style={{
                    color: "white",
                    fontSize: "13px",
                    paddingLeft: "3px",
                  }}
                >
                  CodeCrunch Techlabs Pvt. Ltd.
                </p>
              </p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="social-media d-flex">
                <li className="facebook"></li>
                <li className="google"></li>
                <li className="twitter"></li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
