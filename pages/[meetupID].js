// Imports
import React from "react";
import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../components/meetups/MeetupDetail";

// Component
const MeetupDetailPage = ({ meetupData }) => {

	// Return
	return(
		<React.Fragment>
			<Head>
				<title>{ meetupData.title }</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
				<meta name="description" content={ meetupData.description } />
			</Head>
			<MeetupDetail { ...meetupData }/>
		</React.Fragment>
	);

};

// getStaticPaths for dynamic pages
// Like getStaticProps pre-generate props but for paths ,-)
export const getStaticPaths = async() => {
	// Get all ids for paths
	const client = await MongoClient.connect('mongodb+srv://graphoeil:cahouet@cluster0.zk0ra.mongodb.net/meetupsDB?retryWrites=true&w=majority');
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	// .find => 1st argument for filter, 2nd for which fields to extract, here only _id field
	const meetups = await meetupsCollection.find({}, { _id:1 }).toArray();
	client.close();
	// Return
	return {
		// false => the paths contains all dynamic paths, in case of bad id will generate a 404 page
		// true => the paths do not contains all dynamic paths, in case of bad id will generate a page with 1st id
		// With vercel we must set fallback to true or 'blocking' for avoid latence or cached bugs...
		fallback:'blocking',
		// Paths array
		paths:meetups.map((meetup) => {
			return {
				params:{
					meetupID:meetup._id.toString()
				}
			};
		})
	};
};

// Pre-rendering (SSG)
export const getStaticProps = async(context) => {
	// Get meetupID
	const meetupID = context.params.meetupID;
	// Fetch data for single meetup
	const client = await MongoClient.connect('mongodb+srv://graphoeil:cahouet@cluster0.zk0ra.mongodb.net/meetupsDB?retryWrites=true&w=majority');
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	// findOne, must pass id into an ObjectId !!!
	const selectedMeetup = await meetupsCollection.findOne({ _id:ObjectId(meetupID) });
	client.close();
	// Variables
	const { _id, image, title, address, description } = selectedMeetup;
	// Return
	return {
		props:{
			meetupData:{ _id:_id.toString(), image, title, address, description }
		}
	};
};

// Export
export default MeetupDetailPage;