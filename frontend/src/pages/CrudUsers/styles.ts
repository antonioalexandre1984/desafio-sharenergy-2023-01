import styled from 'styled-components';

export const Container = styled.div`

width: 100%;
max-width: 1280px;
margin: 0 auto;
height: 100%;
display: flex;
flex-direction: column;  
`;

export const NewUser = styled.button`
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors["base-green-light"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    


    &:hover{
        background-color: ${({ theme }) => theme.colors["base-green-dark"]};
        color: ${({ theme }) => theme.colors["base-blue"]};
    }

`;
