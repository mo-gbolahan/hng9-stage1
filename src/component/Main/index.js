// style
import "./main.style.scss";
// img
import ProfileImg from "../../assets/img/profile.jpg";
import ShareBtn from "../../assets/img/share.svg";
import GithubLogo from "../../assets/img/github-icon-1.svg";
import SlackLogo from "../../assets/img/slack-new-logo.svg";

const Main = () => {
	return (
		<div className="main-container container">
			<div>
				<img id="profile__img" alt="profile_img" src={ProfileImg} />
				<a href="/">
					<img id="share__btn" alt="share" src={ShareBtn} />
				</a>
				<h3>Gbolahan Oladeji</h3>
			</div>
			<nav>
				<ul className="link">
					<li>
						<a href="https://twitter.com/Mo_Gbolahan">
							Twitter Link
						</a>
					</li>
					<li>
						<a href="https://training.zuri.team/" id="btn__zuri">
							Zuri Team
						</a>
					</li>
					<li>
						<a href="http://books.zuri.team" id="books">
							Zuri Books
						</a>
					</li>
					<li>
						<a href="https://books.zuri.team/" id="book__python">
							Python Books
						</a>
					</li>
					<li>
						<a href="https://background.zuri.team" id="pitch">
							Background Check for Coder
						</a>
					</li>
					<li>
						<a
							href="https://books.zuri.team/design-rules"
							id="book__design"
						>
							Design Books
						</a>
					</li>
					<li>
						<a href="/contact" id="contact">
							Contact Me
						</a>
					</li>
					<li>
						<span id="slack">0g</span>
					</li>
				</ul>

				<div className="social">
					<a href="/">
						<img id="slack__btn" alt="slack" src={SlackLogo} />
					</a>
					<a href="/">
						<img id="github__btn" alt="github" src={GithubLogo} />
					</a>
				</div>
			</nav>
		</div>
	);
};

export default Main;
