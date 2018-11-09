import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import placeActions from 'actions/placeActions';
import PropTypes from 'prop-types';

import Map from 'components/Map';
import Details from 'components/Details';

const { placeById } = placeActions;

class PlaceDetails extends Component {
  static propTypes = {
    placeById: PropTypes.func,
    match: PropTypes.object,
  }
  componentDidMount() {
    const { params } = this.props.match;
    this.props.placeById(params.id);
  }
  render() {
    const { props } = this;
    const { details } = props;

    if (details) {
      return (
        <Fragment>
          <Map coordinates={details.coordinates} />
          <Details info={details} />
        </Fragment>
      );
    }

    return null;
  }
}

const mapStateToProps = ({ place }) => ({ details: place.details });


const mapDispatchToProps = {
  placeById,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
