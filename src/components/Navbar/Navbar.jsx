// import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="logo">
				<h1>SVECTOR</h1>
			</div>

			<ul>
				<li>
					<Link to="/">work</Link>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;