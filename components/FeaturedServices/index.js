import React from 'react';
// import iconTest from '../../'; 

const FeaturedServices = ({ description }) => {
  return (
    <div className="root-fea" id="service">
      <h3 className="title-fea wow fadeIn" >Featured Services</h3>
      <p className="description-fea wow fadeIn" data-wow-delay="0.2s">
        {description}
      </p>

      <div className="container-fea wow fadeIn" data-wow-delay="0.4s">
        <div className="content-fea">
          <div className="left-fea">
            <img src="/static/assets/iconTest.png" className="icon-custom" />
          </div>
          <div className="right-fea">
            <h3 className="titleContent-fea" >Software Development</h3>
            <p className="txtContent-fea">
              We build highly secure, scalable and robust applications for global businesses.
              Our cost-effective application development services are available for start-ups,
            SMEs and enterprises from diverse industry verticals.</p>
          </div>
        </div>

        <div className="content-fea wow fadeIn" data-wow-delay="0.5s">
          <div className="left-fea">
            <img src="/static/assets/iconTest.png" className="icon-custom" />
          </div>
          <div className="right-fea">
            <h3 className="titleContent-fea" >Digital Transformation</h3>
            <p className="txtContent-fea">
            We have experience in providing cost-effective, 
            high-quality and technology-driven digital 
            transformation services to start-ups, SMEs & enterprises across the globe.</p>
          </div>
        </div>

        <div className="content-fea wow fadeIn" data-wow-delay="0.6s">
          <div className="left-fea">
            <img src="/static/assets/iconTest.png" className="icon-custom" />
          </div>
          <div className="right-fea">
            <h3 className="titleContent-fea" >Dedicated Team</h3>
            <p className="txtContent-fea">
            Our dedicated development model is designed to 
            reduce your overhead, while ensuring high-quality,
             timely deliverables for each project milestone.</p>
          </div>
        </div>
      </div>


    </div>
  );
};


export default FeaturedServices;


