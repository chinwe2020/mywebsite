import photo from "./images/eventpic.jpeg";
import unt from "./images/untlogo.png";
import galogo from "./images/galogo.png";
import cspo from "./images/cspo.png";
import "./app.css";

function Bio() {
  return (
    <div id="biography" className="biopic">
      <p>
        {" "}
        <img className="mypic" src={photo} alt="me" /> Chinwe' is a Software
        Engineer with a background in international business and hospitality.
        After graduating from the University of North Texas and spending seven
        years in the restaurant and hospitality industry, Chinwe' found an
        unconventional way to combine her passions for creativity, customer
        service, and education, resulting in her pursuit of a career in
        education technology. After attending General Assembly’s Software
        Engineering Immersive, she started her own web consulting company.
        Shortly after which she was hired by Enlightapp as their first Frontend
        Software Engineer. And has grown in her career to become their Product
        Manager. Today, she carries her educational experiences with her, along
        with the legacy of her family, and the mission to empower young people
        in classrooms all over the country, so that no student feels left out,
        or left behind. No matter their circumstances. As a Product Manager and
        Software Engineer, Chinwe’ hopes to offer a fresh technical perspective
        to Enlightapp’s mission to dynamically impact the education system, and
        is very excited to be a part of the team.
      </p>
      <div className="list">
        <ul>
          <b>Education Highlights</b>
          <li>University of North Texas - BA, International Business</li>
          <li>General Assembly - Software Engineering</li>
          <li>Scrum Alliance - CSPO</li>
          <li>
            <a
              href="https://docs.google.com/document/d/1qwEQ8PioxFxdDR5ZndmvjIMO3wJyY1nHshZuCKWMZbE/edit?usp=sharing"
              target="_blank"
            >
              View My Resume
            </a>
          </li>
        </ul>
        <div className="logos">
          <img className="emblem" src={unt} alt="unt" />
          <img className="emblem" src={galogo} alt="GA" />
          <img className="emblem" src={cspo} alt="cspo" />
        </div>
      </div>
    </div>
  );
}

export default Bio;
