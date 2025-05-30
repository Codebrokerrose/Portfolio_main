import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

export const Hero = () => {
  const [text, setText] = useState(""); // Dynamic text for the h2
  const [careerIndex, setCareerIndex] = useState(0); // Current career index
  const [characterIndex, setCharacterIndex] = useState(0); // Current character index for typing animation

  const careers = ["Front-End Developer", "Back-End Developer", "Full-Stack Developer"]; // Array of career options

  useEffect(() => {
    const updateText = () => {
      if (characterIndex < careers[careerIndex].length) {
        setText((prev) => prev + careers[careerIndex][characterIndex]); // Add one character at a time
        setCharacterIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCareerIndex((prev) => (prev + 1) % careers.length); // Move to the next career
          setCharacterIndex(0);
          setText(""); // Reset text for the next word
        }, 1000); // Pause before transitioning to the next word
      }
    };

    const timer = setTimeout(updateText, 100); // Adjust typing speed here
    return () => clearTimeout(timer); // Clean up the timer
  }, [characterIndex, careerIndex, careers]);

  const article = /^[aeiouAEIOU]/.test(careers[careerIndex]) ? "an" : "a"; // Dynamic "a" vs. "an"

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ankana</h1>
        <h2>
          I am {article} {text}
        </h2>
        <p className={styles.description}>
          With 5 years of experience using React and NodeJS. Reach out if you'd
          like to learn more!
        </p>

        {/* 🌐 Social Icons */}
        <div className={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/ankana-saha-604742271/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Codebrokerrose"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/Ankana1910/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            <FaCode />
          </a>
        </div>

        <a href="mailto:ankanasaha1922@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
