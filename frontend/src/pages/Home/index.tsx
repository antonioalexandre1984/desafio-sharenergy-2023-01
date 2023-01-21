import { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/hooks/useAuth';

import { Container } from './styles';

export function HomePage() {

  const auth = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailInput(e: ChangeEvent<HTMLInputElement>) {
    console.log('email', e.target.value);
    setEmail(e.target.value);
  }

  function handlePasswordInput(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleLogin() {
    if (email && password) {
      const isLogged = await auth.signIn(email, password);
      if (isLogged) {
        console.log("Deu certo.");
        navigate('/api');
      } else {
        alert("Não deu certo.");
      }
    }
  }

  return (
    <Container>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title"> Welcome </span>

              <span className="login-form-title">

              </span>

              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="text"
                  value={email}
                  onChange={handleEmailInput}
                />
                <span className="focus-input" data-placeholder="Username"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={handlePasswordInput}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>

              <div className="container-login-form-btn">
                <button
                  className="login-form-btn"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>

              <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <a className="txt2" href="#">
                  Criar conta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>


    </Container>
  );
}
