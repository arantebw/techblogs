import styled from "styled-components";
import { Link } from "gatsby";

// Styled components accessible to the global scope of the app.

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.purple};
  border-bottom: 1px dotted ${props => props.theme.purple};

  &:hover {
    border-bottom: 1px solid ${props => props.theme.purple};
  }
`;
