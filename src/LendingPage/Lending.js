import React, { Fragment } from "react";
import reactDom from "react-dom";
import Logo from "../components/Logo";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import "./Lending.css";
import Box from "@mui/material/Box";
import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";
import { SocialMediaIconsReact } from "social-media-icons-react";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import LendingHeader from "./LendingHeader";
import LendingFooter from "./LendingFooter";
import { alpha, styled } from "@mui/material/styles";
import Iconify from "../components/Iconify";
import CustomeRootStyle from "./CustomeRootStyle";
import AgreementRoot from "./AgreementRoot";
import CryptoRoot from "./CryptoRoot";
import SubscriptionRoot from "./SubscriptionRoot";
import ProductRoot from "./ProductRoot";
import InvoicingRoot from "./InvoicingRoot";
import AnalyticsRoot from "./AnalyticsRoot";

import Slider from './Slider'

// import SliderExample from './slider'

export default function Lending() {
  const RootStyle = styled(Card)(({ theme }) => ({
    boxShadow: "none",
    border: "none",
    textAlign: "center",
    padding: theme.spacing(5, 5),
    color: theme.palette.primary.main,
  }));

  const IconWrapperStyle = styled("div")(({ theme }) => ({
    margin: "auto",
    display: "flex",
    borderRadius: "50%",
    alignItems: "center",
    width: theme.spacing(8),
    height: theme.spacing(8),
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    color: theme.palette.primary.main,
    backgroundImage: `linear-gradient(135deg, ${alpha(
      theme.palette.primary.main,
      0
    )} 0%, ${alpha(theme.palette.primary.dark, 0.24)} 100%)`,
  }));
  return (
    <Fragment>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-8 mx-auto mt-5">
            <p className="peragraph">Decentralized  Freelancing Platform</p>
            {/*    . */}
            <p className="peragraph">
              {" "}
              for
              <span
                style={{
                  color: " black",
                }}
              >
                {" "}
                Global Gig Economy
              </span>{" "}
              {/* platform */}
            </p>
          </div>
        </div>
      </div>


      {/* ---------------------Sliders-------------------------------------------- */}

      <Slider />

      {/* <div className="container">
        <Box component="img" src="/images/gigDash .png" />
      </div> */}
      {/* ========================================================================= */}


      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 mt-5">
            <p className="network pt-4">
              How it works?
            </p>
            <div width="100%"
              height="500px"><iframe
                style={{ width: '100%', height: "500px" }} src="https://www.loom.com/embed/5029cef54e9e4603b7f80ea4a20ec468" ></iframe></div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mt-5 mb-5 "
        style={{ backgroundColor: "#F2F3F6", paddingBottom: "100px" }}
      >
        <div className="row">
          <div className="col-12  ">
            <p className="network pt-4">
              Benifits of choosing
              <span style={{ color: "black" }}> GigConomy</span>
              <span>?</span>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-4">
              <RootStyle style={{ height: "100%" }}>
                <IconWrapperStyle>
                  <Iconify
                    icon="gala:secure"
                    width={24}
                    height={24}
                  />
                </IconWrapperStyle>
                <Typography variant="h3" color="#000">
                  Fast & Secure
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#000"
                  sx={{ opacity: 0.72 }}
                >
                  Security of Ethereum network, Speed and Economic transactions
                  of Polygon)
                </Typography>
              </RootStyle>
            </div>

            <div className="col-12 col-lg-4 col-md-4">
              <RootStyle>
                <IconWrapperStyle>
                  <Iconify
                    icon="carbon:license-third-party"
                    width={24}
                    height={24}
                  />
                </IconWrapperStyle>
                <Typography variant="h3" color="#000">
                  No Hefty Commissions
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#000"
                  sx={{ opacity: 0.72 }}
                >
                  Trust is ensured by code. Increase profit margins without
                  giving hefty commissions to third parties.
                </Typography>
              </RootStyle>
            </div>
            <div className="col-12 col-lg-4 col-md-4">
              <RootStyle>
                <IconWrapperStyle>
                  <Iconify
                    icon="emojione-monotone:globe-showing-europe-africa"
                    width={24}
                    height={24}
                  />
                </IconWrapperStyle>
                <Typography variant="h3" color="#000">
                  Scale across the Globe
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#000"
                  sx={{ opacity: 0.72 }}
                >
                  Showcase your work globally and Send/Receive crypto payment
                  easily without any boundaries.
                </Typography>
              </RootStyle>
            </div>
          </div>
        </div>
      </div>
      <div className="container  mt-5 mb-5 "  >
        <div className="row">
          <div className="col-12  ">
            <p className="network pt-4">Key Features</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 col-md-4 mt-4">
            <AgreementRoot />
          </div>
          <div className="col-12 col-lg-4 col-md-4 mt-4">
            <CryptoRoot />
          </div>
          <div className="col-12 col-lg-4 col-md-4 mt-4">
            <SubscriptionRoot />
          </div>
          <div className="col-12 col-lg-4 col-md-4 mt-4">
            <ProductRoot />
          </div>
          <div className="col-12 col-lg-4 col-md-4 mt-4">
            <InvoicingRoot />
          </div>
          <div className="col-12 col-lg-4 col-md-4 mt-4">
            <AnalyticsRoot />
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-5  "
        style={{ backgroundColor: "#F2F3F6", paddingBottom: "100px" }}
      >
        <div className="row">
          <div className="col-12  ">
            <p className="network pt-4">Build for</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-4">
              <RootStyle style={{ height: "100%" }}>
                <IconWrapperStyle>
                  <Iconify
                    icon="fluent:inprivate-account-20-filled"
                    width={24}
                    height={24}
                  />
                </IconWrapperStyle>
                <Typography variant="h3" color="#000">
                  Individuals
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#000"
                  sx={{ opacity: 0.72 }}
                >
                  Create profile, add services like software development,
                  accounts, finance, digital marketing as per your expertise.
                  Add Products from physical goods, digital products such as
                  themes, plugins, templates, growth hack guide, booklets and so
                  on.
                </Typography>
              </RootStyle>
            </div>

            <div className="col-12 col-lg-4 col-md-4">
              <RootStyle style={{ height: "100%" }}>
                <IconWrapperStyle>
                  <Iconify
                    icon="ic:baseline-business-center"
                    width={24}
                    height={24}
                  />
                </IconWrapperStyle>
                <Typography variant="h3" color="#000">
                  Businesses
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#000"
                  sx={{ opacity: 0.72 }}
                >
                  Sell products/services globally. Create agreement with scope of
                  work, delivery time frame and pricing.
                  Let smart contract ensure trust and ethical behaviour of
                  parties involved in transaction.
                </Typography>
              </RootStyle>
            </div>
            <div className="col-12 col-lg-4 col-md-4">
              <RootStyle style={{ height: "100%" }}>
                <IconWrapperStyle>
                  <Iconify
                    icon="ic:round-integration-instructions"
                    width={24}
                    height={24}
                  />
                </IconWrapperStyle>
                <Typography variant="h3" color="#000">
                  Product Integrations
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="#000"
                  sx={{ opacity: 0.72 }}
                >
                  Developers can easily integrate agreement and crypto payment
                  service in web and mobile app using Trustified SDK.
                </Typography>
              </RootStyle>
            </div>
          </div>
        </div>
      </div>
    </Fragment >

    //           <div className="col-md-4 mt-4">
    //             <div className="cardtrust">
    //               <h4 className="build-title"> Individuals </h4>
    //               <p className="p-y-1  trust-p">
    //                 Create profile, add services like software development,
    //                 accounts, finance, digital marketing as per your expertise.
    //                 <p style={{ paddingTop: "40px" }}>
    //                   Add Products from physical goods, digital products such as
    //                   themes, plugins, templates, growth hack guide, booklets and so
    //                   on.
    //                 </p>
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-md-4 mt-4">
    //             <div className="cardtrust">
    //               <h4 className="build-title"> Businesses</h4>
    //               <p className="p-y-1 trust-p fw-normal">
    //                 Sell products/services globally. Create agreement with scope of
    //                 work, delivery time frame and pricing.
    //                 <p style={{ paddingTop: "40px" }}>
    //                   Let smart contract ensure trust and ethical behaviour of
    //                   parties involved in transaction.
    //                 </p>
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-md-4 mt-4 ">
    //             <div className="cardtrust">
    //               <h4 className="build-title">Product Integrations</h4>
    //               <p className="p-y-1  trust-p">
    //                 Developers can easily integrate agreement and crypto payment
    //                 service in web and mobile app using Trustified SDK.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-md-4 d-flex justify-content-center">
    //             <div className="cardtrust"  >
    //               <h4 className="trust-title"> Fast & Secure</h4>
    //               <p className="p-y-1  trust-p">
    //                 Security of Ethereum network, Speed and Economic transactions of
    //                 Polygon)
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-md-4 d-flex justify-content-center">
    //             <div className="cardtrust"  >
    //               <h4 className="trust-title"> No Hefty Commissions</h4>
    //               <p className="p-y-1  trust-p">
    //               Trust is ensured by code. Increase
    //   profit margins without giving hefty
    //   commissions to third parties.
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-md-4 d-flex justify-content-center">
    //             <div className="cardtrust"  >
    //               <h4 className="trust-title"> Scale across the Globe</h4>
    //               <p className="p-y-1  trust-p">
    //               Showcase your work globally and
    // Send/Receive crypto payment easily
    // without any boundaries.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
  );
}
