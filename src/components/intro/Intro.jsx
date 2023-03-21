import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TypeAnimation from "react-type-animation";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/AnlonZ_headshot.png" style="" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello! I'm</h2>
          <h1>Anlon Zhu</h1>
          <h3>
            <TypeAnimation
              className="type"
              cursor={false}
              sequence={[
                "Princeton Computer Science",
                2200,
                "Aspiring SWE",
                2200,
                "Full-stack Developer",
                2200,
                "Sustainability Advocate",
                2200,
                "Princeton Computer Science",
                2200,
              ]}
              wrapper="h3"
            />
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="arrow" />
        </a>
      </div>
    </div>
  );
}
