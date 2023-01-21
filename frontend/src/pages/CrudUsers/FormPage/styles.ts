import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
max-width: 1280px;
margin: 0 auto;
height: 100%;
display: flex;
flex-direction: column;
`;

export const Submit = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors["base-green-light"]};
     color: ${({ theme }) => theme.colors["base-white"]};
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    


    &:hover{
        background: ${({ theme }) => theme.colors["base-green-dark"]};
        color: ${({ theme }) => theme.colors["base-blue"]};
    }

`;

export const ButtonBack = styled.button`
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors["base-red"]};
     color: ${({ theme }) => theme.colors["base-white"]};
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    margin-bottom: 50px;
    margin-left: 100px;
    margin-top: 50px;
    


    &:hover{
        background: ${({ theme }) => theme.colors["base-red-light"]};
        color: ${({ theme }) => theme.colors["base-blue"]};
    }

`;

export const Button = styled.button`
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
       background: ${({ theme }) => theme.colors["base-green-dark"]};
        color: ${({ theme }) => theme.colors["base-blue"]};
    }

`;
