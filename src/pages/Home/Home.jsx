import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import heroImg from "../../assets/Hero7.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SizedBox = ({ width, height }) => {
    return <div style={{ width, height }} />;
};

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

            <SizedBox height="200px" />

            <section className="about">
                <div>
                    <h1>About Me</h1>
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

                    <a href="x.com/Eruditea_anu">MORE ABOUT ME</a>
                </div>
            </section>

            <SizedBox height="200px" />

            <section className="lets-connect">

              <aside>
                <h1 style={{ whiteSpace: "nowrap" }}>LET'S CONNECT</h1>
                </aside>z






                <div>
                    <p>
                        Say hello{" "}
                        <a 
                            href="mailto:svector.anu@gmail.com" 
                            style={{ textDecoration: 'underline', color: 'chartreuse' }}
                        >
                            @svector.anu@gmail.com
                        </a>
                        <br />
                        For more info here is my{" "}
                        <a 
                            href="resume" 
                            style={{ textDecoration: 'underline', color: 'chartreuse' }}
                        >
                            resume
                        </a>
                    </p>
                </div>

                <aside>
                    <div className="icons">
                        <FaLinkedinIn />
                    </div>
                    <div className="icons">
                        <FaGithub />
                    </div>
                    <div className="icons">
                        <FaXTwitter />
                    </div>
                    <div className="icons">
                        <FaInstagram />
                    </div>
                </aside>
            </section>
        </div>
    );
};

export default Home;