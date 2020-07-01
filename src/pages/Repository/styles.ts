import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2s;

    &:hover {
      color: #666;
    }
    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin: 80px 0;
  header {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      @media (max-width: 600px) {
        width: 100px;
        height: 100px;
      }
    }
    div {
      margin-left: 24px;

      strong {
        font-size: 3.6rem;
        color: #3e3e4d;

        @media (max-width: 600px) {
          font-size: 3rem;
        }
        @media (max-width: 410px) {
          font-size: 2.5rem;
        }
      }

      p {
        font-size: 1.8rem;
        color: #737380;
        margin-top: 4px;
        @media (max-width: 600px) {
          font-size: 1.5rem;
        }
        @media (max-width: 410px) {
          font-size: 1.3rem;
        }
      }
    }
  }
  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;
    li {
      & + li {
        margin-left: 80px;
        @media (max-width: 410px) {
          margin-left: 25px;
        }
      }
      strong {
        display: block;
        font-size: 3.6rem;
        color: #3e3e4d;
        @media (max-width: 600px) {
          font-size: 3rem;
        }
        @media (max-width: 410px) {
          font-size: 2.5rem;
        }
      }
      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 15px;
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
      margin-top: 10px;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 2rem;
        color: #3d3d4d;
        overflow-wrap: break-word;
        @media (max-width: 410px) {
          font-size: 1.7rem;
        }
      }

      p {
        font-size: 1.8rem;
        margin-top: 4px;
        color: #a8a8b3;
        @media (max-width: 410px) {
          font-size: 1.2rem;
        }
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
