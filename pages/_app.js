// Imports
import '../styles/globals.css';
import Layout from "../components/layout/Layout";

// Deploying app with Vercel.com via Github, 
// then no need to build, start ... it's continous integration ,-)
// Warning in MongoDB "Network Access" make sure to let access 
// from anywhere with ip : 0.0.0.0/0  (includes your current IP address)

// App component => root component
function MyApp({ Component, pageProps }) {

	// Return
	return(
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
	
};

// Export
export default MyApp;