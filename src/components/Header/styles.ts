import styled from "styled-components";
import {device} from "../../constants/theme";

export const Header = styled.header`
	background-color: #000000;
	color: white;
	text-align: center;
	padding-top: 16px;
	padding-bottom: 16px;
`;

export const Title = styled.h1`
	color: ${props => props.theme.pink};
	font-family: 'Arizonia', cursive;
	font-size: 2rem;

	@media ${device.tablet} {
		font-size: 2.5rem;
	}
`;

export const Description = styled.p`
	color: #FFFFFF;
	font-size: 1rem;
	padding-left: 16px;
	padding-right: 16px;
`;
