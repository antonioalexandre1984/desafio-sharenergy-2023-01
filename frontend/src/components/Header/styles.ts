import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
`;

export const WrapperContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    img{
        margin-top: 1rem;
        margin-left: 1.5rem;
        width: 8rem;
        height: 8rem;
        -webkit-filter: drop-shadow(0px 0px 20px rgba(0 0 0 / 90%)); 
        filter: drop-shadow(0px 0px 20px rgba(0 0 0 / 90%));   
    }
      
    h1{
        font-size: 2rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors['base-blue']};
    }

    nav{
        display: inline-block;
        justify-content: space-between;
        align-items: center;
    } 

   .user-logged{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.colors['base-blue']};
        }
    
    nav a {
        gap: 10rem;
        color: ${({ theme }) => theme.colors['base-blue']};
        display: inline-block;
        margin: 10px 10px;
        text-decoration: none; 
        transition: all 0.2s;
        padding: 10px;
        border-radius: 5px;
        font-weight: 500;
        font-size: 1.5rem;
    }

    nav a:hover {
        background-color: ${({ theme }) => theme.colors['base-green-dark']};
        color: ${({ theme }) => theme.colors['base-white']};
    }
      
    button{
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: ${({ theme }) => theme.colors["base-green-light"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    transition: all 0.2s;

    &:hover {
        background: ${({ theme }) => theme.colors["base-green-dark"]};
    }
    }
`;
