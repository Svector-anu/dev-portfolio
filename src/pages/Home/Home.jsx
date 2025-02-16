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
                    <h1 className="name">Hi, I'm SVECTOR</h1>
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
             
           <hr />

<section className="Featured">
                <div>
                    <h1 className="name">Featured Projects</h1>
                </div>

                <div>
                    <div className="project">
                        <img src={heroImg} alt="" />
                        <h3>Project Name</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quo, molestias.
                        </p>
                    </div>

                    <div className="project">
                        <img src={heroImg} alt="" />
                        <h3>Project Name</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quo, molestias.
                        </p>
                    </div>

                    <div className="project">
                        <img src={heroImg} alt="" />
                        <h3>Project Name</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quo, molestias.
                        </p>
                    </div>
                </div>
</section>


    {/* this is my about frame */}
            <section className="about">
                <div>
                    <h1 className="name"> About Me</h1>
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


                    <p> Say hello  <span> @svector.anu@gmail.com</span></p>
                    

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
                       
                     <FaXTwitter />

                     </div>
                     <div className="icons">
                       
                     <FaInstagram />

                     </div>

                        </aside>

                </div>

                <div className="form">
                   <p>Name</p>
                    <input type="text" placeholder="Anuoluwa"   />
                   <p>Email</p>
                    <input type="email" placeholder="anuoluwa@gmail.com" />
                   <p>Subject</p>
                    <input type="text" />
                   <p>Message</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    


                    <br />  

                  <p> I agree to the terms and conditions</p>
                    <button>SUBMIT</button>
                
                </div>
            </section>

               
        </div>
    );
};

export default Home;