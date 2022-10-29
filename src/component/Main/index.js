// style

const Main = () => {
	return (
		<div className="main-container">
			<div>
				<img id="profile__img" alt="profile_img" />
				<h3>Gbolahan Oladeji</h3>
			</div>
			<nav>
				<ul className="link">
					<li>
						<a>Twitter Link</a>
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
						<span id="slack">0g</span>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Main;
