import styled from 'styled-components';

export const StyledHeader = styled.div`
  /* background: #0a1314; */
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 28px;
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
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

export const LangBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 124px;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #ffffff;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 14px;
  line-height: 14px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

`;

export const Select = styled.div`
  color: #ffffff;
  background-color: transparent;
  border: none;
`;

export const SelectPanel = styled.div`
  position: absolute;
  top: 42px;
  left: 0;
  width: 126px;
  padding: 10px 0;
  background: #FFFFFF;
  border-radius: 4px;
  color: #5C5C5C; 
  `;

export const SelectItem = styled.div`
  width: 100%;
  padding: 5px 16px;
  height: 24px;

  :hover{
    background: #F2F2F2
  }
`;

export const TriImg = styled.img`
  position: absolute;
  right: 7px;
  width: 8px !important;
  height: 6px !important;
`;

export const TriUp = styled(TriImg)`
  transform: rotate(180deg)
`
