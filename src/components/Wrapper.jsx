import styled from "styled-components";

const StyledWrapper = styled.div`
	width: 90%;
	margin: 0 auto;
	padding: 15px;
	box-sizing: border-box;
	background-color: tomato;
	margin-bottom: 10px;
`;

export const Wrapper = (props) => {
	return <StyledWrapper className="wrapper">{props.children}</StyledWrapper>;
};
