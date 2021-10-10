import React from "react";

import useScrollProgressBar from "../hooks/useScrollProgressBar";
import ItemSolution from "../components/ItemSolution/ItemSolution";
import FeaturedServices from "../components/FeaturedServices/index";
import Technologies from "../components/Technologies/index";
import FAQ from "../components/FAQ/FAQ";
import SpaceContainer from "../components/SpaceContainer";
import OurTeamSection from "../components/OurTeam";

// const { testAction } = actions;
const dataTech = [
  { name: "React", icon: "dasaddd" },
  { name: "IOS", icon: "dasaddd" },
  { name: "Android", icon: "dasaddd" },
  { name: "Vua JS", icon: "dasaddd" },
  { name: "Vua JS", icon: "dasaddd" },
  { name: "Vua JS", icon: "dasaddd" },
  { name: "Vua JS", icon: "dasaddd" },
];

const dataFAQ = [
  {
    question: "What are the advantages of hiring IT outsourcing companies?",
    answer:
      "When you take services from an IT outsourcing company, you add more value to your business. You hand over your development tasks to them and focus more on your core business. Moreover, you save your development cost and time.",
  },
  {
    question:
      "Why Vietnamese software outsourcing companies are highly preferred worldwide?",
    answer:
      "India has become a pool of highly skilled software developers who are available at very affordable prices. Moreover, India’s friendly government policies for IT outsourcing make it a preferred place for global clients.",
  },
  {
    question:
      "How to choose the right one from a pool of Vietnamese IT outsourcing companies?",
    answer: `There are a few parameters you can focus upon<br />
	- Years of experience<br />
	- Technologies they work on<br />
	- Work hours and culture<br />
	- Their past project works`,
  },
  {
    question:
      "Why opt for software outsourcing companies rather than freelancers?",
    answer: `
	Here are a few reasons you should hire an IT outsourcing company over freelancers<br />
	- IT outsourcing companies are professional<br />
	- You can get easy replacements if you do not like the existing developers<br />
	- You get signed NDAs<br />
	- A project manager is aligned with you`,
  },
  {
    question:
      "What are the common engagement models Software outsourcing companies offer?",
    answer: `
	As a software outsourcing company, we offer the following engagement models.<br />
- Dedicated team hiring - When you require dedicated attention towards your project a dedicated team is preferred.<br />
- Hourly model - If you have short term projects with time lapses, then hourly model works for you.<br />
- Fixed price - If you have a pre-defined and well planned project then fixed cost model fits in.`,
  },
  {
    question:
      "Will my data be safe if I partner with a software outsourcing company?",
    answer:
      "As a recognised Vietnamese software outsourcing company, we give high preference to data security. We make sure to sign an NDA before project on-boarding. This ensures your data privacy and project secrecy.",
  },
  {
    question:
      "How do Software Outsourcing Companies in Vietnamese manage different time zones?",
    answer: `Like most of the Vietnamese software development outsourcing companies, we also deal in different time zones. Here’s how we do it<br />
	- Set clear requirements.<br />
	- Visualize overlap hours<br />
	- Set up communication channels.<br />
	- Fix regular meetings in the overlap hours<br />
	- Use project management tools<br />`,
  },
  {
    question:
      "Will I have to bear the project setup cost if I partner with a software outsourcing company?",
    answer:
      "No. In most of the cases, the software outsourcing companies are equipped with state-of-the-art IT infrastructure. At Impetus, we provide complete IT support to our clients and offer our existing ready to serve setup to accelerate the project speed.",
  },
];

export default function Index() {
  useScrollProgressBar();

  return (
    <div className="root">
      <SpaceContainer>
        <OurTeamSection />
      </SpaceContainer>

      {/* <SpaceContainer>
        <FeaturedServices
          description={
            "Our offshore software development services are geared to deliver results that you expect from an Indian IT outsourcing company. Truthfulness, transparency and collaborative approach is a start!"
          }
        />
      </SpaceContainer>
      <SpaceContainer>
        <Technologies data={dataTech} />
      </SpaceContainer>
      <SpaceContainer>
        <ItemSolution />
      </SpaceContainer>
      <SpaceContainer>
        <FAQ data={dataFAQ} />
      </SpaceContainer> */}
    </div>
  );
}
