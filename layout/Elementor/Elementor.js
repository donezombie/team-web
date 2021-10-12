import React from "react";
import { MdComputer, MdPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { scroller } from "react-scroll";
import { isSafariBrowser } from "../../ultis";

const Step = ({ icon, content, index }) => (
  <div
    className="elementor__steps--step wow fadeIn"
    data-wow-delay={`0.${index + 3}s`}
  >
    <div className="elementor__steps--img">{icon}</div>
    <div className="elementor__steps--content">{content}</div>
  </div>
);

const listStep = [
  {
    icon: <MdPhone />,
    content: "1. Contact us to get a free quote and consultation",
  },
  {
    icon: <FaUser />,
    content: "2. Project gets paired with the right members",
  },
  {
    icon: <MdComputer />,
    content: "3. Get full control on our dedicated resources",
  },
];

const Elementor = () => {
  const clickElementor = () =>
    scroller.scrollTo("contact", {
      duration: isSafariBrowser() ? 1000 : 0,
      smooth: "easeInOutQuart",
    });

  return (
    <div id="home" className="elementor">
      <div className="elementor__wrap wow fadeIn">
        <h4 className="wow fadeIn" data-wow-delay="0.2s">
          Vietnamese IT Outsourcing Company For Offshore Software Development
          Services
        </h4>
        <p className="wow fadeIn" data-wow-delay="0.4s">
          We’re Vietnamese software development company focused on offshore
          software development services. We have worked with startups, software
          product development companies, digital agencies and enterprises to
          help simplify their IT outsourcing experience and reduce
          costs/time-to-market.
        </p>
        <p className="wow fadeIn" data-wow-delay="0.6s">
          Planning to outsource software development services? Or would you like
          to hire an offshore software development team?
        </p>
        <button
          className="elementor__button wow fadeIn"
          data-wow-delay="0.8s"
          onClick={clickElementor}
        >
          Contact us
        </button>
        <div className="elementor__steps wow fadeIn" data-wow-delay="0.8s">
          <div
            className="elementor__steps--title wow fadeIn"
            data-wow-delay="0.8s"
          >
            <h5>Get connected with us in just 3 quick steps</h5>
          </div>
          <div className="elementor__steps--steps">
            {listStep.map((el, index) => (
              <Step
                key={el.content}
                icon={el.icon}
                content={el.content}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Elementor;
