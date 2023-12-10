import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import {
  faSkype,
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
  return (
    <div className="socials">
      <div className="social">
        <a href={INFO.socials.skype} target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FontAwesomeIcon icon={faSkype} className="social-icon" />
          </div>
          <div className="social-text">Reach us on Skype</div>
        </a>
      </div>

      {/* <div className="social">
        <a href={INFO.socials.github} target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </div>
          <div className="social-text">Follow on GitHub</div>
        </a>
      </div> */}

      <div className="social">
        <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </div>
          <div className="social-text">Follow on LinkedIn</div>
        </a>
      </div>

      <div className="social">
        <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
          <div className="social-icon">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </div>
          <div className="social-text">Follow on Facebook</div>
        </a>
      </div>

      <div className="email">
        <h1>Our contact Details</h1>
        <div className="email-wrapper">
          <a
            href={`mailto:${INFO.main.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <div className="social-text">{INFO.main.email}</div>
          </a>
        </div>
        <div className="email-wrapper">
          <a
            href={`mailto:${INFO.main.email}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="social-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>

            <div className="social-text">{INFO.main.number}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
