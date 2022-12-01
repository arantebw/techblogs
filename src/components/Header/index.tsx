import * as React from "react";
import * as Styled from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../constants/theme";

const Header: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Styled.Header>
				<Styled.Title>
					Billy Arante's Techblogs
				</Styled.Title>
				<Styled.Bio>
					Babbling about computer programming, open-source software, web
					development, and other stuff.
				</Styled.Bio>
			</Styled.Header>
		</ThemeProvider>
	);
};

export default Header;
