import React from "react";
import { BsDiscord, BsTwitter } from "react-icons/bs";

export default function LendingFooter() {
  return ( 
      <footer id="footer">
        <div
          className=""
          style={{ marginLeft: "31vw", alignItems: "center", display: "flex" }}
        >
          Made with ❤️ for the community
        </div>

        <div className="connect-footer"  > 
          <div className="" style={{ paddingRight: "2vw" }}>
            <a href="https://twitter.com/TrustifiedNet" target="_blank" style={{ fontSize: "30px", color: "#6b46c1" }}>
              <BsTwitter />
            </a>
          </div>
        </div>
      </footer> 
  );
}
