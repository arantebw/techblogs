import * as React from "react";
import * as Styled from "./styles";
import { PageProps } from "gatsby";

const Header: React.FC<PageProps> = () => {
	return (
		<Styled.Header>
			<Styled.Title>
				Billy Arante's Techblogs
			</Styled.Title>
			<Styled.Bio>
				Babbling about computer programming, open-source software, web
				development, and other stuff.
			</Styled.Bio>
		</Styled.Header>
	);
};

export default Header;
