import styled from 'styled-components';

export const StatusPageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
width: 100%;
height: 100vh;
max-width: 1280px;
`;

export const InputContainer = styled.input`
      width: 100%;
      outline: none;
      padding: 1rem;
      font-size: 1rem;
      max-width: 25rem;
      border-radius: .5rem;
      background: ${({ theme }) => theme.colors["base-background-card2"]};
      border: .15rem solid rgb(75, 85, 99);
      font-weight: 700;

      &::placeholder
      {
        color: ${({ theme }) => theme.colors["base-blue"]};
      }





`;
