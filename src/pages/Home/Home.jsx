// import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import heroImg from "../../assets/Hero7.png"
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home = () => {
	return (
		<div className="home">
			<Navbar />
			<section className="hero">
				<div>
					<h1>Hi, I'm SVECTOR</h1>
					<p>
						A Nigeria based front-end developer passionate about
						building accessible and user friendly websites.
					</p>
					<aside>
						<button>Contact Me</button>
						<div className="icons">
							<FaLinkedinIn />
						</div>
						<div className="icons">
							<FaGithub />
						</div>
					</aside>
				</div>

				<img src={heroImg} alt="" />
			</section>
		</div>
	);
};

export default Home;