import styled from 'styled-components';

// NAV STYLES HERE
export const StyledNav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

// HEADER STYLES HERE
export const StyledHeader = styled.div`
	position: relative;
	text-align: center;
	color: white;
`;
export const StyledHeaderImg = styled.img`
	width: 100%;
	height: auto;
`;
export const StyledHeaderText = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 2rem;

	& > h1 {
		border-bottom: 1px solid white;
	}
`;

// ABOUT ME STYLES HERE
export const StyledSection = styled.div`
	width: 80%;
	margin: 8rem auto;
	padding: 6rem 1rem;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	background-color: #424242;
	border-radius: 5px;
`;
export const StyledProfileImg = styled.img`
	width: 25rem;
	height: auto;
	border-radius: 50%;
	transform: rotate(90deg);
`;
export const StyledProfileText = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	& > h3 {
		font-size: 1.8rem;
		width: 40%;
		border-bottom: 1px solid white;
	}
	& > p {
		font-size: 1rem;
	}
	& > button {
		text-decoration: none;
		padding: 0.5rem 1rem;
		color: black;
		border: 1px solid black;
		margin-top: 2rem;

		&:hover {
			cursor: pointer;
		}
	}
`;

// PROJECTS LIST STYLES HERE
