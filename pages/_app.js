// Imports
import '../styles/globals.css';
import Layout from "../components/layout/Layout";

// Deploying app with Vercel.com via Github, 
// then no need to build, start ... it's continous integration ,-)

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