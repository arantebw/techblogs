import * as React from "react";
import * as Styled from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../constants/theme";

const Footer: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Styled.Footer>
				<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
					<img alt="Creative Commons License" style={{borderWidth: "0"}} src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
				</a>
				<br />
				This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
			</Styled.Footer>
		</ThemeProvider>
	);
};

export default Footer;
