import React from "react";

import useScrollProgressBar from "../hooks/useScrollProgressBar";
import SpaceContainer from "../components/SpaceContainer";
import OurTeamSection from "../components/OurTeam";
import RequirementsSection from "../components/Requirements";

export default function Index() {
  useScrollProgressBar();

  return (
    <div className="root">
      <SpaceContainer>
        <OurTeamSection />
      </SpaceContainer>

      <SpaceContainer>
        <RequirementsSection />
      </SpaceContainer>
    </div>
  );
}
