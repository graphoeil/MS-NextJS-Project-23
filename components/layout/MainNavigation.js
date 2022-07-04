// Imports
import React from "react";
import styled from "styled-components";
import Link from "next/link";

// Component
const MainNavigation = () => {

	// Return
	return(
		<Wrapper>
			<div className="logo">React Meetups</div>
			<nav>
				<ul>
					<li>
						<Link href='/'>All Meetups</Link>
					</li>
					<li>
						<Link href='/new-meetup'>Add New Meetup</Link>
					</li>
				</ul>
			</nav>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.header`
	width: 100%;
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #77002e;
	padding: 0 10%;
	.logo{
		font-size: 2rem;
		color: white;
		font-weight: bold;
	}
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: baseline;
		li{
			margin-left: 3rem;
			a{
				text-decoration: none;
				font-size: 1.5rem;
				color: #fcb8d2;
				&:hover, &:active, &.active{
					color: white;
				}
			}
		}
	}
`;

// Export
export default MainNavigation;