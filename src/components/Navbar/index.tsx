import * as React from "react";
import { Link } from "gatsby";
import styled, {ThemeProvider} from "styled-components";
import { theme } from "../../constants/theme";

const StyledNav = styled.nav`
  background-color: ${props => props.theme.pink};
  display: flex;
  justify-content: center;
`;

const StyledList = styled.ul`
  list-style: none;
  dislay: flex;
  flex-direction: row;
`;

const StyledItem = styled.li`
  display: inline-block;
  margin-right: 16px;
  padding: 8px;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.black};
    color: ${props => props.theme.pink};
  }
  &:hover a {
    color: ${props => props.theme.pink};
  }
`;

const StyledLink = styled(Link)`
  font-family: 'Ultra', serif;
  font-weight: normal;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.theme.black};

  &:active {
    color: ${props => props.theme.black};
  }
`;

const Navbar = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledNav>
        <StyledList>
          <StyledItem>
            <StyledLink to="/">Home</StyledLink>
          </StyledItem>
          <StyledItem>
            <StyledLink to="/about">About</StyledLink>
          </StyledItem>
        </StyledList>
      </StyledNav>
    </ThemeProvider>
  );
};

export default Navbar;
