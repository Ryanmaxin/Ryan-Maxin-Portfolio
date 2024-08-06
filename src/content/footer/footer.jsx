import { Button as MUIButton } from "@mui/material";
import { useEffect, useState } from "react";
import arrow from "./arrow.svg";
import "./footer.css";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      // isVisible &&      // to limit setting state only the first time
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <div id="footer">
      <span class="footerText">Handmade by Ryan 🍿</span>
      <span class="footerText">&copy; 2022-2024</span>
      {isVisible && (
        <div className="ScrollWrapper" id="ScrollToTop">
          <MUIButton
            onClick={topFunction}
            sx={{
              backgroundColor: "#27313B",
              color: "white",
              borderRadius: "50px",
              padding: "1rem",
              minWidth: "0px",
            }}
            variant="outline"
          >
            <img src={arrow} alt="up arrow" className="arrow"></img>
          </MUIButton>
        </div>
      )}
    </div>
  );
};

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default Footer;
