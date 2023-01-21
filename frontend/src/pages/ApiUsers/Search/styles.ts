import styled from 'styled-components';

export const FormInputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1rem 0;

`;

export const InputContainer = styled.input`
      width: 100%;
      outline: none;
      padding: 1rem;
      font-size: 1rem;
      max-width: 45rem;
      border-radius: .5rem;
      background: ${({ theme }) => theme.colors["base-background-card2"]};
      border: .15rem solid rgb(75, 85, 99);
      font-weight: 700;

      &::placeholder
      {
        color: ${({ theme }) => theme.colors["base-blue"]};
      }


`;

