import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CoinOne from "./../../assets/tild3032-3432-4765-a337-363265343965__frame_18.png";
import CoinTwo from "./../../assets/tild6363-3938-4239-b236-333737613633__frame_19.png";

import "./contact.css";
function Hero() {
  return (
    <div className="contact" id="contact">
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={7}>
            <div>
              <div className="contact-coin-box">
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <div>
                      <img src={CoinOne} alt="" width="100%" />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div>
                      <img src={CoinTwo} alt="" width="100%" />
                    </div>
                  </Grid>
                </Grid>
              </div>
              <p className="description">
                Limited run, one-of-a-kind digital assets, authenticated <br />{" "}
                on the blockchain
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={5}>
            <div>
              <label>Name</label>
              <input type="text" className="text-input" />
              <label>Email</label>
              <input type="text" className="text-input" />
              <label>Phone</label>
              <input type="text" className="text-input" />
              <label>Company</label>
              <input type="text" className="text-input" />
              <label>Message</label>
              <textarea className="text-input" rows="5"></textarea>
              <button>Submit</button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;
