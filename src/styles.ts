import styled from "styled-components";

// Styled components accessible to the global scope of the app.

export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.purple};
  border-bottom: 1px dotted ${props => props.theme.purple};
`;
