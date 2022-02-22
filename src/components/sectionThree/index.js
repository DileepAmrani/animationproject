import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlayerOne from "./../../assets/tild6638-3638-4139-b232-343134376434__frame_37.png";
import PlayerTwo from "./../../assets/tild3063-3966-4635-b836-653039373935__frame_38.png";

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
      var someDiv = document.getElementById("artist-and-teams");
      var distanceToTop = someDiv.getBoundingClientRect().top;
      var distanceToBottom = someDiv.getBoundingClientRect().bottom;
      // console.log("distanceToBottom =======>", distanceToBottom);

      // console.log(distanceToTop);

      // if (distanceToTop < 1) {
      //   alert("third section at zaro");
      // }
      if (distanceToTop < 0) {
        if (!scrollUp) {
          setCounter(counter + 1);
          setCircleWidth(circleWidth + 1);
          setCircleHeight(circleHeight + 1);
          console.log(counter);
        } else {
          setCounter(counter - 1);
          setCircleWidth(circleWidth - 1);
          setCircleHeight(circleHeight - 1);
          console.log(counter);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [circleHeight, circleWidth, counter]);

  return (
    <div className="section-three" id="artist-and-teams">
      <Container style={{ zIndex: 100 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={7}>
            <div>
              <div className="section-heading section-three-title">
                Offer your fans unique limited edition digital merch
              </div>
              <p className="description">
                Drive new revenue, raise funds for charities, and increase fan
                engagement
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={5}>
            <div className="player-box">
              <div>
                <img src={PlayerOne} width="100%" />
              </div>
              <div style={{ width: "100px" }}></div>
              <div>
                <img src={PlayerTwo} width="100%" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div
        className="circle_3"
        style={{
          transform: `scale(${circleWidth})`,
          display: circleWidth < 4 && "none",
          // zIndex: 3,
          maxWidth: "100%",
        }}
      />
    </div>
  );
}

export default Hero;
