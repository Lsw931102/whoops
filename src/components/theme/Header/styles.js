import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #0a1314;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    margin: 0 1rem;
    outline: none;
  }
`;

export const Logo = styled.a`
  width: 185px;
  height: 36px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  outline: none;
  img {
    margin: 0;
  }
`;

export const Select = styled.select`
  width: 124px;
  height: 40px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 20px;
`;
