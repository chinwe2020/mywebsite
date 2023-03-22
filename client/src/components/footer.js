import facebook from "./images/fblogo.png";
import linkedin from "./images/linkedinlogo.jpeg";
import instagram from "./images/instalogo.png";

function Footer() {
  return (
    <div className="footer">
      <p className="info">cfwatkinsp@gmail.com</p>
      <p className="info">Austin, Texas</p>
      <div className="logos">
        <a href="https://www.facebook.com/chinwe.watkinspettes" target="_blank">
          <img className="social" src={facebook} alt="facebook"></img>
        </a>
        <a href="https://www.linkedin.com/in/chinwe-watkins/" target="_blank">
          <img className="social" src={linkedin} alt="linkedin"></img>
        </a>
        <a href="https://www.instagram.com/choiceswebdev/" target="_blank">
          <img className="social" src={instagram} alt="instagram"></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
