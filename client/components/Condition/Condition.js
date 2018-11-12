import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Checkbox from 'components/Checkbox';
import styles from './Condition.css';

export default class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    textBoxAction: PropTypes.func,
    checkBoxAction: PropTypes.func,
  };

  handleOnBlurAction = (e) => {
    this.props.textBoxAction(e.target.value);
  }

  handOnChangeAction = (e) => {
    this.props.checkBoxAction(e.target.name);
  }

  render() {
    const { handleOnBlurAction, handOnChangeAction } = this;
    const { condition: { cuisines, radius, categories } } = this.props;

    const checkboxes = cuisines.map((cuisine, key) => (
      <Checkbox key={key}
        handleChange={handOnChangeAction}
        checked={categories.includes(cuisine.name)}
        label={cuisine.label}
        name={cuisine.name} />
    ));

    return (
      <Fragment>
        <div className={styles.root}>
          <span>radius:</span>
          <Input defaultValue={radius} onBlurAction={handleOnBlurAction}></Input>
          <span>meters</span>
        </div>
        {checkboxes}
      </Fragment>
    );
  }
}
