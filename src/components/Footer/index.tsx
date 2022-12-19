import * as React from "react";
import * as Styled from "./styles";
import * as Global from "../../styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../constants/theme";

const Footer: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Styled.Footer>
				<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
					<img
						alt="Creative Commons License"
						style={{borderWidth: "0"}}
						src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
					/>
				</a>
				<br />
				This work is licensed under a <Global.StyledLink rel="license" to={"http://creativecommons.org/licenses/by-sa/4.0/"}>Creative Commons Attribution-ShareAlike 4.0 International License</Global.StyledLink>.
				<Styled.Nav>
					<Global.StyledLink to={"https://github.com/arantebw"}>GitHub</Global.StyledLink>
					<Global.StyledLink to={"https://freecodecamp.org/arantebw"}>FreeCodeCamp</Global.StyledLink>
					<Global.StyledLink to={"https://linkein.com/in/arantebw"}>LinkedIn</Global.StyledLink>
					<Global.StyledLink to={"https://twiiter.com/arantebw"}>Twitter</Global.StyledLink>
				</Styled.Nav>
			</Styled.Footer>
		</ThemeProvider>
	);
};

export default Footer;
