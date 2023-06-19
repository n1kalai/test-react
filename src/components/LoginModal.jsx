import styled from "styled-components";

const StyledModal = styled.div`
	width: 400px;
	height: 400px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	position: fixed;
	left: calc(50% - 200px);
	top: calc(50% - 200px);
	background-color: white;
	box-shadow: 0 0 10px lightgray;
	z-index: 1;
`;

export const LoginModal = ({ setLogIn, onLogin, onCloseModal }) => {
	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setLogIn((prev) => ({ ...prev, [name]: value }));
	};
	return (
		<StyledModal>
			<input name="name" placeholder="nickname" onChange={handleChangeInput} />
			<input name="password" type="password" onChange={handleChangeInput} />
			<button onClick={onLogin}>Log in </button>
			<button onClick={() => onCloseModal(false)}>close modal</button>
		</StyledModal>
	);
};
