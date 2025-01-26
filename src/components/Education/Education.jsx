import React, { useEffect } from "react";
import './education.css'; // Import your existing CSS
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

export const Education = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    }); // Initialize AOS when the component mounts
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <div className="contact" id="education">
      {/* Education Section */}
      <div className="education" data-aos="fade-left">
        <h2>Education</h2>
        <ul className="education__list">
          <li className="education__item">
            <h3>Master In Computer Application</h3>
            <p>Jadavpur University</p>
            <p><strong>Year:</strong> 2024 - Present</p>
          </li>
          <li className="education__item">
            <h3>Bachelor in Computer Science</h3>
            <p>Vivekananda College, Kolkata</p>
            <p><strong>Year:</strong> 2021 - 2024</p>
          </li>
          <li className="education__item">
            <h3>Higher Secondary Education</h3>
            <p>Belsingha Sikshayatan, Falta</p>
            <p><strong>Year:</strong> 2019 - 2021</p>
          </li>
          <li className="education__item">
            <h3>Secondary Education</h3>
            <p>Belsingha Girl's School</p>
            <p><strong>Year:</strong> 2013 - 2019</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
