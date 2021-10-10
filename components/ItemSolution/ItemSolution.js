import React from "react";
import { GiHealthNormal, GiPiggyBank } from 'react-icons/gi';
import { FaMapMarkedAlt, FaTruck, FaShoppingCart, FaHandshake } from 'react-icons/fa';
import { AiFillVideoCamera } from 'react-icons/ai';
import { MdSchool } from 'react-icons/md';

export default function ItemSolution() {
  const data = [
    {
      img: <GiHealthNormal />,
      title: "HealthCare",
      content:
        "We provide professional healthcare app development teams to global businesses who build cost-effective, compliance fit and scalable applications. Our range of healthcare app development solutions include apps for disease-symptom check, fitness monitoring, homecare tips, hospital locating and more.",
    },
    {
      img: <FaMapMarkedAlt />,
      title: "Travel & Tourism App",
      content:
        "As a professional travel applications development company, we have the ability to offer technological solutions for the travel & tourism industry. Our travel application development team understands the terms of the industry and helps you address the growing demand from users, partners and investors."
    },
    {
      img: <GiPiggyBank />,
      title: "Banking & Financial",
      content:
        "As a banking & financial software development company, we offer top-notch banking solutions to businesses which increase their agility, cost leadership and operational efficiency. Our offshore software developers build innovative banking applications viz. payment gateways, blockchain wallets and other individual features.",
    },
    {
      img: <FaTruck />,
      title: "Logistics & Transportation",
      content:
        "Leverage our deep domain expertise to develop digital solutions that simplify the complex and challenging nature of transportation and logistics industry. We develop solutions to give fleets and teams seamless and affordable access to business-critical information, anywhere and anytime.",
    },
    {
      img: <FaShoppingCart />,
      title: "Retail & eCommerce",
      content:
        "As a professional retail & ecommerce web development company, we develop exceptionally original e-commerce solutions for small and mid-scale businesses of industry verticals viz. real estate, healthcare, apparels, retail and more. Our eCommerce development team is committed to delivering solutions on time and within the budget.",
    },
    {
      img: <AiFillVideoCamera />,
      title: "Media & Entertainment",
      content:
        "We offer Media and Entertainment app development services and have an in-depth understanding of this domain. Our development teams are capable of crafting impactful software solutions like gaming applications, media apps, digital SCM, ERP /CRM solutions, Salesforce automation and many more to cater your business needs.",
    },
    {
      img: <MdSchool />,
      title: "Education & E-Learning",
      content:
        "We also provide both educators and learners with easy-to-use education mobile apps, omnichannel consumption, and multi-level analytics tools.",
    },
    {
      img: <FaHandshake />,
      title: "ISVs And Product",
      content:
        "We deliver High-Performance and upto 60% cost-effective IT software development solutions for Independent Software Vendors (ISVs) and product companies to to help them embrace technological excellence. We also provide our strategic technology consultancies and partner with ISVs and product companies for developing, deploying and supporting their critical applications.",
    },
  ];
  const itemSolution = (item, index) => {
    return (
      <div className="solution-item wow fadeIn" data-wow-delay={`0.${index + 1}s`} key={item.title}>
        <div className="solution--icon">
          {item.img}
        </div>
        <div className="solution--content">
          <h3>{item.title}</h3>
          <p className="content">{item.content}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container solution" id="industry">
      <h3  className="solution--title wow fadeIn">We Serve Diverse Industry Verticals</h3>
      <p className="solution--desc wow fadeIn" data-wow-delay="0.2s">
        Our solutions yield benefit in Internet-facing, collaborative and
        professional environments with a focus on optimization and expansion no
        matter the industry they operate in.
      </p>
      <div className="solutionContainer">
        {data.map((item, index) => itemSolution(item, index))}
      </div>
    </div>
  );
}
