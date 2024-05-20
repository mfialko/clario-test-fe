import './error-message.style.css';

interface ErrorMessageProps {
  text: string;
}


const ErrorMessage = ({ text }: ErrorMessageProps) => {

  return (
    <p className="error-message">{text}</p>
  );
}

export default ErrorMessage;
