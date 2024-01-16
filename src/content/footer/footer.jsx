import './footer.css'
import { useState, useEffect } from 'react'
import { ReactComponent as GitHub } from '../../images/github.svg'
import { ReactComponent as LinkedIn } from '../../images/linkedin.svg'
import { Button as MUIButton } from '@mui/material'
import arrow from './arrow.svg'
import { ReactComponent as Mail } from '../../images/mail.svg'
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 20;
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      // isVisible &&      // to limit setting state only the first time         
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <div id="footer">
      <div id="gh">
        <a href="https://github.com/Ryanmaxin" target="_blank"><GitHub /></a>
      </div>
      <div id="li">
        <a href="https://www.linkedin.com/in/ryan-maxin/" target="_blank"><LinkedIn /></a>
      </div>
      <div id="placeholder"><div id="ma">
        <a href="mailto:rsmaxin@uwaterloo.ca" target="_blank"><Mail /></a>
      </div></div>
      <div id="copyright">Ryan Maxin &copy; 2022</div>
      {isVisible && <div className="ScrollWrapper" id="ScrollToTop">
        <MUIButton onClick={topFunction} sx={{
          backgroundColor: "#27313B",
          color: "white",
          borderRadius: "50px",
          padding: "1rem",
          minWidth: "0px"
        }} variant="outline"><img src={arrow} alt="up arrow" className='arrow'></img></MUIButton>
      </div>}
    </div>
  );
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default Footer;