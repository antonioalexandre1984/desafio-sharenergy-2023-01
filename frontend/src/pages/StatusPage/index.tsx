import axios from 'axios';
import React, { ReactNode, useEffect, useState } from 'react';
import { StatusPageContainer, InputContainer } from './styles';
import error from '../../assets/error.png';

export function StatusPage() {
  const [states, setState] = useState<ReactNode>([]);

  async function fetchImage(code: number) {
    const response = await axios.get(`http://localhost:4001/${code}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    );
    console.log(response.data);
    setState(response.data);
  }

  useEffect(() => {
    fetchImage(200);
  }, []);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const code = e.target.value;
    fetchImage(Number(code));
  };

  return (
    <StatusPageContainer>
      <h1>StatusPage</h1>
      <InputContainer
        type="text"
        placeholder="Search"
        onChange={handleFilter}
      />
      <div>
        <img src={error} alt="random images" />
      </div>
    </StatusPageContainer>
  );
}
