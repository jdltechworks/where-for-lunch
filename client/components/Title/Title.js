import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Title = ({ title, url, className, defaultTitle }) => {
  return (
    <Fragment>
      {title ?
        <Link className={className} to={url}>{title}</Link> : defaultTitle}
    </Fragment>
  );
};

Title.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  defaultTitle: PropTypes.string,
};

export default Title;
