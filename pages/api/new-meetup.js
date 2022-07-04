/* In the api folder, we put the code we need to simulate API web server, 
with endpoints adress, json request, etc ... Most great feature of NextJS
The code here will only run on the server ! So no problems with storing password here
Functions here will be trigger when navigating to /api/new-meetups by example */

// MongoDB
/* In the dashboard, think to add user in "Database access" and eventually 
ip adress in "Network access"
Then in Database, click "Connect" => "Connect you application" 
=> use Node.js and copy connection string (see connect below) 
=> Finally in the terminal : npm i mongodb */

// Imports
import { MongoClient } from 'mongodb';

// Send new meetup to mongodb
const handler = async(request, response) => {
	// Check method
	if (request.method === 'POST'){
		// Run code here only for POST request
		const data = request.body;
		// const { image, title, address, description } = data; just for learning ,-)
		// Connect to mongodb, change if needed user and password without <>
		// We also need to add a database name here meetups
		const client = await MongoClient.connect('mongodb+srv://graphoeil:cahouet@cluster0.zk0ra.mongodb.net/meetupsDB?retryWrites=true&w=majority');
		const db = client.db();
		// MongoDB is NoSQL, works with collections = (database), in collections we have documents (database entry)
		const meetupsCollection = db.collection('meetups');
		// Add new document to meetups collection
		const result = await meetupsCollection.insertOne(data);
		console.log(result);
		// Close connection
		client.close();
		// Response from server, here we indicate success
		response.status(201).json({
			message:'Meetup inserted!'
		});
	}
};

// Export
export default handler;