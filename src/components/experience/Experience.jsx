import "./experience.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

export default function Experience() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      icon: "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SamCopeland/phpmeXx6V.png",
      title: "Chess.com | Backend Engineering Intern",
      desc: "Designed, developed, and deployed a full-stack interface for marketing staff to deploy advertisements and group them in marketing campaigns. Expanded backend support for site-wide marketing banners to engage audiences, increasing clickthrough rate from 7% to 15%.",
      img: "https://play-lh.googleusercontent.com/r1Y5MnQg24M87pcRiXLVuYGAboOu50b1zi5DgGPAjCmt5zpUrfw--GpGnWBF_zcARQ=w720-h405-rw",
    },
    {
      id: "2",
      icon: "https://ecomotion.us/wp-content/uploads/2017/07/ecomotion-logo-digital-transparent-300x286.png",
      title: "Ecomotion | Sustainability Intern",
      desc: "Programmed a data-parsing Python algorithm to analyze 20 years of electricity, water, and natural gas data to inform a school district’s strategic energy plan. Researched natural gas decarbonization, verified Los Angeles carbon intensity data, and researched local sustainability efforts for designing a new city-wide sustainability office.",
      img: "../assets/anlon-ecomotion.jpeg",
    },
    {
      id: "3",
      icon: "https://media.glassdoor.com/sqll/676625/the-energy-coalition-squarelogo-1446139698468.png",
      title: "The Energy Coalition | Education Intern",
      desc: "Wrote >30 lessons for K-12 students about air pollution, the energy-water nexus, and other environmental topics for the PEAK Project. Researched background information for teachers about climate literacy, waste management, and water. Wrote, edited, and researched data for training manuals on saving energy for San Diego employees.",
      img: "../assets/anlon-tec.jpeg",
    },
    {
      id: "4",
      icon: "https://upload.wikimedia.org/wikipedia/en/2/24/Bren_logo_216.png",
      title: "Bren School of Environmental Science | Research",
      desc: "Quantified the energy potentials of wind power and photovoltaics for every country across the globe. Used GIS and mathematical models. Projected the levelized cost of electricity and burden of each renewable energy technology.",
      img: "../assets/RE-Research.png",
    },
    {
      id: "5",
      icon: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/University_of_California%2C_San_Diego_seal.svg/1200px-University_of_California%2C_San_Diego_seal.svg.png",
      title: "Global Environmental Leadership and Sustainability",
      desc: "Statistically analyzed atmospheric carbon levels with UCSD graduate students, wrote an issue paper on economic and environmental impacts of H.R. 4926 carbon tax, lobbied representative Mimi Walters (and her legislative assistant in the image on the right) in D.C. to co-sponsor the tax. Learned confident improv speaking skills and about making scientifically-informed policies.",
      img: "../assets/dc-lobby.jpg",
    },
    {
      id: "6",
      icon: "https://3.bp.blogspot.com/-U4ilUGxYzSQ/XBYMH0d7xCI/AAAAAAAAAfk/wzlo33uvBzMMy0_9AsQIsC0EWTH5HIq1gCLcBGAs/s1600/bjkhg.jpg",
      title: "Yale Young Global Scholars",
      desc: "Sustainability and entrepreneurship program. I learned from lectures and breakout discussions on a huge variety of research: half-Earth project, Flint Water Crisis, cotton supply chain, etc. Our team also won an energy crisis simulation with a coal to hydropower transition. Our capstone project group researched a pinpoint policy solution to livestock waste management.",
      img: "../assets/yygs-speak-side-2.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="experience" id="experience">
      <h2 className="title">Experiences</h2>

      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowBackIosIcon
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIosIcon
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
}
