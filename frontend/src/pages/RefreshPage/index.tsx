import axios from 'axios';
import { ReactNode, useEffect, useState, CSSProperties } from 'react';
import { useAuth } from '../../components/hooks/useAuth';
import getImage from '../../services/api';
import { Container } from './styles';

export function RefreshPage() {
  const auth = useAuth();

  const [states, setState] = useState<ReactNode>([]);
  const [loading, setLoading] = useState(true);

  async function fetchImage() {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');

      console.log(response.data.message);
      setState(response.data.message);
      setLoading(true);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchImage();
  }, []);

  // loading && <h1>Loading...</h1>
  if (loading) {
    return (
      <div className="load">
        <img src="loading" alt="" />
        <h1>Loading..</h1>
      </div>
    );
  }

  function handleReload() {
    sessionStorage.setItem('token', 'true');
    window.location.reload();
  }

  return (
    <Container>
      <>
        <div className='container'>
          <div>
            <h1>Dog API</h1>
          </div>
          <div>
            <input type="button" value="Reload page" onClick={handleReload} />
          </div>
          <div>
            <img src={states} alt="random images" />
          </div>
        </div>
      </>
    </Container>

  );
}
