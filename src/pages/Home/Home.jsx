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
            I am a  front-end developer based in Nigeria. I am
            passionate about building accessible and user-friendly websites. I
            am always eager to learn new things and improve on my skills. I am
            currently learning React and I am open to new opportunities.
          </p>

          <a href="x.com/Eruditea_anu" >MORE ABOUT ME</a>
         

          </div>

          
      </section>

       






     <section className="lets connect">
      <div>
        

        <h1>LET'S CONNECT</h1>

                 </div>
     

               </section>
     </div>


	);
};

export default Home;