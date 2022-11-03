// style
import "./layout.style.scss";
// component
import Footer from "../Footer";

import { Outlet } from "react-router-dom";

const Layout = () => (
	<>
		<Outlet />
		<Footer />
	</>
);

export default Layout;
