import { useContext } from "react";
import { ColorContext } from "./ComponentA";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import styled from "styled-components";

const StyledComponentD = styled.div`
		background-color: orange;
		& .gela {
			color: tomato !important;
		};
		
		} 
		

`;


const ComponentD = ({ company, userId }) => {
	const { setUsers, componentAProps } = useContext(ColorContext);
	const push = useNavigate();
console.log(company)
	const handleNavigate = () => {
		push(`/${userId}`);
	};

	return (
		<StyledComponentD className="parent-div">
			<p className="gela" style={{  borderBottom: "solid 1px silver" }}>
				{company.name}
				<br />
				{componentAProps}
			</p>
			<div className="inner-div">
				<p>{company.catchPhrase}</p>
				<span>{company.bs}</span>
			</div>
			<Button blue onClick={handleNavigate}> View details</Button>
			<Button green onClick={() => push(1)}> go forward</Button>
		</StyledComponentD>
	);
};



export default ComponentD;
