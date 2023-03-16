import React from 'react';
import styles from './assets/scss/App.scss';
import styled from 'styled-components';
import Content from './Content';

/**
 * JavaScript 파일마다 고유한 CSS 네임 스페이스를 부여해주기 때문에, 각 React 컴포넌트에 완전히 격리된 스타일을 적용할 수 있게 됩니다.
 */

const StyledH1 = styled.h1`
    width: 300px;
    text-align: center;
    margin: 100px auto;
    padding: 20px 20px 20px 20px;
    border: 2px solid #999;
    color: #1144fe;
    background-color: #cdc1ce;
`;

const StyledDiv = styled.div`
    text-align: center;
    color: #111;
    font-size: 20px;
    font-weight: bold;
`;
/*
const StyledContent = styled.p`
    color: #f00;
    font-size: 20px;
    font-weight: bold;
`;*/

function App(props) {    
    return (
        <StyledDiv id='App'>
            <StyledH1>CSS in JS: Styled Component</StyledH1>
            <Content color = {'#f00'}>
                Styled Components 연습
            </Content>
        </StyledDiv>
    );
}

export default App;