/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk_pic.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: " ANDROID APP DEVELOPMENT TRAINING ",
    description:
      "Training done from NIELIT (National Institute of Electronics and Information Technology) Understand how Android applications work, their life cycle, manifest, Intents, and using external resources, design and develop useful Android applications with compelling user interfaces by using, extending, and creating layouts and Views and using Menus.",
    url: "",
  },
  {
    title: " Quiz app",
    description:
      " An app where set of questions are asked (MCQ format) and the total score is calculated based on correct answers. Questions are navigated through using Dynamic Programming. ",
    url: "",
  },
  {
    title: "My Resume Site",
    description: "Created using React,Codespaces and Github.",
    url: "",
  },
  {
    title: "WhatsApp Clone",
    description:
      "This was a team project. We utilized Firebase for authentication using email and password, as well as for storage and real-time database functionality. We successfully implemented user nodes to create the necessary database structure, enabling real-time messaging. ",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
