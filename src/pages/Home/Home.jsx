import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import heroImg from "../../assets/Hero7.png";
import { FaLinkedinIn, FaGithub, FaTwitter, FaTelegram} from "react-icons/fa";
import work1 from "../../assets/work1.png";
import { Link } from "react-router-dom";

// Import SizedBox or create it if it doesn't exist
const SizedBox = ({ height, width }) => {
  return <div style={{ height, width }}></div>;
};

const Home = () => {
	// Create an array of the letters for the heading
	const headingText = "Hi, I'm Svector";
	const headingLetters = headingText.split('');
	
	return (
		<div className="home">
			<Navbar />
			<section className="hero">
				<div>
					<h1 className="animated-heading">
						{
							headingLetters.map((letter, index) => (
								<span key={index} className="hero-letter">
									{letter}
								</span>
							))
						}
					</h1>
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

			<section className="featured-projects">
				<h2>Featured Projects</h2>
				<p>
					Here are some of the selected projects that showcase my
					passion for front-end development.
				</p>

				<article className="project">
					<div>
						<button>Conceptual Work</button>
						<img src={work1} alt="" />
					</div>

					<aside>
						<h3>Promotional landing page for our favorite show</h3>
						<p>
							Teamed up with a designer to breathe life into a
							promotional webpage for our beloved show, Adventure
							Time. Delivered a fully responsive design with
							dynamic content capabilities, seamlessly integrating
							a newsletter feature to keep fans updated with the
							latest adventures.
						</p>

						<h5>PROJECT INFO</h5>
						<span>
							<p>Year</p>
							<p>2025</p>
						</span>
						<span>
							<p>Role</p>
							<p>Frontend Developer</p>
						</span>

						<div className="links">
							<Link to="#">
								<p>Live Demo</p>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_7_108)">
										<path
											d="M5.9897 19.2176L16.3036 8.90369V16.3891L18.3033 16.3891L18.3033 5.48978L7.40391 5.48978L7.40391 7.48948L14.8893 7.48948L4.57549 17.8033L5.9897 19.2176Z"
											fill="#D3E97A"
										/>
									</g>
									<defs>
										<clipPath id="clip0_7_108">
											<rect
												width="24"
												height="24"
												fill="white"
											/>
										</clipPath>
									</defs>
								</svg>
								<div className="line"></div>
							</Link>
							<Link to="#">
								<p>See on github</p>
								<FaGithub />
								<div className="line"></div>
							</Link>
						</div>
					</aside>
				</article>
			</section>

            <section className="about">
                <div>
                    <h1 className="name">About Me</h1>
                </div>

                <div>
                    <aside>
                        <h3>
                            I am a front-end developer based in Nigeria. Has Mechanical Engineering background.
                        </h3>
                    </aside>

                    <p>
                        I am a front-end developer based in Nigeria. I am
                        passionate about building accessible and user-friendly websites. I
                        am always eager to learn new things and improve on my skills. I am
                        currently learning React and I am open to new opportunities.
                    </p>

                    <a className='more' href="x.com/Eruditea_anu">MORE ABOUT ME</a>
                </div>
            </section>

            <SizedBox height="200px" />

            <section className="letsconnect">
                <div>
                    <h1 className="name">Let's Connect</h1>

                    <p>Say hello <span>@svector.anu@gmail.com</span></p>
                    
                    <p>
                        For more info, here is my <span>resume</span>{" "}  
                    </p>
                    
                    <aside>
                        <div className="icons">
                            <FaLinkedinIn />
                        </div>                         
                        <div className="icons">
                            <FaGithub />
                        </div>
                        <div className="icons">
                            <FaTwitter />
                        </div>
                        <div className="icons">
                            <FaTelegram />
                        </div>
                    </aside>
                </div>

                <div className="form">
                    <p>Name</p>
                    <input type="text" placeholder="Anuoluwa" />
                    <p>Email</p>
                    <input type="email" placeholder="anuoluwa@gmail.com" />
                    <p>Subject</p>
                    <input type="text" />
                    <p>Message</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    
                    <br />  
                    
                    <p>I agree to the terms and conditions</p>
                    <button>SUBMIT</button>
                </div>
            </section>
        </div>
    );
};

export default Home;