// react libraries
import * as React from 'react';

// style
import './Button.scss';

// icon
import buttonIcon from '../../assets/images/add@3x.png';

const Button = ({
  type,
  disabled,
  classes,
  name,
}) => (
  <button
    className={`${classes} pl-3`}
    type={type ? type : 'button'}
    disabled={disabled}
  >
  <img src={buttonIcon} alt="icon" className="add-btn__icon mr-4" />
  <span className="">{name}</span>
  </button>
)

export default Button;
