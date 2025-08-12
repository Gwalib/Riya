/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use.Then, set imageAltText to string that * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
// import aboutPic from "../../images/About_pic.jpg";

const imageAltText = "purple and yellow abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Computer Science & Engineering student studying at Indira Gandhi Delhi Technical University for Women.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,  Technologies: Android, AI, Machine Learning, Deep Learning, NLP…. 
Languages: JAVA, C++, C, KOTLIN, PYTHON 
Data Markup Standard: XML 
IDE: Intellij idea, Visual Studio, Visual Studio Code, Android Studio, Google Collab 
Tools and others: Github, Git, SQL, Flask, Firebase, SpaCy, NLTK, Watson.ai 
Frameworks: Tensorflow, Scikit, Sklearn, Pytorch, Keras 
 */
const skillsList = [
  "Android Mobile Development","AI, Machine Learning", "Deep Learning", "NLP",
  "Java, Python, C++, Kotlin, C ",
  "XML, SQL",
  "Intellij idea, Visual Studio","Visual Studio Code, Android Studio, Google Colab",
  "Git, GitHub, Flask, Firebase","SpaCy, NLTK, Watson.ai ",
  "Tensorflow, Scikit, Sklearn, Pytorch, Keras "
  ];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "A passionate learner aspiring to create meaningful impact by solving real-world problems.";

const About = () => (
  
    <section className="about-section" id="about"
    // style={{
    //   backgroundImage: `url("/images/About_pic.jpg")`,
    //    backgroundSize: "cover",
    //    backgroundPosition: "center",
    // }}
    >
      <div className="about-content">
         
      {/* <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      > */}
        <h2>About Myself</h2>
        <p>{description}</p>
        {/* <hr /> */}
        <ul className="about-skills">
          {/* style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }} */}
        
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        {/* <hr /> */}
        <p className="about-quote">{detailOrQuote}</p>
        {/* style={{ padding: "1rem 3rem 0" }} */}
      </div>
    </section>
  
);

export default About;
