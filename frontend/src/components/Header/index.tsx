import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Container, WrapperContainer } from './styles';
import api from '../../assets/api.png';

export function Header() {

  const auth = useAuth();

  return (
    <Container>
      <div className="container">
        <WrapperContainer>
          <img src={api} alt='' />
          <nav>
            <Link to="/api">
              <li >ApiUsers</li>
            </Link>

            <Link to="/image">
              <li>ApiDog</li>
            </Link>

            <Link to="/status">
              <li>ApiCat</li>
            </Link>

            <Link to="/crud">
              <li>Crud</li>
            </Link>
          </nav>
          <div className='user-logged'>
            Olá  {auth.user?.name}!
            <Link to="/">
              <button onClick={auth.signOut}>Sair</button>
            </Link>
          </div>
        </WrapperContainer>
      </div >
    </Container >
  );
}
