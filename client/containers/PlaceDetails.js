import { connect } from 'react-redux';
import React, { Component } from 'react';
import placeActions from 'actions/placeActions';
import PropTypes from 'prop-types';

import Place from 'components/Place/Place';

const { placeById } = placeActions;

class PlaceDetails extends Component {
  static propTypes = {
    placeById: PropTypes.func,
    match: PropTypes.object,
    details: PropTypes.object,
  }
  componentDidMount() {
    const { params } = this.props.match;
    this.props.placeById(params.id);
  }
  render() {
    const { details } = this.props;

    return details ? <Place withImage={true} place={details} /> : null;
  }
}

const mapStateToProps = ({ place }) => ({ details: { ...place } });


const mapDispatchToProps = {
  placeById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaceDetails);
