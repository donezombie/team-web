import React from "react";
import Title from "../Title";
import EachRequirement from "./Components/EachRequirement";

const propTypes = {};

const data = [
  {
    img: "/static/assets/js-logo.svg",
    name: "Javascript",
    link: "https://www.w3schools.com/js/",
    children: [
      {
        name: "Javascript Basic",
        link: "https://www.w3schools.com/js/default.asp",
      },
      {
        name: "JavaScript HTML DOM",
        link: "https://www.w3schools.com/js/js_htmldom.asp",
      },
      {
        name: "Javascript Functions",
        link: "https://www.w3schools.com/js/js_function_definition.asp",
      },
      {
        name: "Javascript Promise",
        link: "https://www.w3schools.com/js/js_promise.asp",
      },
    ],
  },
  {
    img: "/static/assets/react-logo.png",
    name: "React",
    link: "https://reactjs.org",
    children: [
      {
        name: "React router DOM",
        link: "https://reactrouter.com/web/guides/quick-start",
      },
      {
        name: "React hooks",
        link: "https://reactjs.org/docs/hooks-intro.html",
      },
      {
        name: "React-redux",
        link: "https://react-redux.js.org",
      },
      {
        name: "Redux-saga",
        link: "https://redux-saga.js.org",
      },
    ],
  },
  {
    img: "/static/assets/axios-logo.png",
    name: "Axios",
    link: "https://github.com/axios/axios",
    children: [
      {
        name: "Fetch data",
        link: "https://www.youtube.com/watch?v=bMRrSqWFKqM&ab_channel=TechCheck",
      },
    ],
  },
  {
    img: "/static/assets/formik-logo.png",
    name: "Formik & Yup",
    link: "https://formik.org",
    children: [
      {
        name: "Handle form",
        link: "https://www.youtube.com/watch?v=a94FOvaBomQ&list=PLC3y8-rFHvwiPmFbtzEWjESkqBVDbdgGu&index=1&ab_channel=Codevolution",
      },
      {
        name: "Validate with Yup",
        link: "https://www.youtube.com/watch?v=eW5s7vWtjDQ&ab_channel=EasyFrontend",
      },
    ],
  },
  {
    img: "/static/assets/scss-logo.png",
    name: "SCSS / SASS",
    link: "https://sass-lang.com",
  },
];

const RequirementsSection = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="requirements" id="requirements">
      <Title title="Requirements" />
      <div className="requirements-content">
        <h5 style={{ marginBottom: "1rem" }}>
          To join our team, you MUST know a few things:
        </h5>
        {data.map((requirement, idx) => (
          <EachRequirement
            index={idx}
            key={requirement.name}
            nameMain={requirement.name}
            child={requirement.children}
            link={requirement.link}
            imgMain={requirement.img}
          />
        ))}
      </div>
    </div>
  );
};

RequirementsSection.propTypes = propTypes;
export default RequirementsSection;
