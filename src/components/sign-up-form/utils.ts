import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .max(64, 'Password must not exceed 64 characters')
      .matches(/^(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter and one number')
      .required('Password is required'),
  });