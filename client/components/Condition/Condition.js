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
    options: PropTypes.arrayOf(PropTypes.object),
  };

  handleOnBlurAction = (e) => {
    this.props.textBoxAction(e.target.value);
  }

  handOnChangeAction = (e) => {
    this.props.checkBoxAction(e.target.name);
  }

  render() {
    const { handleOnBlurAction, handOnChangeAction } = this;
    const { condition: { radius, categories }, options } = this.props;

    const checkboxes = options.map((option, key) => (
      <Checkbox key={key}
        handleChange={handOnChangeAction}
        checked={categories.includes(option.name)}
        label={option.label}
        name={option.name} />
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
