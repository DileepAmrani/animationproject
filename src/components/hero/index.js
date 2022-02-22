import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlayerCardOne from "./../../assets/tild3966-3830-4633-b034-326330656166__frame_4_1.png";
import PlayerCardTwo from "./../../assets/tild3731-3635-4266-b061-656666636665__frame_6_1.png";
import MobileInHand from "./../../assets/tild6532-3839-4239-b165-653032353137__pngwingcom.png";
import CoinOne from "./../../assets/tild3032-3432-4765-a337-363265343965__frame_18.png";
import CoinTwo from "./../../assets/tild6363-3938-4239-b236-333737613633__frame_19.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import "./hero.css";
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

function Hero() {
  const [circleStlye, setCircleStyle] = useState({
    width: 0,
    height: 0,
  });

  
  useEffect(() => {
    // let box = document.querySelector(".hero");
    // let width = box.offsetHeight;
    // console.log(width);

    const onScroll = (e) => {

      if (e.target.documentElement.scrollTop < 250) {
        setCircleStyle({
          width: e.target.documentElement.scrollTop * 0.5,
          height: e.target.documentElement.scrollTop * 0.5,
        });
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // console.log(circleStlye);
  return (
    <div className="hero" id="hero">
      <Container>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <div>
              <div className="section-heading">
                Powering the blockchain digital collectibles NFT revolution
              </div>
              <p className="description">
                Get the NFT wallet for iPhone or Android
              </p>

              <div>
                <div className="hero_players_cards">
                  <img
                    alt="player_card_one"
                    src={PlayerCardOne}
                    className="player_card_one"
                    width="100%"
                  />
                  <img
                    src={PlayerCardTwo}
                    className="player_card_two"
                    width="100%"
                    alt="player_card_one"
                  />
                </div>
              </div>
            </div>
          </Grid>
          <div
            className="circle_1"
            style={{
              transform: `scale(${
                circleStlye.width < 100 && circleStlye.width
              })`,
              display: circleStlye.width < 4 && "none",
              // zIndex: 2,
              maxWidth: "150%",
            }}
          />

          <Grid item xs={12} lg={5}>
            <div>
              <div style={{ width: "100%", position: "relative" }}>
                <img
                  style={{ zIndex: 100 }}
                  src={CoinOne}
                  style={{ position: "absolute", right: 0, top: "150px" }}
                  width="120px"
                />
                <img
                  style={{ zIndex: 100 }}
                  src={CoinOne}
                  style={{ position: "absolute", right: "70px", top: "0px" }}
                  width="80px"
                />
                <img
                  style={{ zIndex: 100 }}
                  src={MobileInHand}
                  style={{ width: "100%", marginTop: "50px" }}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Hero;
