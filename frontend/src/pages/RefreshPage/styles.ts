import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
width: 100%;
height: 100vh;
max-width: 1280px;

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    img{
        width: 500px;
        height: 500px;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    input{
        width: 200px;
        height: 50px;
        border-radius: 10px;
        background-color: #87bba2;
        color: #044434;
        font-size: 20px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 50px;
    }

    button:hover{
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
    }
}
`;
