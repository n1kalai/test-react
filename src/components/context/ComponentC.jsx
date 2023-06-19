import { Fragment, useContext } from "react";
import ComponentD, { StyledComponentD } from "./ComponentD";
import { ColorContext } from "./ComponentA";
import styled from "styled-components";
import { Wrapper } from "../Wrapper";

const ComponentC = () => {
	const { users } = useContext(ColorContext);

	return (
		<div>
			{users?.map((user, index) => {
				const { email, phone, name, id, company } = user;
				return (
					<Wrapper key={id} myProp={"prop" + index}>
						<div style={{ marginBottom: 10 }}>
							{email} -{phone} -{name} -
						</div>
						<ComponentD company={company} userId={id} />
					</Wrapper>
				);
			})}
		</div>
	);
};

export default ComponentC;
