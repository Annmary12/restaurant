// react libraries
import React, { Component } from 'react';

// styles
import './SelectBox.scss';

class SelectBox extends Component {

  constructor(props){
    super(props);

    this.state = {
      showDropdownOptions: false,
      selectedOption: this.props.label ? this.props.label : 'choose one',
    }
  }

  /**
   * toggles the select dropdown
   *
   * @returns {void}
   */
  toggleDropdownOptions = () => {
    this.setState({
      showDropdownOptions: !this.state.showDropdownOptions
    });
  }

  /**
   * hides dropdownoptions
   *
   * @returns {void}
   */
  hideDropdownOptions = () => (
    this.setState({
      showDropdownOptions: false,
    })
  );

  /**
   * handle select box onchange event
   *
   * @param {string} option
   * @returns {void}
   */
  handleSelectBoxChange = option => event => {
    this.setState({
      selectedOption: option
    })
  }

  render() {
    const { name, options } = this.props;
    return(
      <div className="select-box">
        <div className="select-box__inputField">
          <input
            type="text"
            name={name}
            className='select-box__input'
            onClick={this.toggleDropdownOptions}
            onBlur={this.hideDropdownOptions}
            value={this.state.selectedOption}
            autoComplete="off"
          />
          <span className="select-box__input--icon">
            { this.state.showDropdownOptions
              ? <i className="fa fa-caret-up"></i>
              : <i className="fa fa-caret-down"></i>
            }
          </span>
        </div>
        { this.state.showDropdownOptions && options &&
          <div className="select-box__options">
          { options.map((option, index) =>
            <span
              className="select-box__options__item"
              key={index}
              onMouseDown={this.handleSelectBoxChange(option)}
            >{option}</span>
          )}
          </div>
        }
      </div>
    )
  }
}

export default SelectBox;
