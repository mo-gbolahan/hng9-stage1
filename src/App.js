import "./App.scss";

// component
import Contact from "./component/Contact";
import Layout from "./component/Layout";
import Main from "./component/Main";

import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />} />
					<Route path="/contact" element={<Contact />} />
				</Route>

				{/* <Footer /> */}
			</Routes>
		</div>
	);
}

export default App;
