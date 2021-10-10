import React from "react";
import { GoLocation } from 'react-icons/go';
import { MdPhone, MdEmail } from 'react-icons/md';

const Footer = (props) => {
  return (
    <div className="container footer">
      <div className="footer--content wow">
        <div className="footer--content__item wow fadeIn" data-wow-delay="0.1s">
          <div className="footer--content__icon"><GoLocation /></div>
          <div className="footer--content__infomation">
            <h4>Address: </h4>
            <p>Level 10, Kim Anh Tower, No. 78 Duy Tan Str.</p>
            <p>Cau Giay Dist, Hanoi, Vietnam</p>
          </div>
        </div>
        <div className="footer--content__item wow fadeIn" data-wow-delay="0.3s">
          <div className="footer--content__icon"><MdPhone /></div>
          <div className="footer--content__infomation">
            <h4>Phone: </h4>
            <a href="tel:+840395029800">+84 - 039 - 5029 - 800</a>
          </div>
        </div>
        <div className="footer--content__item wow fadeIn" data-wow-delay="0.5s">
          <div className="footer--content__icon"><MdEmail /></div>
          <div className="footer--content__infomation">
            <h4>Email: </h4>
            <a href="mailto:phamquydon0512@gmail.com">phamquydon0512@gmail.com</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer--copyright wow fadeIn" data-wow-delay="0.5s">
        Copyright ©2020 by DZB. All Rights Reserved.
      </div>
    </div>
  )
}
export default Footer;