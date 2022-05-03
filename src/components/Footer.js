import "../sass/styles.css";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Kasa" />
      <div className="footer__copyright">© 2022 Kasa. All rights reserved</div>
  
    
      </footer>
  );
}

export default Footer;
