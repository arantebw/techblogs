import styled from "styled-components";

export const Footer = styled.footer`
  text-align: center;
  font-size: 12px;
  margin-top: 16px;
  border-top: 8px solid ${props => props.theme.pink};
  padding: 24px 0;
`;

export const Nav = styled.nav`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  column-gap: 24px;

  & > a {
    width: 30px;
    height: 30px;
  }
`;
