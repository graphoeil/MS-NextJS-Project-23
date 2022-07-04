// Imports
import React from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

/* Warning !!!! At first render, when loading data from db, 
NextJS return MeetupList (ul) empty :
<ul class="MeetupList__Wrapper-sc-1x2izhr-0 clfYRm"></ul> 
and it's very annoying for SEO !!! To solve this problem 
we use "Static Generation" and "Server-side Rendering" approach. */

// Component
const HomePage = (props) => {

	// Variables
	const { meetups } = props;

	// Return
	return(
		<React.Fragment>
			<Head>
				<title>React Meetups</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
				<meta name="description" content="Browse a huge list of react meetups" />
			</Head>
			<MeetupList meetups={ meetups }/>
		</React.Fragment>
	);

};

// Pre-rendering (SEO) - 1st approach (during build process), best option, faster, can be cached ...
// This function will be executed first during the pre-rendering process
// A kind of willComponentDidMount of beforeRenderPage (it's async method)
// Perfect for load data before rendering
// Will only work in pages folder !!
export async function getStaticProps(){
	// Fetch data from API, db ...
	// No need to use api/all-meetup here because getStaticProps 
	// only run on server before rendering page
	const client = await MongoClient.connect('mongodb+srv://graphoeil:cahouet@cluster0.zk0ra.mongodb.net/meetupsDB?retryWrites=true&w=majority');
	const db = client.db();
	const meetupsCollection = db.collection('meetups');
	const meetups = await meetupsCollection.find().toArray(); // Get all documents from collection
	client.close();
	// Always return an object !!
	return {
		props:{
			meetups:meetups.map((meetup) => {
				const { _id, image, title, address } = meetup;
				return { id:_id.toString(), image, title, address };
			})
		},
		// Revalidate for rebuild the page if data changes a lot
		// Here NextJS will re-generate the pages every 10 secondes
		revalidate:10
	};
};

// Pre-rendering (SEO) - 2nd approach (when data changes), 
// useful if need to access context (authentication ...)
// This function will not run on the build process
// But always on the server after deploying...
// export async function getServerSideProps(context){
// 	// See full NextJS course for more details about context
// 	const request = context.req;
// 	const response = context.res;
// 	// Fetch data from API, db ...
// 	// Always return an object !!
// 	return {
// 		props:{
// 			meetups:dummyMeetups
// 		}
// 	};
// };

// Export
export default HomePage;