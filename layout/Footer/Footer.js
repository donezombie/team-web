import React, { useEffect } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const Footer = (props) => {
  return (
    <div className="container footer">
      <div id="trigger" />
      <Controller>
        <Scene
          indicators={false}
          triggerElement="#trigger"
          duration={100}
          offset={130}
        >
          {(progress) => (
            <Tween
              to={{
                bottom: "0px",
                left: "0px",
              }}
              ease="Strong.easeOut"
              totalProgress={progress}
              paused
            >
              <div className="pepe-footer">
                <img src="/static/assets/pepe-footer.png" alt="pepe-footer" />
              </div>
            </Tween>
          )}
        </Scene>
      </Controller>
    </div>
  );
};
export default Footer;
