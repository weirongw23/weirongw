import styled from "styled-components";

export const Boxes = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 14px;
	margin: 24px 0 40px;

	@media ${(props) => props.theme.breakpoints.md} {
		gap: 16px;
		margin: 20px 0 32px;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
		max-width: 500px;
		margin: 24px auto;
	}
`;

export const Box = styled.div`
	background: #212d45;
	border-radius: 12px;
	height: 144px;
	padding: 24px;
	transition: all 0.3s ease-in-out;
	&:hover {
		cursor: pointer;
		box-shadow: 3px 3px 20px rgba(47, 181, 252, 1);
		transform: scale(1.05);
	}

	@media ${(props) => props.theme.breakpoints.lg} {
		height: 210px;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		height: 135px;
		padding: 16px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		height: 110px;
		padding: 12px;

		&:nth-child(2n) {
			grid-row: 2;
		}
	}
`;

export const BoxNum = styled.h5`
	font-style: normal;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif,
		Space Grotesk;
	font-weight: 600;
	font-size: 38px;
	line-height: 40px;
	letter-spacing: 0.01em;
	color: #33aac5;
	margin-bottom: 8px;

	&:hover {
		cursor: pointer;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 32px;
		line-height: 32px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 32px;
		line-height: 26px;
	}
`;

export const BoxText = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.75);

	&:hover {
		cursor: pointer;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 20px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 14px;
	}
`;

export const Join = styled.div`
	display: flex;
	max-width: 1040px;
	justify-content: center;
	align-items: center;
	padding-bottom: 80px;

	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		justify-content: center;
		padding-bottom: 64px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 32px;
	}
`;

export const JoinText = styled.h5`
	display: flex;
	font-size: 24px;
	line-height: 40px;
	letter-spacing: 0.02em;
	color: rgba(255, 255, 255, 0.5);

	@media ${(props) => props.theme.breakpoints.md} {
		line-height: 32px;
		font-size: 20px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 16px;
		line-height: 24px;
		margin: 0 0 16px;
	}
`;

export const IconContainer = styled.div`
	display: flex;

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 160px;
		justify-content: space-between;
	}
`;
