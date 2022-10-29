// style
import "./footer.style.scss";
// img

import ZuriIntership from "../../assets/img/zuri-intership.svg";
import I4G from "../../assets/img/I4G.svg";

const Footer = () => (
	<div className="footer-container">
		<span>
			<img id="Zuri" alt="zuri intership" src={ZuriIntership} />
		</span>
		<span>HNG Intership 9 Frontend Task</span>
		<span>
			<img id="i4g" alt="i4g" src={I4G} />
		</span>
	</div>
);

export default Footer;
