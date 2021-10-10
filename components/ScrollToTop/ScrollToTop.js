import React, { useEffect } from "react";
import { BsArrowUp } from 'react-icons/bs';
import { animateScroll as scroll } from 'react-scroll'
import { isSafariBrowser } from "../../ultis";

const ScrollToTop = (props) => {

  useEffect(() => {
    const onScroll = (e) => {
      const btn = document.getElementById('scroll-top-btn');
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btn.style.opacity = '1';
      } else {
        btn.style.opacity = '0';
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <div id="scroll-top-btn" className="scroll-top-btn" onClick={() => scroll.scrollToTop({ smooth: true, duration: isSafariBrowser() ? 1000 : 0 })}>
      <BsArrowUp />
    </div>
  )
}
export default ScrollToTop;