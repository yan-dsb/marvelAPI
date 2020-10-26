import styled from 'styled-components';

import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 38px;
  color: #3a3a3a;
  margin-top: 60px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 600px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    color: #3a3a3a;
    padding: 0 24px;
    border: 0;

    border-radius: 5px 0px 0px 5px;
    border: 2px solid #fff;
    border-right: 0;
  }

  &::placeholder {
    color: #a8a8b3;
  }

  button {
    width: 210px;
    height: 70px;
    background: #40a8c4;
    border: 0;

    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#40a8c4')};
    }
  }
`;

export const Characters = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
