// style
import "./layout.style.scss";
// component
import Footer from "../Footer";

import { Outlet } from "react-router-dom";

const Layout = () => (
	<div className="layout">
		<Outlet />
		<Footer />
	</div>
);

export default Layout;
