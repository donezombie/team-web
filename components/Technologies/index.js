import React from 'react';
// import iconTest from '../../'; 

const Item = ({ data, index }) => {
  return (
    <div className='item-tech wow fadeIn' data-wow-delay={`0.${index + 1}s`}>
      <div className="icon-tech">
        <img src="/static/assets/iconTest.png" className="iconCustom-tech" />
      </div>
      <p className="name-tech">
        {data.name}
      </p>
    </div>
  )
}

const Technologies = ({data}) => {
  return (
    <div className="root-tech" id="technologies">
      <h3 className="title-tech wow fadeIn" data-wow-delay="0.1s">Technologies & Frameworks Our Developers Skilled In</h3>
      <p className="description-tech wow fadeIn" data-wow-delay="0.3s">
        As a Vietnamese software development company, we offer development teams which are adept at all the latest technologies. Our developers build secure & scalable software using your preferred technology stack.
      </p>

      <div className="content-tech">
        {data.map((e, index) => (
          <Item data={e} index={index} />
        ))}
      </div>
    </div>
  );
};


export default Technologies;


