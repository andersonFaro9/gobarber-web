import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgondImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  a {
      color: #ff9000;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }

`;

const appearFromRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }

`;
export const AnimationContainer = styled.div`

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
    }

    button {
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgondImg}) no-repeat center;
  background-size: cover;
`;
