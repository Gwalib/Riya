
import React from "react";
import arrowSvg  from "url:../images/down-arrow.svg";
// import { ReactComponent as ArrowIcon } from 'url:../images/down-arrow.svg';
import PropTypes from "prop-types";

const imageAltText = "Android, Machine Learning, Software with mix of nature.";

const Home = ({ name, title }) => (
  
    <section id="home" className="home-section">     
         <div className="home-content">
          <h1>{name}</h1>
          <h2>{title}</h2>       
          <div className="home-arrow">
            {/* <ArrowIcon className="w-6 h-6 text-black fill-current animate-bounce" /> */}
            <img src={arrowSvg}  alt="Scroll Down Arrow" className="w-6 h-6 bounce" />
        </div>
      </div>           
    </section>
    
  );

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
