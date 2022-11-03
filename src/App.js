import "./App.scss";

// component
import Main from "./component/Main";
// import Footer from "./component/Footer";
import Layout from "./component/Layout";

import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Main />} />
				</Route>

				{/* <Footer /> */}
			</Routes>
		</div>
	);
}

export default App;
