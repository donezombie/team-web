import React from "react";
import icons from "../../constants/icons";
import data from "../../constants/data_our_team.json";
import Title from "../Title";

const OurTeamSection = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div id="our-team" className="our-team">
      <Title title="Meet our team" />
      <div className="our-team__member-list">
        {data.map((member, idx) => (
          <div
            key={member.id}
            className="our-team__member wow fadeIn"
            data-wow-delay={`${0.1 * (idx + 1)}s`}
          >
            <div className="our-team__avatar">
              <img src={member.avatar} alt={member.name} />
            </div>

            <div className="our-team__info">
              <h5 className="our-team__name">{member.name}</h5>
              <h6 className="our-team__role">{member.role}</h6>
              <div className="our-team__social-list">
                {member.socialMedia.map((social) => (
                  <a
                    href={social.link}
                    target="_blank"
                    className="our-team__social"
                  >
                    {icons[social.name]}
                  </a>
                ))}
              </div>
              <div className="our-team__quote">
                <blockquote>"{member.quote}"</blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamSection;
