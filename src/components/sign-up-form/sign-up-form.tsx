import React, { useState } from 'react';

import { validationSchema } from './utils';
import ErrorMessage from '../error-message/error-message';

import './sign-up-form.style.css';
import PasswordField from '../password-field/password-field';



const SignUpForm: React.FC = () => {
  const [values, setValues] = useState<Record<string, string>>({ email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({ email: '', password: '' });
  const [isValidated, setIsValidated] = useState<Record<string, boolean>>({ email: false, password: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setIsValidated({ ...isValidated, [name]: false });
    
    if (errors[name]) { 
      setErrors(prevState => ({ ...prevState, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsValidated({ email: true, password: true });

    validationSchema
      .validate(values, { abortEarly: false })
      .then(() => {
        console.log(values);
        setErrors({ email: '', password: '' });
        // Handle successful form submission
      })
      .catch((err) => {
        const validationErrors = err.inner.reduce((acc: any, currentError: any) => {
          return { ...acc, [currentError.path]: currentError.message };
        }, {});
        setErrors(validationErrors);
      });
  };

  const getFieldState = (condition: boolean) => {
    return condition ? 'error' : 'success';
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="new-password"
          value={values.email}
          onChange={handleChange}
          className={`text-field ${isValidated.email ? getFieldState(!!errors.email) : ''}`}
        />
        {errors.email && <ErrorMessage text={errors.email} />}
      </div>
      <div className="form-group">
        <PasswordField 
          name="password"
          placeholder="Create your password"
          autoComplete="new-password"
          value={values.password}
          onChange={handleChange}
          validationState={isValidated.password ? getFieldState(!!errors.password) : undefined}
        />
      </div>
      <button type="submit" className="sign-up-button">
        Sign up
      </button>
    </form>
  );
};

export default SignUpForm;
