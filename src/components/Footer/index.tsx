import * as React from "react";
import * as Styled from "./styles";
import * as Global from "../../styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../constants/theme";
import { StaticImage } from "gatsby-plugin-image";

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
					<a href={"https://github.com/arantebw"}>
						<StaticImage
							src={"../../images/github.svg"}
							alt={"GitHub logo"}
						/>
					</a>
					<a href={"https://freecodecamp.org/arantebw"}>
						<StaticImage
							src={"../../images/free-code-camp.svg"}
							alt={"FreeCodeCamp logo"}
						/>
					</a>
					<a href={"https://linkedin.com/in/arantebw"}>
						<StaticImage
							src={"../../images/linkedin-in.svg"}
							alt={"LinkedIn logo"}
						/>
					</a>
					<a href={"https://twitter.com/arantebw"}>
						<StaticImage
							src={"../../images/twitter.svg"}
							alt={"Twitter logo"}
						/>
					</a>
				</Styled.Nav>
			</Styled.Footer>
		</ThemeProvider>
	);
};

export default Footer;
