import { useState, useRef, useEffect } from "react";
// style
import "./contact.style.scss";

const Contact = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [agreement, setAgreement] = useState(false);
	const [message, setMessage] = useState("");
	// const [winWidth, setWinWidth] = useState();

	const submitBtn = useRef();

	let a = 0;

	// useEffect(() => {
	// 	const changeBtnWidth = () => {
	// 		setWinWidth(window.innerWidth);
	// 		if (winWidth <= 630) {
	// 			submitBtn.current.style.width = "20%";
	// 		} else {
	// 			submitBtn.current.style.width = "100%";
	// 		}
	// 		console.log(winWidth);
	// 	};
	// 	window.addEventListener("resize", changeBtnWidth);
	// 	changeBtnWidth();
	// 	return () => window.removeEventListener("resize", changeBtnWidth);
	// }, [winWidth]);
	const mouseOver = () => {
		if (
			(firstName === "" ||
				lastName === "" ||
				email === "" ||
				agreement === false ||
				message === "") &&
			a === 0
		) {
			// window.innerHeight <= 630 ? btnMoveLeft() :
			btnMoveUp();
			a = 1;
			return false;
		}

		if (
			(firstName === "" ||
				lastName === "" ||
				email === "" ||
				agreement === false ||
				message === "") &&
			a === 1
		) {
			// window.innerHeight <= 630 ? btnMoveRight() :
			btnMoveDown();

			a = 0;
			return false;
		} else {
			submitBtn.current.style.cursor = "pointer";
		}
	};
	// const btnMoveRight = () => {
	// 	submitBtn.current.style.transform = "translateX(0)";
	// };
	// const btnMoveLeft = () => {
	// 	submitBtn.current.style.transform = "translateX(-150%)";
	// };
	const btnMoveUp = () => {
		// console.log(submitBtn.current.classList.add("smallBtn"));
		console.log(submitBtn.current.style.width);
		submitBtn.current.style.transform = "translateY(120%)";
	};
	const btnMoveDown = () => {
		submitBtn.current.style.transform = "translateY(0)";
	};

	return (
		<div className="contact-container container">
			<h2>Contact Me</h2>
			<p>
				Hi there, contact me to ask me about anything you have in mind
			</p>
			<form>
				<div className="form-details">
					<div className="form-box fname half">
						<label htmlFor="first_name">First Name</label>
						<input
							type="text"
							id="first_name"
							name="first_name"
							placeholder="Enter your first name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							// required
						/>
					</div>
					<div className="form-box lname half">
						<label htmlFor="last_name">Last Name</label>
						<input
							type="text"
							id="last_name"
							name="last_name"
							placeholder="Enter your last name"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							// required
						/>
					</div>
					<div className="form-box email">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="yourname@email.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							// required
						/>
					</div>

					<div className="form-box messages">
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							placeholder="Send me a message and I'll reply as soon as possible ..."
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							// required
						></textarea>
					</div>

					<div className="form-box check">
						<label htmlFor="btn_submit">
							<input
								type="checkbox"
								id="btn_submit"
								name="agreement"
								onChange={(e) => setAgreement(e.target.checked)}
								// required
							/>
							You agree to provide your data to Gbolahan who may
							contact you.
						</label>
					</div>
					<div className="form-box btn">
						<input
							ref={submitBtn}
							type="submit"
							value="Send Message"
							// onClick={mouseOver()}
							onMouseOver={mouseOver}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Contact;
