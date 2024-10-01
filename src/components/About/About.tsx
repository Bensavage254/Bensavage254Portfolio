import { Container } from "./styles";
import mernIcon from "../../assets/mern-icon.webp";
import mongodbIcon from "../../assets/mongo-icon.png";
import expressIcon from "../../assets/expressyellow-icon.png";
import reactIcon from "../../assets/react-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import mernIcon2 from "../../assets/mern-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import pythonIcon from "../../assets/python-icon.svg";
import JupyterIcon from "../../assets/jupyter-icon.svg";
import NextIcon from "../../assets/next.png";
import typescriptIcon from "../../assets/typescript-icon.svg";
import viteIcon from "../../assets/vite-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import mysqlIcon from "../../assets/mysql.png";
import tailwindIcon from "../../assets/tailwind-icon.svg";
import framermotionIcon from "../../assets/motion.png";
import vueIcon from "../../assets/vue-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import mernIcon3 from "../../assets/MERN-logo.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Benfelix Omondi Ogwari, a Jr MERN~fullstack web-developer and Jr Front-end developer  with a passion for creating custom online experiences for my clients. With a skill set including HTML, CSS, JavaScript, Mongo DB, Express.js, React.js, Node.js, Next.js, Vite.js and Tailwind.css ,I have the tools to bring any website vision to life.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            But my services go beyond just websites custom development - I'm also proficient in  Jr Data Scientist~Data Analyst, making it easy for me to work with Python~Jupyter Notebook</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            So if you're in need of a new website or just looking for a data analyst, I'd love to chat and see how I can help. Let's bring your website dreams and data management to reality together!</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={mernIcon} alt="MERN1" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={mongodbIcon} alt="Mongodb" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={expressIcon} alt="Express.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={reactIcon} alt="React.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={nodeIcon} alt="Node.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={mernIcon2} alt="Mern2" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.24 * 1000}>
              <img src={pythonIcon} alt="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.26 * 1000}>
              <img src={JupyterIcon} alt="Jupyter Notebook" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.28 * 1000}>
              <img src={NextIcon} alt="Next.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.30 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.32 * 1000}>
              <img src={viteIcon} alt="Vite.js" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.34 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.36 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.38 * 1000}>
              <img src={mysqlIcon} alt="MySQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.40 * 1000}>
              <img src={tailwindIcon} alt="Tailwind CSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.42 * 1000}>
              <img src={framermotionIcon} alt="Framer Motion" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.44 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.46 * 1000}>
              <img src={bootstrapIcon} alt="Bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.48 * 1000}>
              <img src={mernIcon3} alt="Mern3" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src="./Images/pic2o.png" alt="Benfelix" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
