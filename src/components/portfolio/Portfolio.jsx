import "./portfolio.scss"
import PortfolioList from "../PortfolioList/PortfolioList"
import { useEffect, useState } from "react";
import {
  webPortfolio,
  designPortfolio,
  engineeringPortfolio,
} from "../../data";
import ImageGallery from 'react-image-gallery';


export default function Portfolio({galOpen, setGalOpen}) {

  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "web",
      title: "Software",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "engineering",
      title: "Engineering"
    }
  ]

  const images1 =
    [{
      original: '../../assets/gale.png',
      thumbnail: '../../assets/gale.png',
    },
    {
      original: '../../assets/sunny.png',
      thumbnail: '../../assets/sunny.png',
    },
    {
      original: '../../assets/hydro.png',
      thumbnail: '../../assets/hydro.png',
    },
    {
      original: '../../assets/reese.png',
      thumbnail: '../../assets/reese.png',
    },
    {
      original: '../../assets/oil.png',
      thumbnail: '../../assets/oil.png',
    },
  ];

const images2 = 
 [
    {
      original: '../../assets/kobe.jpg',
      thumbnail: '../../assets/kobe.jpg',
    },
  ];

const images3 = 
 [
    {
      original: '../../assets/research-manuscript/research-manuscript-01.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-01.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-02.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-02.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-03.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-03.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-04.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-04.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-05.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-05.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-06.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-06.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-07.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-07.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-08.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-08.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-09.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-09.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-10.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-10.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-11.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-11.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-12.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-12.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-13.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-13.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-14.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-14.png',
    },
    {
      original: '../../assets/research-manuscript/research-manuscript-15.png',
      thumbnail: '../../assets/research-manuscript/research-manuscript-15.png',
    },
  ];

const images = [[], images1, images2, images3]

  

  useEffect(()=>{
    switch(selected){
            case "web":
        setData(webPortfolio);
        break;
        case "design":
        setData(designPortfolio);
        break;
        case "engineering":
        setData(engineeringPortfolio);
        break;
        default:
          setData(webPortfolio);
    }

  },[selected]) 

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map(item=>(
          <PortfolioList 
          title={item.title} 
          active={selected === item.id} 
          setSelected={setSelected}
          id={item.id}/>
        ))}
      </ul>

      <div className="container">
        {data.map((d)=> (
          <div className="item" onClick={() => d.handleClick(setGalOpen, galOpen)}>
          <a href={d.link} target="_blank" rel="noopener noreferrer"><img src={d.img} alt="" /></a>
          <h3>{d.title}</h3>
        </div>
        ))}

        <div className= {"gallery " + (galOpen !== 0 && "active")}>          
          <span class="close" onClick={() => {setGalOpen(0)}}>&times;</span>
          <div className="carousel"> 
          <ImageGallery items={images[galOpen]}/>
          </div>
        </div>
       
      </div>
      
    </div>
  )
}
