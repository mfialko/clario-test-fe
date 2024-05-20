import './password-requirements.style.css';

interface PasswordRequirementsProps {
  password: string;
}


const PasswordRequirements = ({ password }: PasswordRequirementsProps) => {

  const minLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);

  const getState = (password: string, condition: boolean) => {
    if (!password) {
      return '';
    }
    if (condition) {
      return 'success';
    } 
    return 'error';
  }


  return (
    <div className="password-requirements">
      <p className={getState(password, minLength)}>
        8 characters or more (no spaces)
      </p>
      <p className={getState(password, hasUppercase)}>
        Uppercase and lowercase letters
      </p>
      <p className={getState(password, hasNumber)}>
        At least one digit
      </p>
    </div>
  );
}

export default PasswordRequirements;
