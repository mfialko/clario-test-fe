import { useState } from 'react';

import PasswordRequirements from '../password-requirements/password-requirements';
import PasswordShownIcon from '../../icons/password-shown';
import PasswordHiddenIcon from '../../icons/password-hidden';

import './password-field.style.css';

type PasswordFieldProps = {
  validationState?: 'error' | 'success';
}

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;


const PasswordField = ({ validationState, ...inputProps }: PasswordFieldProps & InputProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="password-textfield">
        <input
          className={`text-field ${validationState ?? ''}`} 
          type={isShown ? "text" : "password"}
          {...inputProps}
        />
        {/* For smoother appearing of icons */}
        <PasswordHiddenIcon
          className={`password-icon ${validationState ?? ''}`} 
          style={{opacity: isShown ? '1' : '0' }}
          onClick={() => setIsShown(prevState => !prevState)}
        />
        <PasswordShownIcon
          className={`password-icon ${validationState ?? ''}`} 
          style={{opacity: isShown ? '0' : '1' }} 
          onClick={() => setIsShown(prevState => !prevState)}
        />
      </div>
      <PasswordRequirements password={String(inputProps.value)} />
    </>
    
    
  );
}

export default PasswordField;
