import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.loginForm}>
        <div className={styles.text}>
          <h2>Contact</h2>
        </div>

        <form
          className={styles.loginFormContent}
          action="https://formsubmit.co/278ecd959628ef87e3eeeb2ee3c90fd4"
          method="POST"
        >
          <h1>Get in Touch</h1>

          <div className={styles.formInputMaterial}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder=" "
              required
              className={styles.formControlMaterial}
            />
            <label htmlFor="name">Name*</label>
          </div>

          <div className={styles.formInputMaterial}>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder=" "
              required
              className={styles.formControlMaterial}
            />
            <label htmlFor="subject">Subject*</label>
          </div>

          <div className={styles.formInputMaterial}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              required
              className={styles.formControlMaterial}
            />
            <label htmlFor="email">Email ID*</label>
          </div>

          <div className={styles.formInputMaterial}>
            <textarea
              name="message"
              id="message"
              rows="4"
              placeholder=" "
              required
              className={styles.formControlMaterial}
            ></textarea>
            <label htmlFor="message">Type a message</label>
          </div>

          {/* Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://ankana-saha.netlify.app/"
          />
          <input type="hidden" name="_template" value="table" />

          <button
            type="submit"
            className={`
            ${styles.btn} ${styles.btnanim}
          `}
          >
            Submit
          </button>
        </form>
      </div>

      <div className={styles.text}>
        <p>Feel free to reach out!</p>

        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:ankanasaha1922@gmail.com">
              ankanasaha1922@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/in/ankana-saha-604742271/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/ankana-saha
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub icon"
            />
            <a
              href="https://github.com/Codebrokerrose"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Codebrokerrose
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
