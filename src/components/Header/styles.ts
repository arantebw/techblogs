import styled from "styled-components";

export const Header = styled.header`
	background-color: #000000;
	color: white;
	text-align: center;
	padding-top: 16px;
	padding-bottom: 24px;
`;

export const Title = styled.h1`
	color: ${props => props.theme.pink};
	font-family: 'Arizonia', cursive;
	font-size: 40px;
`;

export const Description = styled.p`
	color: #FFFFFF;
`;
