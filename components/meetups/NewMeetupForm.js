// Imports
import React, { useRef } from "react";
import styled from "styled-components";

// Component
const NewMeetupForm = ({ addMeetup }) => {

	// Uncontrolled form
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descriptionInputRef = useRef();

	// Submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		const enteredTitle = titleInputRef.current.value;
		const enteredImage = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;
		const enteredDescription = descriptionInputRef.current.value;
		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription
		};
		// Validation
		if (!enteredTitle.trim() || !enteredImage.trim() || !enteredAddress.trim() || !enteredDescription.trim()){
			return;
		}
		// Add new meetup
    	addMeetup(meetupData);
	};

	// Return
	return(
		<Wrapper className="card" onSubmit={ handleSubmit }>
			<div className="meetupFormControl">
				<label htmlFor='title'>Meetup Title</label>
				<input type='text' required id='title' ref={ titleInputRef } />
			</div>
			<div className="meetupFormControl">
				<label htmlFor='image'>Meetup Image</label>
				<input type='url' required id='image' ref={ imageInputRef } />
			</div>
			<div className="meetupFormControl">
				<label htmlFor='address'>Address</label>
				<input type='text' required id='address' ref={ addressInputRef } />
			</div>
			<div className="meetupFormControl">
				<label htmlFor='description'>Description</label>
				<textarea id='description' required rows='5' ref={ descriptionInputRef } />
			</div>
			<div className="meetupFormAction">
				<button>Add Meetup</button>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.form`
	padding: 1rem;
	.meetupFormControl{
		margin-bottom: 0.5rem;
		label{
			display: block;
			font-weight: bold;
			margin-bottom: 0.5rem;
		}
		input, textarea{
			display: block;
			font: inherit;
			border-radius: 4px;
			border: 1px solid #ccc;
			padding: 0.25rem;
			width: 100%;
		}
	}
	.meetupFormAction{
		margin-top: 1rem;
		text-align: right;
		button{
			font: inherit;
			cursor: pointer;
			background-color: #77002e;
			color: white;
			padding: 0.5rem 1.5rem;
			border: 1px solid #77002e;
			border-radius: 4px;
			font-weight: bold;
			&:hover, &:active{
				background-color: #a50e48;
				border-color: #a50e48;
			}
		}
	}
`;

// Export
export default NewMeetupForm;