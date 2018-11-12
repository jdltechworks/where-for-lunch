import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Title = ({ name, url, className, defaultName }) => {
  return (<Fragment>{name ? <Link className={className} to={url}>{name}</Link> : defaultName}</Fragment>);
};

Title.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  defaultName: PropTypes.string,
};

export default Title;
