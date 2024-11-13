import styled, { createGlobalStyle } from 'styled-components';

// 태그가 없는 컴포넌트
export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #000;
    --border-color: #EEE;
    --background-color: #F6FAF9;
    --font-family: 'Pretendard';
    --font-weight-light: 200;
    --font-size: 16px;
    --line-height: normal;
  }
`;

export const Uimenu = styled.button`
  color: var(--primary-color);
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight-light);
  line-height: var(--line-height);
  
  leading-trim: both;
  text-edge: cap;

  width: 75px;
  height: 75px;     
  background-repeat: no-repeat;    
  background-position: center;
  border-radius: 55px;
  border: 1.2px solid var(--border-color);
  background-color: var(--background-color);

  &::before {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

