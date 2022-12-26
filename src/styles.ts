import styled from "styled-components";
import { Link } from "gatsby";
import { device } from "./constants/theme";

// Styled components accessible to the global scope of the app.

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.purple};
  border-bottom: 1px dotted ${props => props.theme.purple};

  &:hover {
    border-bottom: 1px solid ${props => props.theme.purple};
  }
`;

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px;

  @media ${device.tablet} {
    padding: 24px;
  }

  @media ${device.laptop} {
    max-width: 70%;
    margin: 0 auto;
  }

  @media ${device.laptopLarge} {
    max-width: 60%;
  }
`;

export const StyledMainPostView = styled.main`
  max-width: 768px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  
  @media ${device.tablet} {
    padding: 24px;
  }
`;

export const StyledH1 = styled.h1`
  color: ${props => props.theme.blue};
`;
