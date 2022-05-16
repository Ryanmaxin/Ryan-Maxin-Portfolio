import './footer.css'
import { ReactComponent as GitHub } from '../../images/github.svg'
import { ReactComponent as LinkedIn } from '../../images/linkedin.svg'
const Footer = () => {
  return (
    <div id="footer">
      <div id="gh">
        <a href="https://github.com/Ryanmaxin" target="_blank"><GitHub /></a>
      </div>
      <div id="li">
        <a href="https://www.linkedin.com/in/ryan-maxin/" target="_blank"><LinkedIn /></a>
      </div>
      <div id="placeholder"></div>
      <div id="copyright">Ryan Maxin &copy; 2022</div>
    </div>
  );
}

export default Footer;