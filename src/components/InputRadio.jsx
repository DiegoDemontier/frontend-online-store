import React from 'react';
import PropTypes from 'prop-types';

class InputRadio extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div className="evaluation-ratios">
        <label htmlFor="rating_1">
          <input
            type="radio"
            id="rating_1"
            value={ 1 }
            name="rating"
            onChange={ handleChange }
          />
          ⭐
        </label>

        <label htmlFor="rating_2">
          <input
            type="radio"
            id="rating_2"
            value={ 2 }
            name="rating"
            onChange={ handleChange }
          />
          ⭐⭐
        </label>

        <label htmlFor="rating_3">
          <input
            type="radio"
            id="rating_3"
            value={ 3 }
            name="rating"
            onChange={ handleChange }
          />
          ⭐⭐⭐
        </label>

        <label htmlFor="rating_4">
          <input
            type="radio"
            id="rating_4"
            value={ 4 }
            name="rating"
            onChange={ handleChange }
          />
          ⭐⭐⭐⭐
        </label>

        <label htmlFor="rating_5">
          <input
            type="radio"
            id="rating_5"
            value={ 5 }
            name="rating"
            onChange={ handleChange }
          />
          ⭐⭐⭐⭐⭐
        </label>
      </div>
    );
  }
}

InputRadio.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default InputRadio;
