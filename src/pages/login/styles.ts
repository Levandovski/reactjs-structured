import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center; 
    min-height: 100vh;
    max-height: auto;
    width: 100%;
    background-color: var(--secondary) !important;

    @media (max-width: 400px){
        /* background-color: blue; */
    }
`;

export const Portal = styled.div`
    margin: 30px;
    background-color: var(--main);
    min-height: 550px;
    min-width: 550px; 
    max-width: 550px; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 2px 5px 5px var(--secondary);    

    img{
        height: 100%;
        width: 40%;
        margin-bottom: 10px;
    }

    .inputLogar{
        width: 210px;
        height: 25px;
        margin-bottom: 5px;
    }
    .inputPassword{
        width: 210px;
        height: 25px;
        margin-bottom: 20px;
    }
    .btnLogar{
        width: 210px;
        height: 30px;
        cursor: pointer;
    }

    nav ul{
        display: flex;    
        margin-top:25px;   
    }
    nav ul li{
        display: flex;
        justify-content: space-evenly;     
        list-style: none;
    }
    
    nav ul li a{
        margin-left:5px;
        text-decoration: none;
    }

    nav ul li a:hover{
        margin-left:5px;
        text-decoration: underline;
    }
`;
