import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: purple;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #CCCCCC;
    width: 30%;
    min-width: 350px;
`;

export const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
`;