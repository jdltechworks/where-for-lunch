import { connect } from 'react-redux';
import React, { Component } from 'react';
import placeActions from 'actions/placeActions';
import PropTypes from 'prop-types';

import Place from 'components/Place/Place';
import Loader from 'components/Loader/Loader';

const { placeById } = placeActions;

class PlaceDetails extends Component {
  static propTypes = {
    placeById: PropTypes.func,
    match: PropTypes.object,
    details: PropTypes.object,
    isLoading: PropTypes.bool,
  }
  componentDidMount() {
    const { params } = this.props.match;
    this.props.placeById(params.id);
  }
  render() {
    const { details, isLoading } = this.props;
    return !isLoading ? <Place withImage={true} place={details} /> : <Loader />;
  }
}

const mapStateToProps = ({ place }) => {
  return {
    isLoading: place.isLoading,
    details: { ...place },
  };
};


const mapDispatchToProps = {
  placeById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaceDetails);
