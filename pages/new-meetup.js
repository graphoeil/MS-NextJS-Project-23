// Imports
import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

// Component
const NewMeetup = () => {

	// Router (imperative navigation)
	const router = useRouter();

	// Add new meetup to db
	const addMeetup = async(meetup) => {
		// Send request to api/new-meetup
		const response = await fetch(`http://localhost:3000/api/new-meetup`, {
			method:'POST',
			body:JSON.stringify(meetup),
			headers:{
				'Content-Type':'application/json'
			}
		});
		const data = await response.json();
		// Redirect to all meetups
		router.replace('/');
	};

	// Return
	return(
		<React.Fragment>
			<Head>
				<title>Add a new Meetup</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
				<meta name="description" content="Add your own meetups and create amazing networking opportunities" />
			</Head>
			<NewMeetupForm addMeetup={ addMeetup } />
		</React.Fragment>
	);

};

// Export
export default NewMeetup;