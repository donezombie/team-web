import React from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const propTypes = {};

const EachRequirement = ({
  className = "",
  nameMain = "",
  imgMain = "",
  child = [],
  link = "",
  index = 0,
}) => {
  //! State

  //! Function

  //! Render
  return (
    <ul
      className={`requirement-common wow fadeIn ${className ? className : ""} `}
      data-wow-delay={`${0.1 * (index + 1)}s`}
    >
      <a
        className="main-requirement"
        alt={nameMain}
        href={link}
        target="_blank"
      >
        <img
          className="logo-requirement"
          src={imgMain}
          alt={`img-${nameMain}`}
        />
        <span>{nameMain}</span>
      </a>
      {child.map((el) => (
        <li>
          <a alt={el.name} href={el.link} target="_blank">
            <FaRegHandPointRight /> {el.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

EachRequirement.propTypes = propTypes;
export default EachRequirement;
