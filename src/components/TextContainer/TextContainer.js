import React from 'react';
import styled from 'styled-components';

import onlineIcon from '../icons/onlineIcon.png';

import './TextContainer.css';

const TextBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 100px;
	color: white;
	height: 60%;
	justify-content: space-between;
	@media (min-width: 320px) and (max-width: 1200px) {
		display: none;
	}
`;

const ActiveContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 50%;
`;

const TextContainer = ({ users }) => (
	<TextBox>
		{users ? (
			<div>
				<h1>People currently chatting:</h1>
				<ActiveContainer>
					<h2>
						{users.map(({ name }) => (
							<div key={name} className='activeItem'>
								{name}
								<img alt='Online Icon' src={onlineIcon} />
							</div>
						))}
					</h2>
				</ActiveContainer>
			</div>
		) : null}
	</TextBox>
);

export default TextContainer;
