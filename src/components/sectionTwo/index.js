import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import BoyOne from "./../../assets/tild3361-3163-4562-b435-636235383964__casual-life-3d-13.png";
import BoyTwo from "./../../assets/tild3733-3335-4161-a230-616266646263__business-3d-young-bl.png";

import PlayerCardOne from "./../../assets/tild3966-3830-4633-b034-326330656166__frame_4_1.png";
import PlayerCardTwo from "./../../assets/tild3731-3635-4266-b061-656666636665__frame_6_1.png";
import GrilImage from "./../../assets/tild3631-6662-4535-a434-363939336339__casual-life-3d-young.png";

import "./hero.css";
function Hero() {
  const [circleStlye, setCircleStyle] = useState({
    width: 1,
    height: 1,
  });
  const [circleWidth, setCircleWidth] = useState(1);
  const [circleHeight, setCircleHeight] = useState(1);
  const [counter, setCounter] = useState(0);
  const [scrollUp, setScrollUp] = useState(true);

  const [y, setY] = useState(window.scrollY);
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      // console.log("scrolling up");
      setScrollUp(true);
    } else if (y < window.scrollY) {
      // console.log("scrolling down");
      setScrollUp(false);
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  useEffect(() => {
    const onScroll = (e) => {
      var someDiv = document.getElementById("brands");
      var distanceToTop = someDiv.getBoundingClientRect().top;
      var distanceToBottom = someDiv.getBoundingClientRect().bottom;
      console.log("distanceToBottom =======>", distanceToBottom);

      if (!scrollUp) {
        if (distanceToTop < 1) {
          setCircleWidth(circleWidth + 1);
          setCircleHeight(circleHeight + 1);
        }
      } else {
        if (distanceToBottom > 1) {
          // if (!scrollUp) {
          setCircleWidth(circleWidth - 1);
          setCircleHeight(circleHeight - 1);
          // }
        }
      }

      // if (distanceToTop < 0) {
      // if (!scrollUp) {
      //   setCircleWidth(circleWidth + 1);
      //   setCircleHeight(circleHeight + 1);
      // } else {
      //     setCircleWidth(circleWidth - 1);
      //     setCircleHeight(circleHeight - 1);
      //   }
      // }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [circleHeight, circleWidth, counter]);

  return (
    <div className="section-two" id="brands">
      <div style={{ zIndex: "100" }}>
        <Container>
          <Grid container>
            <Grid item xs={12} lg={4}>
              <img src={BoyOne} width="100%" />
            </Grid>

            <Grid item xs={12} lg={8}>
              <div style={{ position: "relative" }}>
                <div className="section-heading">
                  Sweet has pioneered Flexible NFT Distribution
                </div>
                <br />
                <p className="description" style={{ padding: 0 }}>
                  What does this mean? It means you can share, sell, gift,
                  auction bundle, integrate, gamify, and drop NFTs anywhere you
                  want.
                </p>
                <p className="description" style={{ paddingTop: "2px" }}>
                  Including your own e-commerce stores.
                </p>

                <div>
                  <div className="hero_players_cards">
                    <img
                      src={PlayerCardOne}
                      className="player_card_one"
                      width="100%"
                      style={{ maxWidth: "150px" }}
                    />
                    <img
                      src={PlayerCardTwo}
                      className="player_card_two"
                      width="100%"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                </div>

                <div>
                  <img src={GrilImage} width="80%" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div
        className="circle_2"
        style={{
          transform: `scale(${circleWidth})`,
          display: circleWidth < 4 && "none",
          zIndex: 3,
          maxWidth: "100%",
        }}
      />
    </div>
  );
}

export default Hero;
