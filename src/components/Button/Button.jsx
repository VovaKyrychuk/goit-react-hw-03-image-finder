import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ children, onClick = null }) => {
  return (
    <Btn type="button" onClick={onClick}>
      {children}
    </Btn>
  );
};

Btn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};
