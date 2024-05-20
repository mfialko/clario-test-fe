import AuthPaper from './components/auth-paper/auth-paper';
import SignUpForm from './components/sign-up-form/sign-up-form';

import './App.css';
import './styles/variables.css';

function App() {
  return (
    <div className="App">
      <AuthPaper>
        <SignUpForm />
      </AuthPaper>
      
    </div>
  );
}

export default App;
