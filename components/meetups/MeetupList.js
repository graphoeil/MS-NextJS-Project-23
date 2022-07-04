// Imports
import React from "react";
import styled from "styled-components";
import MeetupItem from "./MeetupItem";

// Component
const MeetupList = ({ meetups }) => {

	// Return
	return(
		<Wrapper>
			{
				meetups.map((meetup) => {
					return <MeetupItem key={ meetup.id } { ...meetup }/>
				})
			}
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

// Export
export default MeetupList;