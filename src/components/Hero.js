import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title, button, overlayColor }) => (
  <div className="hero">
    {overlayColor && (
      <div className="hero_overlay" style={{ backgroundColor: overlayColor }} />
    )}
    <div className="hero_content">
      <h1>{title}</h1>
      <div className="buttons-wrapper">
        {button.map((item, i) => (
          <a href={item.url} key={i} className="button primary">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

Hero.defaultProps = {
  overlayColor: '',
};

Hero.propTypes = {
  button: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
  overlayColor: PropTypes.string,
};

export default Hero;
