import styled from "styled-components";

export const Button = styled.button`
	background-color: ${({ green, blue }) =>
		green ? "green" : blue ? "blue" : "red"};
	font-size: 40px;
`;
