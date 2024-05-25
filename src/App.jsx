import "@src/App.css";
import ilustrasi from "./assets/images/illustration-mockups.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <header className="wrapper">
        <img className="img" aria-hidden="true" src={ilustrasi} alt="" />
        <div className="hero">
          <h1 className="title">Build The Community Your Fans Will Love</h1>
          <p className="txt">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="btn">Register</button>
        </div>
        <ul className="social">
          <li>
            <a
              target="_blank"
              href="https://facebook.com"
              aria-label="Visit our facebook page"
            >
              {/* You can add your Facebook icon or SVG here */}
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com"
              aria-label="Visit our twitter page"
            >
              {/* You can add your Twitter icon or SVG here */}
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://instagram.com"
              aria-label="Visit our instagram page"
            >
              {/* You can add your Instagram icon or SVG here */}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default App;
