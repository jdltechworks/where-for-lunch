import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'components/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';
import { hasLatLong } from 'lib/utils';

class HomePage extends Component {
  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }

  handleOnConditionBlur = (value) => {
    this.props.setRadius(value);
  }

  render() {
    const { condition, place, setCategory } = this.props;
    const searchDisabled = hasLatLong(condition);

    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <div className="searchWrapper">
          <Condition
            condition={condition}
            options={place.cuisines}
            textBoxAction={this.handleOnConditionBlur}
            checkBoxAction={setCategory}
          />
          <Button disabled={searchDisabled} onClick={this.handleOnClick} theme="homepageClick" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = {
  fetchPlaces: placeActions.fetchPlaces,
  setCategory: conditionActions.setCategory,
  setRadius: conditionActions.setRadius,
};

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
  setCategory: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
