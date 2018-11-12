import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
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

    if (details) {
      return (
        <Fragment>
          <Place withImage={true} place={details} />
        </Fragment>
      );
    }

    return null;
  }
}

const mapStateToProps = ({ place }) => ({ details: { ...place } });


const mapDispatchToProps = {
  placeById,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetails);
