// Imports
import React from "react";
import styled from "styled-components";

// Component
const MeetupDetail = ({ image, title, address, description }) => {

	// Return
	return(
		<Wrapper className="card">
			<img src={ image } alt={ title } />
			<div className="content">
				<h1>{ title }</h1>
				<address>{ address }</address>
				<p>{ description }</p>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.section`
	overflow: hidden;
	text-align: center;
	img{
		width: 100%;
		object-fit: cover;
	}
	.content{
		padding: 10px;
	}
`;

// Export
export default MeetupDetail;