import styled from "styled-components";

export const Footer = styled.footer`
  text-align: center;
  font-size: 12px;
  margin-top: 16px;
  border-top: 8px solid ${props => props.theme.pink};
  padding: 24px 0;
`;

export const Nav = styled.nav`
  padding-top: 16px;
  padding-bottom: 16px;

  & a {
    margin-right: 16px;
  }
`;
