import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

import { SocialIcon } from "react-social-icons";
import moment from "moment";
import Button from "@mui/material/Button";
import "./ProductDetail.css";
import { useMoralisCloudFunction } from "react-moralis";
import { useMoralis } from "react-moralis";

export default function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [productDetail, setProductDetail] = useState();
  const { user } = useMoralis();
  const { fetch, data, error, isLoading } = useMoralisCloudFunction(
    "getProducts",
    { autoFetch: true }
  ); 
  useEffect(() => {
    setProduct();
  }, [data]);

  useEffect(() => {
    fetch();
  }, []);

  async function setProduct() {
    const products = await JSON.parse(JSON.stringify(data));
    const product =
      data &&
      products.filter(
        (prod) => prod.title == params?.productName && prod.user?.username
      );
    product && setProductDetail(product[0]);
  }
  return (
    <>
      <div className="book-details" style={{ marginBottom: "-40vh" }}>
        <div className="container">
          <div className="book-box ">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-paddind margin-bottom">
                <div className="img-bx">
                  <div className="main-img">
                    <img 
                      src={productDetail?.image?.url}
                      alt="Imageeee"
                    />
                  </div>
                  <ul className="slide-img"></ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                <div className="text-details">
                  <h3 style={{ borderBottom: "2px solid red" }}>
                    {productDetail?.title}
                  </h3>
                  <p> </p>

                  <ul className="sale-bx">
                    <li>Type: {productDetail?.type}</li>
                    <li className="price-book-allign">
                      <span>
                        Price: <i className="fa fa-rupee"></i>{" "}
                        {productDetail?.price}
                        {/* <strike className="" style={{ color: "darkgrey" }}>
                          <small>
                            <i className="fa fa-rupee"></i> 195
                          </small>
                        </strike> */}
                      </span>
                    </li>
                    {/* <li>Book condition:Used</li> */}
                  </ul>

                  <div className="post-details">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div className="text-bx">
                          <span>Description:</span>
                          <h4>{productDetail?.description}</h4>
                        </div>
                        {/* <div className="text-bx">
                          <span>Posted From: </span>
                          <h4>
                            Naran Lala School Of Industrial Management &
                            Computer
                          </h4>
                        </div> */}
                      </div>

                      {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div className="text-bx">
                          <span>Category: </span>
                          <h4>Romance & Short Stories</h4>
                        </div>
                        <div className="text-bx">
                          <span>Views on post</span>
                          <h4>32112</h4>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  {/* <div className="btn-bx">
                    <Button variant="outlined" className="btnbx-1">
                      Buy this Book
                    </Button>

                    <Button
                      variant="outlined"
                      style={{ marginLeft: "60px" }}
                      className="btnbx-2"
                    >
                      Get for Exchange
                    </Button>
                  </div> */}
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 no-paddind hidden-xs">
                <div className="text-center user-card">
                  <div className="img-bx">
                    <img
                      src={
                        productDetail?.user?.Avatar == undefined
                          ? "http://images.studentdesk.in/img/icons/large/defaultuser.png"
                          : productDetail?.user.Avatar.url
                      }
                      alt="Jill thakkar"
                      className="img-responsive"
                    />
                  </div>
                  <h4 className="">{productDetail?.user?.username}</h4>
                  {/* <h5>Gandhinagar</h5> */}
                  <div className="btn-bx">
                    <Button
                      variant="outlined"
                      onClick={() => {
                        navigate("/dashboard/products");
                      }}
                    >
                      View All Products/services
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
