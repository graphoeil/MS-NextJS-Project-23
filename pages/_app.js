// Imports
import '../styles/globals.css';
import Layout from "../components/layout/Layout";

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