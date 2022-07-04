// Imports
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

// Component
const MeetupItem = ({ id, image, title, address }) => {

	// Show detail, redirect to [meetupID].js
	const router = useRouter();
	const showDetail = () => {
		// Redirect to http://localhost:3000/id
		router.push(`/${ id }`);
	};

	// Return
	return(
		<Wrapper className="card">
			<div className="image">
				<img src={ image } alt={ title } />
			</div>
			<div className="content">
				<h3>{ title }</h3>
				<address>{ address }</address>
			</div>
			<div className="meetupActions">
				<button onClick={ showDetail }>
					Show Details
				</button>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.li`
	margin: 1rem 0;
	.image{
		width: 100%;
		height: 20rem;
		overflow: hidden;
		border-top-right-radius: 6px;
		border-top-left-radius: 6px;
		img{
			width: 100%;
			object-fit: cover;
		}
	}
	.content{
		text-align: center;
		padding: 1rem;
		h3{
			font-size: 1.25rem;
			color: #2c292b;
		}
	}
	.meetupActions{
		padding: 1.5rem;
		text-align: center;
		button{
			font: inherit;
			cursor: pointer;
			color: #77002e;
			border: 1px solid #77002e;
			background-color: transparent;
			padding: 0.5rem 1.5rem;
			border-radius: 4px;
			&:hover, &:active{
				background-color: #ffe2ed;
			}
		}
	}
`;

// Export
export default MeetupItem;