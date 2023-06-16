import { Fragment, useContext } from "react";
import ComponentD, { StyledComponentD } from "./ComponentD";
import { ColorContext } from "./ComponentA";
import styled from "styled-components";



const ComponentC = () => {
	const { users } = useContext(ColorContext);

	return (
		<div>
			{users?.map((user) => {
				const { email, phone, name, id, company } = user;
				return (
					<Fragment key={id}>
						<div style={{ marginBottom: 10 }}>
							{email} -{phone} -{name} -
						</div>
						<ComponentD company={company} userId={id} />
					</Fragment>
				);
			})}
		</div>
	);
};

export default ComponentC;
