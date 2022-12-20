import * as React from "react";
import * as Styled from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../constants/theme";
import { graphql, useStaticQuery } from "gatsby";

const Header: React.FC = () => {
	const siteMetadata = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
				}
			}
		}
	`);
	const {
		title,
		description
	} = siteMetadata.site.siteMetadata;

	return (
		<ThemeProvider theme={theme}>
			<Styled.Header>
				<Styled.Title>{title}</Styled.Title>
				<Styled.Description>{description}</Styled.Description>
			</Styled.Header>
		</ThemeProvider>
	);
};

export default Header;
