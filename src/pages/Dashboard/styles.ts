import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 4.8rem;
  max-width: 480px;
  line-height: 56px;
  margin: 80px 0 0 0;
  @media (max-width: 500px) {
    font-size: 3.5rem;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0ch;
    border-radius: 7px 0 0 7px;
    color: #3a3a3a;
    @media (max-width: 500px) {
      font-size: 1.3rem;
    }

    &::placeholder {
      color: #b8b8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 7px 7px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background 0.3s ease-in-out;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
    @media (max-width: 500px) {
      width: 100px;
      font-size: 1.3rem;
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 7px;
    width: 100%;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 2rem;
        color: #3d3d4d;
        @media (max-width: 500px) {
          font-size: 1.8rem;
        }
      }

      p {
        font-size: 1.8rem;
        margin-top: 4px;
        color: #a8a8b3;
        @media (max-width: 500px) {
          font-size: 1.3rem;
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 5px;
  margin-left: 1px;
`;
