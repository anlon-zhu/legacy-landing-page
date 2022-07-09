import "./topbar.scss";
import {LinkedIn, GitHub} from "@mui/icons-material";

export default function Topbar( {menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">A/Z</a>
          
        </div>
        
        <div className="right">
        <div className="itemContainer">
            <a href="https://www.linkedin.com/in/anlon-zhu" target="_blank" rel="noopener noreferrer">
            <LinkedIn className="icon"/>
            </a>
          </div>

          <div className="itemContainer">
            <a href="https://github.com/anlonymous" target="_blank" rel="noopener noreferrer">
            <GitHub className="icon"/>
            </a>
          </div>

          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
